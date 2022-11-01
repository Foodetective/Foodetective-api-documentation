---
title: Business Payments
---

## {% $markdoc.frontmatter.title %}

### GET /api/v1/businesses/{id}/payments
{% table %}
---
* Parameters {% align="left" %}
  {% listitem title="sort" type="Optional" /%}
  {% listitem title="filter[for_delivery]" type="Optional" /%}
  {% listitem title="filter[delivery_price_business_participation]" type="Optional" /%}
  {% listitem title="filter[states]" type="Optional" /%}
  {% listitem title="filter[from_created_at]" type="Optional" /%}
  {% listitem title="filter[to_created_at]" type="Optional" /%}
  {% listitem title="page" type="Optional" /%}
  {% listitem title="per_page" type="Optional" /%}
  {% listitem title="id" type="Required" /%}
* Example {% align="left" %}
  ```bash
      {
          const res = await fetch(`${BASE_URL}/api/v1/businesses/{id}/payments`, {
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
{% /table %}