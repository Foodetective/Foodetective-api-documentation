---
title: Business Deliveries
---

## {% $markdoc.frontmatter.title %}

 ### GET /api/v1/businesses/{id}/deliveries/{code}
{% table %}
---
* Parameters {% align="left" %}
  {% listitem title="include" type="Optional" /%}
  {% listitem title="id" type="Required" /%}
  {% listitem title="code" type="Required" /%}
* Example {% align="left" %}
  ```bash
      {
          const res = await fetch(`${BASE_URL}/api/v1/businesses/{id}/deliveries/{code}`, {
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
{% /table %}

- - -

 ### GET /api/v1/businesses/{id}/deliveries
{% table %}
---
* Parameters {% align="left" %}
  {% listitem title="include" type="Optional" /%}
  {% listitem title="page" type="Optional" /%}
  {% listitem title="per_page" type="Optional" /%}
  {% listitem title="id" type="Required" /%}
* Example {% align="left" %}
  ```bash
      {
          const res = await fetch(`${BASE_URL}/api/v1/businesses/{id}/deliveries`, {
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
{% /table %}