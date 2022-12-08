---
title: Foodetective Universal API
---
{% section %}
# {% $markdoc.frontmatter.title %}

{% callout %}
### Server Token
The server token is required to access data that does not require a Foodetective user context. You can obtain it using:
{% link target="_blank" href="https://api.foodetective.co/oauth/authorize?client_id=valid&redirect_uri=http://localhost:8080/oauth-callback&response_type=code&scope=trusted+refresh_token+public" %}
### Authorization endpoint
{% /link %}
{% /callout %}


```bash
curl -F grant_type=client_credentials -F client_id=valid_client_id -F client_secret=valid_client_secret -F scope=public -X POST https://api.foodetective.co/oauth/token
```

{% callout %}
### Expiration
Keep in mind that access tokens will expire after four weeks.
A user access token is required when a Foodetective user context is necessary.

Flow should be initiated by directing the resource owner’s user-agent to the authorization endpoint:
{% link target="_blank" href="https://api.foodetective.co/oauth/authorize?client_id=valid&redirect_uri=http://localhost:8080/oauth-callback&response_type=code&scope=trusted+refresh_token+public" %}
## Authorization endpoint
{% /link %}

After access grant, the user-agent will be redirected back to redirection URI provided in the request. The redirection URI includes an authorization code.
The access token can be requested from the server’s token endpoint by including the authorization code received in the previous step:
{% /callout %}

```bash
curl -F grant_type=authorization_code -F client_id=valid_client_id -F client_secret=valid_client_secret -F redirect_uri=http://localhost:8080/oauth-callback -F code=valid_code -X POST https://api.foodetective.co/oauth/token
```

{% callout %}
A user access token returned by the server’s token endpoint will be valid for 6 hours.

When the user’s `access_token` has expired, you can obtain a new `access_token` by exchanging the refresh_token associated with the `access_token` using the Token Exchange endpoint. Refreshing the user access token means that you don’t need to ask the user to authorize your app for the same permissions again:
{% link target="_blank" href="https://api.foodetective.co/oauth/authorize?client_id=valid&redirect_uri=http://localhost:8080/oauth-callback&response_type=code&scope=trusted+refresh_token+public" %}
## Authorization endpoint
{% /link %}
{% /callout %}

```bash
curl -F grant_type=refresh_token -F client_id=valid_client_id -F client_secret=valid_client_secret -F refresh_token=valid_refresh_token -X POST https://api.foodetective.co/oauth/token
```
{% section %}
