---
title: Business Deliveries
---

## {% $markdoc.frontmatter.title %}

{% table %}
* ### **Parameters**
---
* 
   {% listitem %}
    [type] **Required**
   {% /listitem %}
   {% listitem %}
    [name] **Required**
   {% /listitem %}
   {% listitem %}
    [city] **Required**
   {% /listitem %}
   {% listitem %}
    [country_code] **Required**
   {% /listitem %}
   {% listitem %}
    [post_code] **Required**
   {% /listitem %}
   {% listitem %}
    [street] **Required**
   {% /listitem %}
   {% listitem %}
    [street_number] **Required**
   {% /listitem %}
   {% listitem %}
    [address_line]Optional
   {% /listitem %}
   {% listitem %}
    [notes]Optional 
   {% /listitem %}
   {% listitem %}
    [region_code]Optional
   {% /listitem %}
   {% listitem %}
     [order][data][type]Optional
   {% /listitem %}
   {% listitem %}
    [order][data][id]Optional
   {% /listitem %}
   {% listitem %}
    [region_code]Optional
   {% /listitem %}
*
*
  ### Example Request GET /api/v1/businesses/{id}/deliveries/{code}
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
*
{% /table %}

- - -

{% table %}
* ### **Parameters**
---
* 
   {% listitem %}
    [type] **Required**
   {% /listitem %}
   {% listitem %}
    [name] **Required**
   {% /listitem %}
   {% listitem %}
    [city] **Required**
   {% /listitem %}
   {% listitem %}
    [country_code] **Required**
   {% /listitem %}
   {% listitem %}
    [post_code] **Required**
   {% /listitem %}
   {% listitem %}
    [street] **Required**
   {% /listitem %}
   {% listitem %}
    [street_number] **Required**
   {% /listitem %}
   {% listitem %}
    [address_line]Optional
   {% /listitem %}
   {% listitem %}
    [notes]Optional 
   {% /listitem %}
   {% listitem %}
    [region_code]Optional
   {% /listitem %}
   {% listitem %}
     [order][data][type]Optional
   {% /listitem %}
   {% listitem %}
    [order][data][id]Optional
   {% /listitem %}
   {% listitem %}
    [region_code]Optional
   {% /listitem %}
*
*
  ### Example Request GET /api/v1/businesses/{id}/deliveries
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
*
{% /table %}