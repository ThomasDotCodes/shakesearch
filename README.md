# Overview

Pulley Shakesearch reference:
https://pulley-shakesearch.herokuapp.com/. Try searching for "Hamlet" to display
a set of results.

In its current state, the app is just a rough prototype. The search is
case sensitive, the results are difficult to read, and the search is limited to
exact matches.

## Back-end prompt
Think about the problem from the user's perspective and prioritize your changes according
to what you think is most useful.

If you are stronger on the front-end, complete the react-prompt.md in this
folder.

## Front-end prompt

#### User Assumptions
* The user is someone interested in William Shakespeare.
* The user wants an easy way to find all references to a word or phrase.
* The user wants to search all works of Shakespeare at once.

#### Design Assumptions
* Serif fonts and textured paper could work as a rough theme.
* Results should provide context (surrounding words and book name).
* Results should be clearly defined from each other.
* Matched words should stand out from their context.
* Results should be sorted and grouped.

### Notes
- Decided to go with css-in-js using emotion instead of an external .scss file. This eliminated the need for node-sass.
- Client highlights search term agnostic to how server searches for text.
- Could add caching with minimal effort, but due to Heroku free tier, limiting resources

### Further Improvements
Based on time/priorities, the following improvements could be made

| points | description              |
|--------|--------------------------|
| 2      | server caching (redis)   |
| 1      | results pagination       |
| 1      | multiple inputs          |
| 1      | user-configured case sensitive search|
| 3      | mobile responsive ux
| 2      | animated logo and favicon|
| 2      | dynamic details from wiki api|
| 3      | autocomplete search|