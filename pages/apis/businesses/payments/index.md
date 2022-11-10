---
title: Business Payments
---
{% section %}
{% layoutTwoCol %}

{% methodCopy %}
{% methodInfo %}
  # {% $markdoc.frontmatter.title %}

  ### GET /api
  This will return {% $markdoc.frontmatter.title %} by business `id`.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="sort" type="Optional" /%}
  {% listitem title="filter[for_delivery]" type="Optional" /%}
  {% listitem title="filter[delivery_price_business_participation]" type="Optional" /%}
  {% listitem title="filter[states]" type="Optional" /%}
  {% listitem title="filter[from_created_at]" type="Optional" /%}
  {% listitem title="filter[to_created_at]" type="Optional" /%}
  {% listitem title="page" type="Optional" /%}
  {% listitem title="per_page" type="Optional" /%}
  {% listitem title="id" type="Required" /%}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "GET", path: "/v1/businesses/{id}/payments"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/businesses/{id}/payments`, {
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
          "id": "9c736f42-f299-4028-b7eb-bfe6f9f0db76",
          "type": "payments",
          "links": {
            "self": "/payments/9c736f42-f299-4028-b7eb-bfe6f9f0db76"
          },
          "attributes": {
            "amount-cents": 2000,
            "created-at": "2021-10-06T09:34:43.754Z",
            "currency": "GBP",
            "delivery-price-business-participation": false,
            "for-delivery": false,
            "state": "finished",
            "user-name": "olka clientttt"
          }
        },
      ],
      "meta": {
        "total-count": 364,
        "total-pages": 37
      }
    }
  ```
{% /codeBlock %}  

{% /layoutTwoCol %}
{% /section %}