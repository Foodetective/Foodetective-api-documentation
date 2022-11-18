---
title: Businesses Subscriptions
---
{% section %}
{% layoutTwoCol %}

{% methodCopy %}
{% methodInfo %}
  # {% $markdoc.frontmatter.title %}
  Return all subscriptions for specific business.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Return all subscriptions by the specific business `id`. You can retrieve this `id` from ...
  {% /listitem %}
  {% listitem title="sort" validation="query string" %}
  Sort ascending or descending order.
  {% /listitem %}
  {% listitem title="filter[scope]" validation="query string" %}
  Subscriptions scoped to the group of statuses. Current scope available; `not_terminated`.
  {% /listitem %}
  {% listitem title="page" validation="query integer" %}	
  Page offset to fetch.
  {% /listitem %}
  {% listitem title="per_page" validation="query integer" %}
  Number of results to return per page.
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "GET", path: "/api/v1/businesses/{id}/subscriptions"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/businesses/${id}/subscriptions`, {
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
          "id": "5139a3c6-d939-4fa9-97ba-9817de6b096f",
          "type": "subscriptions",
          "links": {
            "self": "/subscriptions/5139a3c6-d939-4fa9-97ba-9817de6b096f"
          },
          "attributes": {
            "amount-cents": 39900,
            "cancel-at": "2021-12-01T00:00:00.000Z",
            "currency": "EUR",
            "interval": "month",
            "interval-count": 1,
            "name": "Ultimate Monthly EUR",
            "next-payment-at": "2021-12-01T00:00:00.000Z",
            "not-terminated": false,
            "slug": "sherlock-ultimate-monthly-eur-v2",
            "status": "canceled",
            "stripe-source-id": "pm_1Jw7FIBtvCfXmRItGquxmkDn",
            "trial-ends-at": "2021-11-15T15:37:31.303Z"
          }
        },
        {
          "id": "76f47f3f-c299-4bb4-af0d-b1df717c3a99",
          "type": "subscriptions",
          "links": {
            "self": "/subscriptions/76f47f3f-c299-4bb4-af0d-b1df717c3a99"
          },
          "attributes": {
            "amount-cents": 8900,
            "cancel-at": null,
            "currency": "EUR",
            "interval": "month",
            "interval-count": 1,
            "name": "Basic Monthly EUR",
            "next-payment-at": "2022-11-16T10:27:56.000Z",
            "not-terminated": true,
            "slug": "sherlock-basic-monthly-eur-v2",
            "status": "unpaid",
            "stripe-source-id": "pm_1K7ML5BtvCfXmRItKd18rTN7",
            "trial-ends-at": "2021-12-16T10:27:59.489Z"
          }
        }
      ],
      "meta": {
        "total-count": 2,
        "total-pages": 1
      }
    }
  ```
{% /codeBlock %}  

{% /layoutTwoCol %}
{% /section %}