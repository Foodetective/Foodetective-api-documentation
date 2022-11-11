---
title: Business Cards
---
{% section %}
{% layoutTwoCol %}

{% methodCopy %}
{% methodInfo %}
  # {% $markdoc.frontmatter.title %}
  Return all cards successfully used by specific business.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Returns all cards successfully used by specific business `id`. You can retrieve this `id` from ...
  {% /listitem %}
  {% listitem title="include" validation="query string" %}
  Include associations (*delimited with comma*). Available associations: user
  {% /listitem %}
  {% listitem title="sort" validation="query string" %}
  {% /listitem %}
  {% listitem title="page" validation="query integer" %}
  Page offset to fetch.
  {% /listitem %}
  {% listitem title="per_page" validation="query integer" %}
  Number of results to return per page.
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "GET", path: "/api/v1/businesses/{id}/cards"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/businesses/{id}/cards`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }});
      const data = await res.json();
    }
  ```
  {% /tab %}
  {% tab label="py"%}
  ```py
    Python example
  ```
  {% /tab %}
  {% tab label="java"%}
  ```java
    Java example
  ```
  {% /tab %}
  {% tab label="ruby"%}
  ```ruby
    Ruby example
  ```
  {% /tab %}
  {% tab label="go"%}
  ```go
    Go example
  ```
  {% /tab %}
{% /tabs %}
{% /codeBlock %}
{% codeBlock title="RESPONSE" %}
  ```json
    {
      "url": "/api/v1/businesses/{id}/cards",
      "method": "GET",
      "data": [
        {
          "id": "15cc2af5-a33a-4ccc-bc9b-1c74ecbc59a8",
          "type": "cards",
          "links": {
            "self": "/cards/15cc2af5-a33a-4ccc-bc9b-1c74ecbc59a8"
          },
          "attributes": {
            "stripe-source-id": "pm_1Jw7FIBtvCfXmRItGquxmkDn",
            "last4": "4242",
            "expiration-date": "2022-02-01",
            "brand": "visa"
          },
          "relationships": {
            "user": {
              "links": {
                "self": "/cards/15cc2af5-a33a-4ccc-bc9b-1c74ecbc59a8/relationships/user",
                "related": "/cards/15cc2af5-a33a-4ccc-bc9b-1c74ecbc59a8/user"
              }
            }
          }
        },
      ],
      "meta": {
        "total-count": 3,
        "total-pages": 1
      }
    }
  ```
{% /codeBlock %}  

{% /layoutTwoCol %}
{% /section %}