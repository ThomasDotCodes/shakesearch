# Overview
ShakeSearch project by Thomas Gorence (https://thomas.codes)

https://shakesearch-thomasdotcodes.herokuapp.com/

##Pulley Shakesearch reference:
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
Improve the design and build the following:
![Search GIF](shakespearetest.gif)
Here are the links to the [design](https://www.figma.com/file/Q0VfmCutWFayWMDtoLEW0Q/InvestorBook-iterations?node-id=0%3A1). Match the designs closely in your implementation

### Observations
* mockup shows search term for "Hamlet" but doesn't show corresponding results
* search "results" does not show name of book, or indicate how many results were found

### Design Assumptions
* Matched words should stand out from their context.
* Results should be sorted and grouped (into books).
* It would be helpful to know how many results (per book) were found

### Notes
* Slightly re-organized golang packages to decouple data from search logic
* created new package.json and structure for client folder. Client might even be in its own repo (`shakesearch-ui`), or at the same level as `shakesearch-api` would be.
* First decided to go with css-in-js using emotion instead of an external .scss file to eliminate need for node-sass. (Reversed course after analyzing the provided design, moved back to scss to decouple design from code more.)
* Client highlights search term agnostic to how server searches for text.
* Could add caching with minimal effort, but due to Heroku free tier I didn't do this.
* Largest UI challenge was trying to make a responsive layout without resorting to media breakpoints (which I would do, given more time).
* Had not used any of these animation libraries before, tried a few out until settling with react-simple-animate.

### Further Improvements
Given more time/priority I jotted down the following "tickets" for more improvements:

| points | description              |
|--------|--------------------------|
| 2      | server caching (redis)   |
| 1      | results pagination       |
| 1      | multiple inputs          |
| 1      | user-configured case sensitive search|
| 3      | refined breakpoints/responsive design|
| 2      | refined animations|
| 2      | dynamic details from third party api|
| 3      | autocomplete search|
| 5      | use NLP to auto create links for interesting queries |
| 5      | test animation approaches (css, js, transforms vs positioning, etc) |
| 1      | review layout with designer, get updated fonts/assets       |
| 2      | more intelligent truncating of "context" provided in search results (don't cut off mid-word or mid-rune!) |
| 2      | more server (golang) error handling|
| 2      | more client (react) error handling|