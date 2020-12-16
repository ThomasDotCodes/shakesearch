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
	// decouple the data from search functionality
	err := data.LoadTextFromFile("completeworks.txt")
	if err != nil {
		log.Fatal(err)
	}

	// since we can instantiate multiple searchers (in theory), pass text to load in on instantiation
	searcher := handlers.Searcher{}
	err = searcher.Load(data.CompleteWorks)
	if err != nil {
		log.Fatal(err)
	}

	// serve frontend
	fs := http.FileServer(http.Dir("./client/build"))
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
