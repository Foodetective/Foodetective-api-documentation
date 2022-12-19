---
title: Business Orders
---
{% section %}
{% layoutTwoCol %}

{% methodCopy %}
{% methodInfo %}
  # {% $markdoc.frontmatter.title %}
  Return all orders for specific business.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Return all orders by the specific business `id`. You can retrieve this `id` from ...
  {% /listitem %}
  {% listitem title="include" validation="query string" %}
  Include associations (delimited with comma). Available associations: addresses, elements, business.

  **Example:** `addresses,elements,business`
  {% /listitem %}
  {% listitem title="sort" validation="query string" %}
  Sort ascending or descending order.
  {% /listitem %}
  {% listitem title="channel" validation="query string filter" %}
  Filter by channel.
  {% /listitem %}
  {% listitem title="day" validation="query date filter" %}
  Filter by Date, the format should be **ISO date**.
  {% /listitem %}
  {% listitem title="states" validation="query string filter" %}
  Filter by states.
  {% /listitem %}
  {% listitem title="order_type" validation="query string filter" %}
  Filter by order type.
  {% /listitem %}
  {% listitem title="page" validation="query integer" %}
  Page offset to fetch.
  {% /listitem %}
  {% listitem title="per_page" validation="query integer" %}
  Number of results to return per page.
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "GET", path: "/api/v1/businesses/{id}/orders"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/businesses/${id}/orders`, {
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
      "data": [
        {
          "id": "7122ef0d-1138-4112-8f7a-c8b4ae2c38a3",
          "type": "orders",
          "links": {
            "self": "/orders/7122ef0d-1138-4112-8f7a-c8b4ae2c38a3"
          },
          "attributes": {
            "accepted-at": "2021-10-06T09:37:38.122Z",
            "collection-at": null,
            "collection-code": null,
            "currency": "GBP",
            "customer-name": null,
            "dishes-cost-cents": 2000,
            "driver-location-lat": null,
            "driver-location-long": null,
            "estimated-delivery-in": 15,
            "estimated-time-of-dropoff": null,
            "estimated-time-of-pickup": null,
            "notes": {},
            "other-rejection-reason": null,
            "origin": null,
            "hubrise-source": null,
            "hubrise-service-type": null,
            "pickup-at-business": false,
            "placed-at": "2021-10-06T09:34:27.088Z",
            "reject-reason": null,
            "shipping-cost-cents": 535,
            "shipping-cost-for-business-cents": 0,
            "shipping-cost-for-customer-cents": 535,
            "short-id": 1,
            "state": "completed",
            "time-wish": "as soon as possible",
            "total-cost-cents": 2535,
            "unavailable-elements": null,
            "updated-at": "2021-10-06T09:38:59.847Z",
            "user-email": "aleksandra.bochenska+client@netguru.com",
            "user-phone": "7912123456",
            "user-phone-country-code": "GB",
            "user-phone-country-prefix": "44",
            "with-orkestro-delivery": true
          },
          "relationships": {
            "addresses": {
              "links": {
                "self": "/orders/7122ef0d-1138-4112-8f7a-c8b4ae2c38a3/relationships/addresses",
                "related": "/orders/7122ef0d-1138-4112-8f7a-c8b4ae2c38a3/addresses"
              }
            },
            "elements": {
              "links": {
                "self": "/orders/7122ef0d-1138-4112-8f7a-c8b4ae2c38a3/relationships/elements",
                "related": "/orders/7122ef0d-1138-4112-8f7a-c8b4ae2c38a3/elements"
              }
            },
            "business": {
              "links": {
                "self": "/orders/7122ef0d-1138-4112-8f7a-c8b4ae2c38a3/relationships/business",
                "related": "/orders/7122ef0d-1138-4112-8f7a-c8b4ae2c38a3/business"
              }
            }
          }
        },
      ],
      "meta": {
        "total-count": 430,
        "total-pages": 43
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
  # Business Orders Partners
  Return all business partners used to make orders.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Return all business partners used to make orders by the specific business `id`. You can retrieve this `id` from ...
  {% /listitem %}
  {% listitem title="include" validation="query string" %}
  Include associations (*delimited with comma*). Available associations: addresses, elements, business.

  **Example:** `addresses,elements,business`
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "GET", path: "/api/v1/businesses/{id}/orders/orders_partners"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/businesses/${id}/orders/orders_partners`, {
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
  ```
{% /codeBlock %}

{% /layoutTwoCol %}
{% /section %}
