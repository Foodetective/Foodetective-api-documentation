---
title: Businesses Reservations
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
  ### Example Request GET /api/v1/businesses/{id}/reservations
  ```bash
      {
          const res = await fetch(`${BASE_URL}/api/v1/businesses/{id}/reservations`, {
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
      "id": "dc6e3cd0-cf3b-4d02-9969-3441c13dc51f",
      "type": "reservations",
      "links": {
        "self": "/reservations/dc6e3cd0-cf3b-4d02-9969-3441c13dc51f"
      },
      "attributes": {
        "additional-info": null,
        "comment": null,
        "date": "2022-02-08",
        "email": "aleksandra.bochenska+client@netguru.com",
        "from": 50400,
        "name": "test",
        "other-rejection-reason": null,
        "party-size": 3,
        "phone": "222222222",
        "phone-country-code": "CH",
        "phone-country-prefix": "41",
        "reject-reason": "restaurant_full",
        "state": "rejected",
        "to": 53100,
        "created-at": "2022-02-07T11:22:39.958Z"
      },
      "relationships": {
        "bookings": {
          "links": {
            "self": "/reservations/dc6e3cd0-cf3b-4d02-9969-3441c13dc51f/relationships/bookings",
            "related": "/reservations/dc6e3cd0-cf3b-4d02-9969-3441c13dc51f/bookings"
          }
        },
        "tables": {
          "links": {
            "self": "/reservations/dc6e3cd0-cf3b-4d02-9969-3441c13dc51f/relationships/tables",
            "related": "/reservations/dc6e3cd0-cf3b-4d02-9969-3441c13dc51f/tables"
          }
        },
        "business": {
          "links": {
            "self": "/reservations/dc6e3cd0-cf3b-4d02-9969-3441c13dc51f/relationships/business",
            "related": "/reservations/dc6e3cd0-cf3b-4d02-9969-3441c13dc51f/business"
          }
        },
        "user": {
          "links": {
            "self": "/reservations/dc6e3cd0-cf3b-4d02-9969-3441c13dc51f/relationships/user",
            "related": "/reservations/dc6e3cd0-cf3b-4d02-9969-3441c13dc51f/user"
          }
        }
      }
    },
  ],
  "meta": {
    "total-count": 65,
    "total-pages": 7
  }
}
  ```
*
{% /table %}
