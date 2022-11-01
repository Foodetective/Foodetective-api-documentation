---
title: Business Catering
---

## {% $markdoc.frontmatter.title %}

### GET ${BASE_URL}/api/v1/businesses/{id}/caterings`
{% table %}
---
* Parameters {% align="left" %}
  {% listitem title="include" type="Optional" /%}
  {% listitem title="sort" type="Optional" /%}
  {% listitem title="filter[start_date]" type="Optional" /%}
  {% listitem title="filter[end_date]" type="Optional" /%}
  {% listitem title="filter[statuses]" type="Optional" /%}
  {% listitem title="page" type="Optional" /%}
  {% listitem title="per_page" type="Optional" /%}
  {% listitem title="id" type="Required" /%}
* Example {% align="left" %}
  ```bash
      {
          const res = await fetch(`${BASE_URL}/api/v1/businesses/{id}/caterings`, {
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
      "id": "47b9c7be-9396-48f5-b60f-1736559c2b47",
      "type": "caterings",
      "links": {
        "self": "/caterings/47b9c7be-9396-48f5-b60f-1736559c2b47"
      },
      "attributes": {
        "user-name": "Ivan Mariic",
        "name": "fefe",
        "email": "ivan.mariic+a1@netguru.com",
        "phone": null,
        "phone-country-prefix": "44",
        "phone-country-code": "GB",
        "outdoors": false,
        "corporate-event": false,
        "date": "2022-05-02",
        "number-of-servings": 22,
        "company-name": null,
        "price-cents": 0,
        "from": 5640,
        "to": 5640,
        "number-of-waiters": 0,
        "type-of-event": "fefe",
        "cutlery": false,
        "chef-attendance": false,
        "specifications": null,
        "menu": {
          "url": null
        },
        "offer-send-at": null,
        "currency": null,
        "status": "draft",
        "created-at": "2022-04-01T09:42:57.370Z"
      },
      "relationships": {
        "business": {
          "links": {
            "self": "/caterings/47b9c7be-9396-48f5-b60f-1736559c2b47/relationships/business",
            "related": "/caterings/47b9c7be-9396-48f5-b60f-1736559c2b47/business"
          }
        },
        "user": {
          "links": {
            "self": "/caterings/47b9c7be-9396-48f5-b60f-1736559c2b47/relationships/user",
            "related": "/caterings/47b9c7be-9396-48f5-b60f-1736559c2b47/user"
          }
        },
        "address": {
          "links": {
            "self": "/caterings/47b9c7be-9396-48f5-b60f-1736559c2b47/relationships/address",
            "related": "/caterings/47b9c7be-9396-48f5-b60f-1736559c2b47/address"
          }
        }
      }
    },
  ],
  "meta": {
    "total-count": 27,
    "total-pages": 3
  }
}
  ```
*
{% /table %}
