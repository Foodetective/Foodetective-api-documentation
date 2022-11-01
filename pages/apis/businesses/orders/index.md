---
title: Business Orders
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
  ### Example Request GET /api/v1/businesses/{id}/orders
  ```bash
      {
          const res = await fetch(`${BASE_URL}/api/v1/businesses/{id}/orders`, {
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
      "id": "7122ef0d-1138-4112-8f7a-c8b4ae2c38a3",
      "type": "orders",
      "links": {
        "self": "/orders/7122ef0d-1138-4112-8f7a-c8b4ae2c38a3"
      },
      "attributes": {
        "accepted-at": "2021-10-06T09:37:38.122Z",
        "collection-at": null,
        "collection-code": null,
        "currency": "GBP",
        "customer-name": null,
        "dishes-cost-cents": 2000,
        "driver-location-lat": null,
        "driver-location-long": null,
        "estimated-delivery-in": 15,
        "estimated-time-of-dropoff": null,
        "estimated-time-of-pickup": null,
        "notes": {},
        "other-rejection-reason": null,
        "origin": null,
        "hubrise-source": null,
        "hubrise-service-type": null,
        "pickup-at-business": false,
        "placed-at": "2021-10-06T09:34:27.088Z",
        "reject-reason": null,
        "shipping-cost-cents": 535,
        "shipping-cost-for-business-cents": 0,
        "shipping-cost-for-customer-cents": 535,
        "short-id": 1,
        "state": "completed",
        "time-wish": "as soon as possible",
        "total-cost-cents": 2535,
        "unavailable-elements": null,
        "updated-at": "2021-10-06T09:38:59.847Z",
        "user-email": "aleksandra.bochenska+client@netguru.com",
        "user-phone": "7912123456",
        "user-phone-country-code": "GB",
        "user-phone-country-prefix": "44",
        "with-orkestro-delivery": true
      },
      "relationships": {
        "addresses": {
          "links": {
            "self": "/orders/7122ef0d-1138-4112-8f7a-c8b4ae2c38a3/relationships/addresses",
            "related": "/orders/7122ef0d-1138-4112-8f7a-c8b4ae2c38a3/addresses"
          }
        },
        "elements": {
          "links": {
            "self": "/orders/7122ef0d-1138-4112-8f7a-c8b4ae2c38a3/relationships/elements",
            "related": "/orders/7122ef0d-1138-4112-8f7a-c8b4ae2c38a3/elements"
          }
        },
        "business": {
          "links": {
            "self": "/orders/7122ef0d-1138-4112-8f7a-c8b4ae2c38a3/relationships/business",
            "related": "/orders/7122ef0d-1138-4112-8f7a-c8b4ae2c38a3/business"
          }
        }
      }
    },
  ],
  "meta": {
    "total-count": 430,
    "total-pages": 43
  }
}

  ```
*
{% /table %}

- - -