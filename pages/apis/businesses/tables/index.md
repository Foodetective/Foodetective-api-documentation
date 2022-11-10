---
title: Businesses Tables
---
{% section %}
{% layoutTwoCol %}

{% methodCopy %}
{% methodInfo %}
  # {% $markdoc.frontmatter.title %}
  This will return {% $markdoc.frontmatter.title %} by business `id`.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="include" type="Optional" /%}
  {% listitem title="page" type="Optional" /%}
  {% listitem title="per_page" type="Optional" /%}
  {% listitem title="id" type="Required" /%}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "GET", path: "/v1/businesses/{id}/tables"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/businesses/{id}/tables`, {
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