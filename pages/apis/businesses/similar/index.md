---
title: Businesses Setup
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
  ### Example Request GET api/v1/businesses/{id}/similar
  ```bash
      {
          const res = await fetch(`${BASE_URL}api/v1/businesses/{id}/similar`, {
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
      "id": "da7d4014-5139-4202-b88d-abae80d27999",
      "type": "businesses",
      "links": {
        "self": "/businesses/da7d4014-5139-4202-b88d-abae80d27999"
      },
      "attributes": {
        "allow-pickup": true,
        "approved-for-lefood": true,
        "auto-accept-orders": true,
        "auto-accept-booking": false,
        "available-in-lefood": true,
        "average-delivery-time": 15,
        "average-score": 0.0,
        "average-waiting-time": 0,
        "bill-url": null,
        "bio": "BIO BIO BIO BIO BIO BIO",
        "breakfast-service": true,
        "brunch-service": false,
        "cafe-service": true,
        "can-pay-with-cards": true,
        "can-pay-with-cash": false,
        "can-pay-with-mobile": true,
        "city": "London",
        "connected-to-partoo": true,
        "contact-with-proper-owner-possible": true,
        "country": "United Kingdom",
        "country-code": "GB",
        "currency": "GBP",
        "delivery-available": true,
        "delivery-charge-ref": null,
        "delivery-price-participation-ratio": "0.0",
        "delivery-service-type-ref": null,
        "delivery-url": "https://ubereats.com",
        "detected-language": "nl",
        "dinner-service": false,
        "email": "aleksandra.bochenska+BOU@netguru.com",
        "facebook": "https://facebook.com",
        "favorite-id": null,
        "geolocation-lat": "51.5169422",
        "geolocation-lng": "-0.120258",
        "has-catering": true,
        "has-delivery": true,
        "has-join-the-queue": false,
        "has-online-booking": true,
        "has-private-events": true,
        "has-reservations": true,
        "has-takeaway": true,
        "hubrise-catalog-id": "1v3b3",
        "hubrise-catalog-name": "QA Business",
        "instagram": "https://instagram.com",
        "live-info": null,
        "logo": {
          "url": "https://foodetective-staging-backend-data.s3.amazonaws.com/uploads/business/logo/da7d4014-5139-4202-b88d-abae80d27999/323c8ab5-df93-49d6-bfe7-72acab5fc8d0.jpeg"
        },
        "lunch-service": false,
        "main-photo-url": "https://foodetective-staging-backend-data.s3.amazonaws.com/uploads/picture/photo/e9724f46-400b-40e9-87b0-acab1641d113/c79c9cc5-0704-4405-9163-9cfb546d08bb.jpeg",
        "max-reservation-size": 20,
        "menu-synced": null,
        "min-amount-for-delivery-cents": 500,
        "min-time-before-reservation": 3600,
        "name": "UPDATE business",
        "online-booking-url": "https://example.com",
        "owner-role": null,
        "phone": "9999999999",
        "phone-country-code": "GG",
        "phone-country-prefix": "44",
        "pos-partner-integration-exists": true,
        "post-code": "WC2B 6UF",
        "price-per-person": 9,
        "price-range": 2,
        "rating": 0.0,
        "region": "London, City of",
        "region-code": "GB-LND",
        "secret-code": null,
        "slug": "update-business",
        "snack-service": false,
        "state": "published",
        "street": "Kingsway",
        "street-number": "123",
        "stripe-currency": "GBP",
        "stripe-payment-ref": null,
        "eat-in-ref": null,
        "stripe-user-id": "acct_1KdBxgGwXuXQkAB8",
        "tagline": null,
        "takeaway-service-type-ref": null,
        "takeaway-url": "https://pyszne.pl",
        "time-of-stay": 2700,
        "time-slots": 1800,
        "timezone": "Europe/London",
        "visible-in-lefood": true,
        "website": "https://onet.pl",
        "youtube": "https://www.youtube.com/watch?v=2z3XqCKJoV4&ab_channel=VHPROJECT",
        "settings": {
          "orkestro_delivery_confirmation_enabled": true,
          "order_business_web_notifications_enabled": true,
          "reservation_business_web_notifications_enabled": true
        }
      },
      "relationships": {
        "addresses": {
          "links": {
            "self": "/businesses/da7d4014-5139-4202-b88d-abae80d27999/relationships/addresses",
            "related": "/businesses/da7d4014-5139-4202-b88d-abae80d27999/addresses"
          }
        },
        "groups": {
          "links": {
            "self": "/businesses/da7d4014-5139-4202-b88d-abae80d27999/relationships/groups",
            "related": "/businesses/da7d4014-5139-4202-b88d-abae80d27999/groups"
          }
        },
        "menus": {
          "links": {
            "self": "/businesses/da7d4014-5139-4202-b88d-abae80d27999/relationships/menus",
            "related": "/businesses/da7d4014-5139-4202-b88d-abae80d27999/menus"
          }
        },
        "open-periods": {
          "links": {
            "self": "/businesses/da7d4014-5139-4202-b88d-abae80d27999/relationships/open-periods",
            "related": "/businesses/da7d4014-5139-4202-b88d-abae80d27999/open-periods"
          }
        },
        "order-periods": {
          "links": {
            "self": "/businesses/da7d4014-5139-4202-b88d-abae80d27999/relationships/order-periods",
            "related": "/businesses/da7d4014-5139-4202-b88d-abae80d27999/order-periods"
          }
        },
        "orders": {
          "links": {
            "self": "/businesses/da7d4014-5139-4202-b88d-abae80d27999/relationships/orders",
            "related": "/businesses/da7d4014-5139-4202-b88d-abae80d27999/orders"
          }
        },
        "partners": {
          "links": {
            "self": "/businesses/da7d4014-5139-4202-b88d-abae80d27999/relationships/partners",
            "related": "/businesses/da7d4014-5139-4202-b88d-abae80d27999/partners"
          }
        },
        "pictures": {
          "links": {
            "self": "/businesses/da7d4014-5139-4202-b88d-abae80d27999/relationships/pictures",
            "related": "/businesses/da7d4014-5139-4202-b88d-abae80d27999/pictures"
          }
        },
        "products": {
          "links": {
            "self": "/businesses/da7d4014-5139-4202-b88d-abae80d27999/relationships/products",
            "related": "/businesses/da7d4014-5139-4202-b88d-abae80d27999/products"
          }
        },
        "reviews": {
          "links": {
            "self": "/businesses/da7d4014-5139-4202-b88d-abae80d27999/relationships/reviews",
            "related": "/businesses/da7d4014-5139-4202-b88d-abae80d27999/reviews"
          }
        }
      }
    }
  ]
}
  ```
*
{% /table %}