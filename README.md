# Authentication

### Token vs cookies


Cookie:
* Automatically included on all requests
* Unique to each domain
* Cannot be sent to different domains (security purposes)

Token:
* Can be sent only in needed requests
* Have to manually wire up
* Can be sent to any domain
* Trending (better for scaling applications)
* Goes hand in hand with SPA frameworks like Angular, React and Vue because they consume multiple services that requires authorization

More on: https://auth0.com/blog/cookies-vs-tokens-definitive-guide/
