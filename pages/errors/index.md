---
title: API Errors
---
{% section %}
# {% $markdoc.frontmatter.title %}

API can return various errors. They are divided by `HTTP` error code:
{% /section %}

* * *

{% section %}
### Access token expired

**Recommended client action:** use `refresh_token` provided with `access_token` in order to keep user logged in.

**Response:**
```bash
      {
        "error": "The access token expired"
      }
```
{% /section %}

* * *

{% section %}
### 400 Bad Request

These errors signalizes that data structure of the request did not met server expectations.

**Recommended action:** An error is probably in the client code itself, please check if your implementation follows JSONAPI standard and our API documentation.

**Response:**

-   We expect that only one attribute - either `business` or `review` will be sent, but both were present.

```bash
      {
        "errors": [
          {
            "title": "business, review are mutually exclusive",
            "detail": null,
            "code": "mutual_exclusion",
            "status": 400
          }
        ]
      }

```

-   Endpoint requires that `parent_resource` will be present, but it's not.

```bash
      {
        "errors": [
          {
            "title": "data[attributes][parent_resource] is missing",
            "detail": null,
            "code": "presence",
            "status": 400
          }
        ]
      }

```

**It's important to note here that this error is not about user not filling some field, but rather that entire `parent_resource` attribute was not present in the request structure itself when it was required.**

{% /section %}

 * * *

{% section %}
### 401 Unauthorized

Can occur in three situations:

-   Non authorized application tried to access a protected endpoint:

**Recommended client action:** use your client id and secret to fetch access token.

**Response:**
```bash
      {
        "errors": [
          {
            "title": "Not authenticated",
            "detail": null,
            "code": "not_authenticated",
            "status": 401
          }
        ]
      }

```

-   Someone not logged in tried to access a protected endpoint:

**Recommended client action:** redirect user to login page and instruct them to sign in.

```bash
      {
        "errors": [
          {
            "title": "Not authenticated",
            "detail": null,
            "code": "not_authenticated",
            "status": 401
          }
        ]
      }
```
{% /section %}

* * *

{% section %}
### 403 Forbidden

A logged in user tried to access a resource which they do not own / have no access to.

**Recommended action for clients:** Inform a user that they do not have access to the requested resource action.

**Response:**
-   User tried to edit a business which he/she does not own.

```bash
      {
        "errors": [
          {
            "title": "You need to be the owner of this record",
            "detail": null,
            "code": "unauthorized",
            "status": 403
          }
        ]
      }

```

-   User which is not a Food Detective tried to create a review.

```bash
      {
        "errors": [
          {
            "title": "You need to be Food Detective",
            "detail": null,
            "code": "unauthorized",
            "status": 403
          }
        ]
      }
```
{% /section %}

* * *

{% section %}
### 404 Not Found

Can occur in two situations:

-   Requested record was not found in the database:

**Recommended action for clients:** Inform a user that the record they tried to access is no longer available.

**Response:**
```bash
      {
        "errors": [
          {
            "title": "Record not found",
            "detail": null,
            "code": "record_not_found",
            "status": 404
          }
        ]
      }

```

-   Route was not found / invalid URL:

**Recommended action for clients:**Likely an error in client code itself since users will not type API URLs themselves.

**Response:**
```bash
      {
        "errors": [
          {
            "title": "Route not found",
            "detail": null,
            "code": "route_not_found",
            "status": 404
          }
        ]
      }

```
{% /section %}

* * *

{% section %}
### 405 Method Not Allowed

This error occurs when a existing API endpoint is requested with wrong HTTP verb (e.g. `POST` instead of `PATCH`) or not supported HTTP verb is used.

**Recommended action for clients:**Likely an error in client code itself since users will not choose a HTTP verb themselves.

**Response:**
```bash
    {
      "errors": [
        {
          "title": "Invalid HTTP verb",
          "detail": null,
          "code": "invalid_http_verb",
          "status": 405
        }
      ]
    }

```
{% /section %}

* * *

{% section %}
### 406 Not Acceptable

HTTP `Content-Type` header was not equal to `application/vnd.api+json`

**Recommended action for clients:** probably an error in client code itself since users will not choose a HTTP `Content-Type` header themselves.

**Response:**
```bash
    {
      "error": "The requested content-type 'application/vnd.api' is not supported."
    }

```
{% /section %}

* * *

{% section %}
### 409 Conflict

The request could not be completed because of some kind of conflict. There are two types of conflicts that can trigger this error:

-   Database conflict

Server tried to create a database record with ID already present in the database.

**Recommended action for clients:** Try to send a request again, there is high chance it will succeed this time.

**Response:**
```bash
      {
        "errors": [
          {
            "title": "PG::UniqueViolation",
            "detail": "Duplicate key value violates unique constraint",
            "code": "database_conflict",
            "status": 409
          }
        ]
      }

```

-   ID in URL does not match ID in the request body

If `data[id]` in the request body does not match the ID in the URL then this error is returned.

**Recommended action for clients:** An error is probably in the client code itself, please check if your implementation follows JSONAPI standard and our API documentation.

**Response:**
```bash
      {
        "errors": [
          {
            "title": "URL/params ID conflict",
            "detail": "ID in URL is different from ID in params",
            "code": "url_params_id_conflict",
            "status": 409
          }
        ]
      }
```
{% /section %}

* * *

{% section %}
### 415 Unsupported Media Type

This error occurs when `Accept` HTTP header is not `application/vnd.api+json`.

**Recommended action for clients:**Likely an error in client code itself since users will not choose a HTTP `Accept` header themselves.

**Response:**
```bash
    {
      "errors": [
        {
          "title": "Unsupported Media Type",
          "detail": null,
          "code": "unsupported_media_type",
          "status": 415
        }
      ]
    }

```
{% /section %}

* * *

{% section %}
### 422 Unprocessable Entity

Validation error. The request body was correct but values of given attributes were not.

**Recommended action for clients:** A user typed incorrect data, request them to fix it. Use provided `title` attribute in the response to guide them which field they need to correct. Additionally `code` and `meta` attributes can be used in order to tell them what kind of data server expects.

**Response:**
```bash
    {
      "errors": [
        {
          "title": "name",
          "detail": "Name can't be blank",
          "code": "blank",
          "status": 422,
          "meta": {}
        }
      ]
    }

```
{% /section %}

* * *

{% section %}
### 500 Internal Server Error

In case something went horribly wrong on the server side.

**Recommended action for clients:** Inform a user that something went wrong on the server side and they should try again in the near future. You can also inform them that we are working in order to fix that.

**Response:**
```bash
    {
      "errors": [
        {
          "title": "StandardError",
          "detail": null,
          "code": "server_error",
          "status": 500,
          "description": "[error message (only in development environment)]",
          "backtrace": [
            "[array of files and lines which lead to this error occuring (only in development environment)]"
          ]
        }
      ]
    }
```

It's important to note that this is *NOT* a comprehensive list of all the errors that can occur in the application.

This is just the list of the most important ones.
{% /section %}