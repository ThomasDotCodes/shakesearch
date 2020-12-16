# ShakeSearch

Welcome to the Pulley Shakesearch Take-home Challenge! In this repository,
you'll find a simple web app that allows a user to search for a text string in
the complete works of Shakespeare.

You can see a live version of the app at
https://pulley-shakesearch.herokuapp.com/. Try searching for "Hamlet" to display
a set of results.

In it's current state, however, the app is just a rough prototype. The search is
case sensitive, the results are difficult to read, and the search is limited to
exact matches.

## Your Mission

Improve the search backend. Think about the problem from the user's perspective
and prioritize your changes according to what you think is most useful.

To submit your solution, fork this repository and send us a link to your fork
after pushing your changes. The project includes a Heroku Procfile and, in its
current state, can be deployed easily on Heroku's free tier.

If you are stronger on the front-end, complete the react-prompt.md in this
folder.

## Notes
- Decided to go with css-in-js using emotion instead of an external .scss file. This eliminated the need for node-sass.
- Client highlights search term agnostic to how server searches for text.
- Could add caching with minimal effort, but due to Heroku free tier, limiting resources

## Further Improvements
Based on time/priorities, the following improvements could be made

| points | description              |
|--------|--------------------------|
|        | server caching (redis)   |
|        | results pagination       |
|        | multiple inputs          |
|        | user-configured case sensitive search|
|        |                          |
|        |                          |