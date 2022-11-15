---
title: Businesses Tables
---
{% section %}
{% layoutTwoCol %}

{% methodCopy %}
{% methodInfo %}
  # {% $markdoc.frontmatter.title %}
  Return all tables for specific business.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Return all tables by the specific business `id`. You can retrieve this `id` from ...
  {% /listitem %}
  {% listitem title="include" validation="query string" %}
  Include associations (delimited with comma). Available associations: business
  {% /listitem %}
  {% listitem title="page" validation="query integer" %}	
  Page offset to fetch.
  {% /listitem %}
  {% listitem title="per_page" validation="query integer" %}
  Number of results to return per page.
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "GET", path: "/api/v1/businesses/{id}/tables"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/businesses/${id}/tables`, {
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
      "data": [
        {
          "id": "d13fc44c-7757-42f7-b872-f187fad12d10",
          "type": "tables",
          "links": {
            "self": "/tables/d13fc44c-7757-42f7-b872-f187fad12d10"
          },
          "attributes": {
            "number": "1",
            "number-of-seats": 2
          },
          "relationships": {
            "business": {
              "links": {
                "self": "/tables/d13fc44c-7757-42f7-b872-f187fad12d10/relationships/business",
                "related": "/tables/d13fc44c-7757-42f7-b872-f187fad12d10/business"
              }
            }
          }
        }
      ],
      "meta": {
        "total-count": 1,
        "total-pages": 1
      }
    }
  ```
{% /codeBlock %}  

{% /layoutTwoCol %}
{% /section %}