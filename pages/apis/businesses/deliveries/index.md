---
title: Business Deliveries
---
{% section %}
{% layoutTwoCol %}

{% methodCopy %}
{% methodInfo %}
  # {% $markdoc.frontmatter.title %}
  Return all deliveries for specific business.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Returns all deliveries by the specific business `id`. You can retrieve this `id` from ...
  {% /listitem %}
  {% listitem title="include" validation="query string" %}
  Include associations (*delimited with comma*). Available associations: business.
  {% /listitem %}
  {% listitem title="page" validation="query integer" %}
  Page offset to fetch.
  {% /listitem %}
  {% listitem title="per_page" validation="query integer" %}
  Number of results to return per page.
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "GET", path: "/api/v1/businesses/{id}/deliveries"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/businesses/${id}/deliveries`, {
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
{% codeBlock title="RESPONSE" collapsable=true %}
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
  Return a delivery for specific business.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Return a delivery by the specific business `id`. You can retrieve this `id` from ...
  {% /listitem %}
  {% listitem title="code" validation="path integer" %}
  Provided a delivery `code`.
  {% /listitem %}
  {% listitem title="include" validation="query string" %}
  Include associations (*delimited with comma*). Available associations: business.
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "GET", path: "/api/v1/businesses/{id}/deliveries/{code}"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/businesses/${id}/deliveries/{code}`, {
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
{% codeBlock title="RESPONSE" collapsable=true %}
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
