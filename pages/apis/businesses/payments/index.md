---
title: Business Payments
---
{% section %}
{% layoutTwoCol %}

{% methodCopy %}
{% methodInfo %}
  # {% $markdoc.frontmatter.title %}
  Return all payments for orders within specific business.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Return all payments for orders by the specific business `id`. You can retrieve this `id` from ...
  {% /listitem %}
  {% listitem title="sort" validation="query string" %}
  Sort ascending or descending order.
  {% /listitem %}
  {% listitem title="filter[for_delivery]" validation="query string" %}
  Filter by `for_delivery`.
  {% /listitem %}
  {% listitem title="filter[delivery_price_business_participation]" validation="query string" %}
  Filter by `delivery_price_business_participation`.
  {% /listitem %}
  {% listitem title="filter[states]" validation="query string" %}
  Filter by `states`.
  {% /listitem %}
  {% listitem title="filter[from_created_at]" validation="query string" %}
  filter by `from_created_at`.
  {% /listitem %}
  {% listitem title="filter[to_created_at]" validation="query string" %}
  Filter by `to_created_at`.
  {% /listitem %}
  {% listitem title="page" validation="query integer" %}
  Page offset to fetch.
  {% /listitem %}
  {% listitem title="per_page" validation="query integer" %}
  Number of results to return per page.
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "GET", path: "/api/v1/businesses/{id}/payments"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/businesses/${id}/payments`, {
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