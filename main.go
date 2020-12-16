package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"pulley.com/shakesearch/data"

	"pulley.com/shakesearch/handlers"
)

func main() {
	searcher := handlers.Searcher{}
	err := data.Load("completeworks.txt")
	if err != nil {
		log.Fatal(err)
	}
	err = searcher.Load()
	if err != nil {
		log.Fatal(err)
	}

	// serve frontend
	fs := http.FileServer(http.Dir("./static/build"))
	http.Handle("/", fs)

	// search endpoints
	http.HandleFunc("/search", handlers.HandleSearch(searcher))
	http.HandleFunc("/source", handlers.HandleSource())

	port := os.Getenv("PORT")
	if port == "" {
		port = "3001"
	}

	fmt.Printf("Listening on port %s...", port)
	err = http.ListenAndServe(fmt.Sprintf(":%s", port), nil)
	if err != nil {
		log.Fatal(err)
	}
}
