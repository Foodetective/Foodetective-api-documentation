---
title: Business Catering
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
  ### Example Request GET /api/v1/businesses/{id}/caterings
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
