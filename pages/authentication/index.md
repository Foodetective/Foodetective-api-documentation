---
title: Foodetective API Reference
---
{% section %}
# {% $markdoc.frontmatter.title %}

{% callout %}
The Foodetective API is organized around REST. Our API has predictable resource-oriented URLs, accepts form-encoded request bodies, returns JSON-encoded responses, and uses standard HTTP response codes, authentication, and verbs.
{% /callout %}

{% callout %}
### Foodetective API Authentication Guide
There are two authentication mechanisms for accessing the Foodetective API. To begin, create an application so that you can follow along with authenticating and making requests on the API. Note that you will have to sign in with a Foodetective for business account.
{% /callout %}

{% callout %}
### Server Token
A server token can be used to access data that does not require a Foodetective user context. It can be generated using the OAuth 2.0 client_credentials flow. Please note that your server token is considered sensitive and it is your responsibility to protect it.
{% /callout %}

{% callout %}
### User Access Token
A user access token is required when a Foodetective user context is necessary. The Foodetective API uses OAuth 2.0 to allow developers to get a user access token to access a single user’s data or do actions on their behalf. OAuth 2.0 is a specification outlined in RFC 6749 that allows third-party services to make requests on behalf of a user without accessing passwords and other sensitive information.

You can find informations on how to obtain each token in the API documentaion.
{% /callout %}
{% /section %}