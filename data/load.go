package data

import (
	"fmt"
	"io/ioutil"
)

// BookPosition contains the Position and Title of a book within the complete works
type BookPosition struct {
	Position int
	Title string
}

var (
	// CompleteWorks keeps a copy of the string in memory
	CompleteWorks string

	// BookPositions are hand-curated to ensure accuracy and allow for standardization of titles
	BookPositions = []BookPosition{
		{0, "Table of Contents"},
		{2920, "The Sonnets"},
		{104806, "All's Well That Ends Well"},
		{246189, "Antony and Cleopatra"},
		{407092, "As You Like It"},
		{543774, "Comedy of Errors"},
		{636242, "Coriolanus"},
		{819225, "Cymbeline"},
		{989264, "Hamlet, Prince of Denmark"},
		{1176552, "Henry IV, Part 1"},
		{1323176, "Henry IV, Part 2"},
		{1492578, "Henry V"},
		{1651327, "Henry VI, Part 1"},
		{1799080, "Henry VI, Part 2"},
		{1964567, "Henry VI, Part 3"},
		{2125590, "Henry VIII"},
		{2285513, "King John"},
		{2418669, "Julius Caesar"},
		{2541182, "King Lear"},
		{2704776, "Love's Labour's Lost"},
		{2846090, "Macbeth"},
		{2956567, "Measure for Measure"},
		{3095720, "The Merchant of Venice"},
		{3222491, "The Merry Wives of Windsor"},
		{3362875, "A Midsummer Night's Dream"},
		{3463991, "Much Ado About Nothing"},
		{3615472, "Othello"},
		{3778089, "Pericles, Prince of Tyre"},
		{3894078, "Richard II"},
		{4038258, "Richard III"},
		{4233886, "Romeo and Juliet"},
		{4383496, "The Taming of the Shrew"},
		{4513599, "The Tempest"},
		{4617810, "Timon of Athens"},
		{4740620, "Titus Andronicus"},
		{4874426, "Troilus and Cressida"},
		{5040318, "Twelfth Night"},
		{5161747, "The Two Gentlemen of Verona"},
		{5272261, "The Two Noble Kinsmen"},
		{5418536, "The Winter's Tale"},
		{5569940, "A Lover's Complaint"},
		{5585063, "The Passionate Pilgrim"},
		{5593772, "The Phoenix and the Turtle"},
		{5595975, "The Rape of Lucrece"},
		{5684222, "Venus and Adonis"},
	}
)

// LoadTextFromFile loads the content of a text file into the CompleteWorks string
func LoadTextFromFile(filename string) error {
	dat, err := ioutil.ReadFile(filename)
	if err != nil {
		return fmt.Errorf("Load: %w", err)
	}
	CompleteWorks = string(dat)
	return nil
}