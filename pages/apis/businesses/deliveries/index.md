---
title: Business Deliveries
---
{% section %}
{% layoutTwoCol %}

{% methodCopy %}
{% methodInfo %}
  # {% $markdoc.frontmatter.title %}
  This will return {% $markdoc.frontmatter.title %} by `id`.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="include" type="Optional" /%}
  {% listitem title="page" type="Optional" /%}
  {% listitem title="per_page" type="Optional" /%}
  {% listitem title="id" type="Required" /%}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "GET", path: "/v1/businesses/{id}/deliveries"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/businesses/{id}/deliveries`, {
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
      "url": "/api/v1/businesses/{id}/deliveries",
      "method": "GET",
      "data": [
        {
          "id": "2b96692f-4e1e-49d7-80b5-658611b908d2",
          "type": "deliveries",
          "links": {
            "self": "/deliveries/2b96692f-4e1e-49d7-80b5-658611b908d2"
          },
          "attributes": {
            "code": "CH-1005",
            "currency": "EUR",
            "free-from-cents": 3500,
            "price-cents": 600
          },
          "relationships": {
            "business": {
              "links": {
                "self": "/deliveries/2b96692f-4e1e-49d7-80b5-658611b908d2/relationships/business",
                "related": "/deliveries/2b96692f-4e1e-49d7-80b5-658611b908d2/business"
              }
            }
          }
        },
      ],
      "meta": {
        "total-count": 4,
        "total-pages": 1
      }
    }
  ```
{% /codeBlock %}  

{% /layoutTwoCol %}
{% /section %}

- - -

{% section %}
{% layoutTwoCol %}

{% methodCopy %}
{% methodInfo %}
  # Business Deliveries By Code
  This will return {% $markdoc.frontmatter.title %} by `id` and deliveries `code`.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="include" type="Optional" /%}
  {% listitem title="id" type="Required" /%}
  {% listitem title="code" type="Required" /%}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "GET", path: "/v1/businesses/{id}/deliveries/{code}"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/businesses/{id}/deliveries/{code}`, {
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
      "data": {
        "id": "2b96692f-4e1e-49d7-80b5-658611b908d2",
        "type": "deliveries",
        "links": {
          "self": "/deliveries/2b96692f-4e1e-49d7-80b5-658611b908d2"
        },
        "attributes": {
          "code": "CH-1005",
          "currency": "EUR",
          "free-from-cents": 3500,
          "price-cents": 600
        },
        "relationships": {
          "business": {
            "links": {
              "self": "/deliveries/2b96692f-4e1e-49d7-80b5-658611b908d2/relationships/business",
              "related": "/deliveries/2b96692f-4e1e-49d7-80b5-658611b908d2/business"
            }
          }
        }
      }
    }
  ```
{% /codeBlock %}  

{% /layoutTwoCol %}
{% /section %}