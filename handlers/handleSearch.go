package handlers

import (
	"encoding/json"
	"index/suffixarray"
	"math"
	"net/http"
	"pulley.com/shakesearch/data"
	"regexp"
)

var (
	maxResults = 9999
)

type Searcher struct {
	Text string
	SuffixArray *suffixarray.Index
}

type SearchResult struct {
	Start int    `json:"start"`
	End   int    `json:"end"`
	Text  string `json:"text"`
	Book  string `json:"book"`
}

func (s *Searcher) Load(text string) error {
	s.Text = text
	s.SuffixArray = suffixarray.New([]byte(s.Text))
	return nil
}

func (s *Searcher) Search(query string) (results []SearchResult) {
	idxs := s.SuffixArray.FindAllIndex(regexp.MustCompile(`(?i)`+query), -1)
	for _, idx := range idxs {
		start, end := idx[0], idx[1]
		var book string
		for _, bookPosition := range data.BookPositions {
			if start >= bookPosition.Position {
				book = bookPosition.Title
			}
		}
		// TODO: find char after first \n we find
		var safeStartPos = int(math.Max(0, float64(start - 150)))
		var safeEndPos = int(math.Min(float64(len(s.Text)), float64(end + 150)))

		// TODO: last char before last \n we find
		results = append(results, SearchResult{start, end, s.Text[safeStartPos:safeEndPos], book})
	}
	return results
}

func HandleSearch(searcher Searcher) func(w http.ResponseWriter, r *http.Request) {
	return func(w http.ResponseWriter, r *http.Request) {
		query, ok := r.URL.Query()["q"]
		if !ok || len(query[0]) < 1 {
			w.WriteHeader(http.StatusBadRequest)
			w.Write([]byte("missing search query in URL params"))
			return
		}

		results := searcher.Search(query[0])

		// TODO: pagination
		if len(results) >= maxResults {
			results = results[:maxResults]
		}

		a, err := json.Marshal(results)
		if err != nil {
			w.WriteHeader(http.StatusInternalServerError)
			w.Write([]byte("encoding failure"))
			return
		}
		w.Header().Set("Content-Type", "application/json")

		// TODO: add env detection/cli args for CORS
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE, PATCH")
		w.Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-TOKEN, Authorization")

		w.Write(a)
	}
}
