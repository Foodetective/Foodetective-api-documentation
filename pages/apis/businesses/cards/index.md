---
title: Business Cards
---

## {% $markdoc.frontmatter.title %}

### GET /api/v1/businesses/{id}/cards
{% table %}
---
* Parameters {% align="left" %}
  {% listitem title="include" type="Optional" /%}
  {% listitem title="sort" type="Optional" /%}
  {% listitem title="page" type="Optional" /%}
  {% listitem title="per_page" type="Optional" /%}
  {% listitem title="id" type="Required" /%}
* Example {% align="left" %}
  ```bash
      {
          const res = await fetch(`${BASE_URL}/api/v1/businesses/{id}/cards`, {
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
    "url": "/api/v1/businesses/{id}/cards",
    "method": "GET",
    "data": [
      {
        "id": "15cc2af5-a33a-4ccc-bc9b-1c74ecbc59a8",
        "type": "cards",
        "links": {
          "self": "/cards/15cc2af5-a33a-4ccc-bc9b-1c74ecbc59a8"
        },
        "attributes": {
          "stripe-source-id": "pm_1Jw7FIBtvCfXmRItGquxmkDn",
          "last4": "4242",
          "expiration-date": "2022-02-01",
          "brand": "visa"
        },
        "relationships": {
          "user": {
            "links": {
              "self": "/cards/15cc2af5-a33a-4ccc-bc9b-1c74ecbc59a8/relationships/user",
              "related": "/cards/15cc2af5-a33a-4ccc-bc9b-1c74ecbc59a8/user"
            }
          }
        }
      },
    ],
    "meta": {
      "total-count": 3,
      "total-pages": 1
    }
  }
  ```
{% /table %}
