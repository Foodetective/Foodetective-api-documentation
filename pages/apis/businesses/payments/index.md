---
title: Business Payments
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
  ### Example Request GET /api/v1/businesses/{id}/payments
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
  ### Response
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
*
{% /table %}

- - -