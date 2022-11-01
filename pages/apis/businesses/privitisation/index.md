---
title: Businesses Privitisation
---

## {% $markdoc.frontmatter.title %}

{% table %}
* ### **Parameters**
---
* Parameters {% align="left" %}
  {% listitem title="sort" type="Optional" /%}
  {% listitem title="filter[start_date]" type="Optional" /%}
  {% listitem title="filter[end_date]" type="Optional" /%}
  {% listitem title="filter[statuses]" type="Optional" /%}
  {% listitem title="page" type="Optional" /%}
  {% listitem title="per_page" type="Optional" /%}
  {% listitem title="id" type="Required" /%}
*
*
  ### Example Request GET /api/v1/businesses/{id}/privatisations
  ```bash
      {
          const res = await fetch(`${BASE_URL}/api/v1/businesses/{id}/privatisations`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
                }});
          const data = await res.json();
    }
  ```
  ### Response
  ```bash
{
  "data": [
    {
      "id": "49d9ba83-782a-432a-b2af-3098f7a2b53e",
      "type": "privatisations",
      "links": {
        "self": "/privatisations/49d9ba83-782a-432a-b2af-3098f7a2b53e"
      },
      "attributes": {
        "user-name": "Abc",
        "name": "Test",
        "email": "aleksandra.bochenska@netguru.com",
        "phone": "999999999",
        "phone-country-prefix": "41",
        "phone-country-code": "CH",
        "corporate-event": true,
        "date": "2022-08-20",
        "number-of-servings": 3,
        "company-name": null,
        "price-cents": 0,
        "from": 7200,
        "to": 10800,
        "number-of-waiters": 0,
        "type-of-event": "Yes",
        "chef-attendance": true,
        "specifications": null,
        "menu": {
          "url": null
        },
        "offer-send-at": null,
        "currency": null,
        "status": "draft",
        "created-at": "2022-08-19T13:07:35.041Z"
      },
      "relationships": {
        "business": {
          "links": {
            "self": "/privatisations/49d9ba83-782a-432a-b2af-3098f7a2b53e/relationships/business",
            "related": "/privatisations/49d9ba83-782a-432a-b2af-3098f7a2b53e/business"
          }
        },
        "user": {
          "links": {
            "self": "/privatisations/49d9ba83-782a-432a-b2af-3098f7a2b53e/relationships/user",
            "related": "/privatisations/49d9ba83-782a-432a-b2af-3098f7a2b53e/user"
          }
        }
      }
    },
  ],
  "meta": {
    "total-count": 2,
    "total-pages": 1
  }
}
  ```
*
{% /table %}
