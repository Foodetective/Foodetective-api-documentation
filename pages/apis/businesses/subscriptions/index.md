---
title: Businesses Subscriptions
---

## {% $markdoc.frontmatter.title %}

### GET /api/v1/businesses/{id}/subscriptions
{% table %}
---
* Parameters {% align="left" %}
  {% listitem title="include" type="Optional" /%}
  {% listitem title="filter[scope]" type="Optional" /%}
  {% listitem title="page" type="Optional" /%}
  {% listitem title="per_page" type="Optional" /%}
  {% listitem title="id" type="Required" /%}
* Example {% align="left" %}
  ```bash
      {
          const res = await fetch(`${BASE_URL}/api/v1/businesses/{id}/subscriptions`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
                }});
          const data = await res.json();
    }
  ```
  Response
  ```bash
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
{% /table %}