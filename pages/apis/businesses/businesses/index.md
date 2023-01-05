---
title: Business
---
{% section %}
{% layoutTwoCol %}

{% methodCopy %}
{% methodInfo %}
  # {% $markdoc.frontmatter.title %}
  Return a Business.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Returns a Business by specific business `id`. You can retrieve this `id` from ...
  {% /listitem %}
  {% listitem title="include" validation="query string" %}
  Include associations (*delimited with comma*). Available associations: addresses, groups, menus, open_periods, order_periods, orders, partners, pictures, products, reviews

  **Example:** `orders,pictures`
  {% /listitem %}
  {% listitem title="language" validation="query string" %}
  Return results of Business by language **ISO 639‑1** code.
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "GET", path: "/api/v1/businesses/{id}"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
  {
    const res = await fetch(`${BASE_URL}/api/v1/businesses/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }});
    const data = await res.json();
  }
  ```
  {% /tab %}
  {% tab label="py"%}
  ```py
    Python example
  ```
  {% /tab %}
  {% tab label="java"%}
  ```java
    Java example
  ```
  {% /tab %}
  {% tab label="ruby"%}
  ```ruby
    Ruby example
  ```
  {% /tab %}
  {% tab label="go"%}
  ```go
    Go example
  ```
  {% /tab %}
{% /tabs %}
{% /codeBlock %}
{% codeBlock title="RESPONSE" collapsable=true %}
  ```json
  {
    "data": {
      "id": "50404d91-bc45-43b2-8360-47f26b5ddc33",
      "type": "businesses",
      "links": {
        "self": "/businesses/50404d91-bc45-43b2-8360-47f26b5ddc33"
      },
      "attributes": {
        "allow-pickup": true,
        "approved-for-lefood": true,
        "auto-accept-orders": false,
        "auto-accept-booking": true,
        "available-in-lefood": true,
        "average-delivery-time": 0,
        "average-score": 8.1,
        "average-waiting-time": 0,
        "bill-url": null,
        "bio": "Restaurant bio :) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan magna condimentum, tincidunt ante in, rhoncus orci. Sed est mauris, eleifend ut lacus eu, scelerisque faucibus dolor. Aenean mauris eros, faucibus ut nisl vel, ornare laoreet ipsum. Integer volutpat nisl vel metus vestibulum, nec laoreet dolor dictum. Sed a volutpat magna, id posuere tellus. Nunc vitae diam facilisis, molestie libero ac, lobortis sem. In risus est, lacinia mollis tristique vitae, facilisis a neque. Cras in sapien quis odio feugiat rhoncus id nec ante. Duis ut odio auctor, dictum magna non, imperdiet nunc. Suspendisse potenti. Nunc suscipit nisl vel augue vestibulum mattis. Phasellus nec justo consequat, tempor diam et, dictum enim.",
        "breakfast-service": true,
        "brunch-service": false,
        "cafe-service": true,
        "can-pay-with-cards": true,
        "can-pay-with-cash": true,
        "can-pay-with-mobile": true,
        "city": "London",
        "connected-to-partoo": true,
        "contact-with-proper-owner-possible": true,
        "country": "United Kingdom",
        "country-code": "GB",
        "currency": "GBP",
        "delivery-available": true,
        "delivery-charge-ref": "code.1",
        "delivery-price-participation-ratio": "0.0",
        "delivery-service-type-ref": "code*1",
        "delivery-url": "https://pyszne.pl",
        "detected-language": "la",
        "dinner-service": false,
        "email": "aleksandra.bochenska@netguru.com",
        "facebook": "https://facebook.com",
        "favorite-id": null,
        "geolocation-lat": "51.5134147",
        "geolocation-lng": "-0.117157",
        "has-catering": false,
        "has-delivery": true,
        "has-join-the-queue": false,
        "has-online-booking": true,
        "has-private-events": false,
        "has-reservations": true,
        "has-takeaway": true,
        "hubrise-catalog-id": "1v3b3",
        "hubrise-catalog-name": "QA Business",
        "instagram": "https://instagram.com/netguru/",
        "live-info": null,
        "logo": {
          "url": "https://foodetective-staging-backend-data.s3.amazonaws.com/uploads/business/logo/50404d91-bc45-43b2-8360-47f26b5ddc33/6767c7dc-aeb5-4bb4-83de-4c3311512d77.jpeg"
        },
        "lunch-service": true,
        "main-photo-url": "https://foodetective-staging-backend-data.s3.amazonaws.com/uploads/picture/photo/459b132f-4bb6-4496-925c-eef1ea0a7f9d/cc7ba4bc-e24d-4861-a9c0-6032918f13a7.jpeg",
        "max-reservation-size": 20,
        "menu-synced": false,
        "min-amount-for-delivery-cents": 2000,
        "min-time-before-reservation": 3600,
        "name": "Test with Orkestro",
        "online-booking-url": "https://booking.com",
        "owner-role": "Additional information :)",
        "phone": "7911123456",
        "phone-country-code": "GG",
        "phone-country-prefix": "44",
        "pos-partner-integration-exists": true,
        "post-code": "WC2B 6UF",
        "price-per-person": 20,
        "price-range": 2,
        "rating": 8.1,
        "region": "London, City of",
        "region-code": "GB-LND",
        "secret-code": "TGC12345",
        "slug": "test-with-orkestro",
        "snack-service": true,
        "state": "published",
        "street": "Kingsway",
        "street-number": "1",
        "stripe-currency": "GBP",
        "stripe-payment-ref": "code-1",
        "eat-in-ref": null,
        "stripe-user-id": "acct_1JhWDyBInYph3F9j",
        "tagline": null,
        "takeaway-service-type-ref": "code_1",
        "takeaway-url": "https://glovo.pl",
        "time-of-stay": 2700,
        "time-slots": 900,
        "timezone": "Europe/London",
        "visible-in-lefood": true,
        "website": "https://netguru.com",
        "youtube": "https://www.youtube.com/watch?v=VXBFPjRrsV4&ab",
        "settings": {
          "orkestro_delivery_confirmation_enabled": true,
          "order_business_web_notifications_enabled": true,
          "reservation_business_web_notifications_enabled": true
        }
      },
      "relationships": {
        "addresses": {
          "links": {
            "self": "/businesses/50404d91-bc45-43b2-8360-47f26b5ddc33/relationships/addresses",
            "related": "/businesses/50404d91-bc45-43b2-8360-47f26b5ddc33/addresses"
          }
        },
        "groups": {
          "links": {
            "self": "/businesses/50404d91-bc45-43b2-8360-47f26b5ddc33/relationships/groups",
            "related": "/businesses/50404d91-bc45-43b2-8360-47f26b5ddc33/groups"
          }
        },
        "menus": {
          "links": {
            "self": "/businesses/50404d91-bc45-43b2-8360-47f26b5ddc33/relationships/menus",
            "related": "/businesses/50404d91-bc45-43b2-8360-47f26b5ddc33/menus"
          }
        },
        "open-periods": {
          "links": {
            "self": "/businesses/50404d91-bc45-43b2-8360-47f26b5ddc33/relationships/open-periods",
            "related": "/businesses/50404d91-bc45-43b2-8360-47f26b5ddc33/open-periods"
          }
        },
        "order-periods": {
          "links": {
            "self": "/businesses/50404d91-bc45-43b2-8360-47f26b5ddc33/relationships/order-periods",
            "related": "/businesses/50404d91-bc45-43b2-8360-47f26b5ddc33/order-periods"
          }
        },
        "orders": {
          "links": {
            "self": "/businesses/50404d91-bc45-43b2-8360-47f26b5ddc33/relationships/orders",
            "related": "/businesses/50404d91-bc45-43b2-8360-47f26b5ddc33/orders"
          }
        },
        "partners": {
          "links": {
            "self": "/businesses/50404d91-bc45-43b2-8360-47f26b5ddc33/relationships/partners",
            "related": "/businesses/50404d91-bc45-43b2-8360-47f26b5ddc33/partners"
          }
        },
        "pictures": {
          "links": {
            "self": "/businesses/50404d91-bc45-43b2-8360-47f26b5ddc33/relationships/pictures",
            "related": "/businesses/50404d91-bc45-43b2-8360-47f26b5ddc33/pictures"
          }
        },
        "products": {
          "links": {
            "self": "/businesses/50404d91-bc45-43b2-8360-47f26b5ddc33/relationships/products",
            "related": "/businesses/50404d91-bc45-43b2-8360-47f26b5ddc33/products"
          }
        },
        "reviews": {
          "links": {
            "self": "/businesses/50404d91-bc45-43b2-8360-47f26b5ddc33/relationships/reviews",
            "related": "/businesses/50404d91-bc45-43b2-8360-47f26b5ddc33/reviews"
          }
        }
      }
    }
  }
  ```
{% /codeBlock %}

{% /layoutTwoCol %}
{% /section %}

- - -

{% section %}
{% layoutTwoCol %}

{% methodCopy %}
{% methodInfo %}
  # Create Business
  Create a business record for current user.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="data" validation="formData, object" type="Required" %}
  Form Data needed when creating a business record for current user.
  {% list isChild=true %}
  {% listitem title="type" validation="string" type="Required" %}
  Provide Business `type`. Current selection is only **businesses**.
  {% /listitem %}
  {% listitem title="attributes" validation="formData, object" type="Required" %}
  Attributes object with a few **required** fields.
  {% list isChild=true %}
  {% listitem title="average_delivery_time" validation="integer" %}
  {% /listitem %}
  {% listitem title="bill_url" validation="string" %}
  {% /listitem %}
  {% listitem title="bio" validation="string" %}
  {% /listitem %}
  {% listitem title="breakfast_service" validation="undefined" %}
  {% /listitem %}
  {% listitem title="brunch_service" validation="undefined" %}
  {% /listitem %}
  {% listitem title="cafe_service" validation="undefined" %}
  {% /listitem %}
  {% listitem title="can_pay_with_cards" validation="undefined" %}
  {% /listitem %}
  {% listitem title="can_pay_with_cash" validation="undefined" %}
  {% /listitem %}
  {% listitem title="can_pay_with_mobile" validation="undefined" %}
  {% /listitem %}
  {% listitem title="city" validation="string" %}
  {% /listitem %}
  {% listitem title="country_code" validation="string" %}
  {% /listitem %}
  {% listitem title="currency" validation="string" %}
  {% /listitem %}
  {% listitem title="delivery_charge_ref" validation="string" %}
  {% /listitem %}
  {% listitem title="delivery_price_participation_ratio" validation="double" %}
  {% /listitem %}
  {% listitem title="delivery_service_type_ref" validation="string" %}
  {% /listitem %}
  {% listitem title="delivery_url" validation="string" %}
  {% /listitem %}
  {% listitem title="dinner_service" validation="undefined" %}
  {% /listitem %}
  {% listitem title="email" validation="string" %}
  {% /listitem %}
  {% listitem title="facebook" validation="string" %}
  {% /listitem %}
  {% listitem title="youtube" validation="string" %}
  {% /listitem %}
  {% listitem title="groups_list" validation="string" %}
  Slugs of groups delimeted by comma.
  {% /listitem %}
  {% listitem title="has_catering" validation="undefined" %}
  {% /listitem %}
  {% listitem title="has_join_the_queue" validation="undefined" %}
  {% /listitem %}
  {% listitem title="has_private_events" validation="undefined" %}
  {% /listitem %}
  {% listitem title="has_reservations" validation="undefined" %}
  {% /listitem %}
  {% listitem title="instagram" validation="string" %}
  {% /listitem %}
  {% listitem title="live_info" validation="string" %}
  {% /listitem %}
  {% listitem title="logo" validation="file" %}
  {% /listitem %}
  {% listitem title="lunch_service" validation="undefined" %}
  {% /listitem %}
  {% listitem title="max_reservation_size" validation="integer" %}
  {% /listitem %}
  {% listitem title="min_amount_for_delivery_cents" validation="integer" %}
  {% /listitem %}
  {% listitem title="min_time_before_reservation" validation="integer" %}
  Minimum time before creating a reservation expressed in seconds
  {% /listitem %}
  {% listitem title="name" validation="string" %}
  {% /listitem %}
  {% listitem title="online_booking_url" validation="string" %}
  {% /listitem %}
  {% listitem title="owner_role" validation="string" %}
  {% /listitem %}
  {% listitem title="phone" validation="string" %}
  {% /listitem %}
  {% listitem title="phone_country_code" validation="string" %}
  {% /listitem %}
  {% listitem title="phone_country_prefix" validation="string" %}
  {% /listitem %}
  {% listitem title="post_code" validation="string" %}
  {% /listitem %}
  {% listitem title="price_per_person" validation="string" %}
  {% /listitem %}
  {% listitem title="region_code" validation="string" %}
  {% /listitem %}
  {% listitem title="secret_code" validation="string" %}
  {% /listitem %}
  {% listitem title="snack_service" validation="undefined" %}
  {% /listitem %}
  {% listitem title="state" validation="string" %}
  {% /listitem %}
  {% listitem title="street" validation="string" %}
  {% /listitem %}
  {% listitem title="street_number" validation="string" %}
  {% /listitem %}
  {% listitem title="stripe_currency" validation="string" %}
  {% /listitem %}
  {% listitem title="stripe_payment_ref" validation="string" %}
  {% /listitem %}
  {% listitem title="eat_in_ref" validation="string" %}
  {% /listitem %}
  {% listitem title="tagline" validation="string" %}
  {% /listitem %}
  {% listitem title="takeaway_service_type_ref" validation="string" %}
  {% /listitem %}
  {% listitem title="takeaway_url" validation="string" %}
  {% /listitem %}
  {% listitem title="time_of_stay" validation="integer" %}
  Default time of staying in restaurant expressed in seconds
  {% /listitem %}
  {% listitem title="time_slots" validation="integer" %}
  Time specifying available hours for booking expressed in seconds
  {% /listitem %}
  {% listitem title="visible_in_lefood" validation="undefined" %}
  {% /listitem %}
  {% listitem title="website" validation="string" %}
  {% /listitem %}
  {% /list %}
  {% /listitem %}
  {% /list %}
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "POST", path: "/api/v1/businesses"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
  {
    const res = await fetch(`${BASE_URL}/api/v1/businesses`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)});

    const data = await res.json();
  }
  ```
  {% /tab %}
  {% tab label="py"%}
  ```py
    Python example
  ```
  {% /tab %}
  {% tab label="java"%}
  ```java
    Java example
  ```
  {% /tab %}
  {% tab label="ruby"%}
  ```ruby
    Ruby example
  ```
  {% /tab %}
  {% tab label="go"%}
  ```go
    Go example
  ```
  {% /tab %}
{% /tabs %}
{% /codeBlock %}
{% codeBlock title="RESPONSE" collapsable=true %}
  ```json
  ```
{% /codeBlock %}

{% /layoutTwoCol %}
{% /section %}

- - -

{% section %}
{% layoutTwoCol %}

{% methodCopy %}
{% methodInfo %}
  # Update Business
  Update a Business
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Update a Business by specific business `id`. You can retrieve this `id` from ...
  {% /listitem %}
  {% listitem title="data" validation="formData, object" type="Required" %}
  Form Data needed when creating a business record for current user.
  {% list isChild=true %}
  {% listitem title="id" validation="string" type="Required" %}
  Provide Business `id`.
  {% /listitem %}
  {% listitem title="type" validation="string" type="Required" %}
  Provide Business `type`. Current selection is only **businesses**.
  {% /listitem %}
  {% listitem title="attributes" validation="formData, object" %}
  Attributes object with a few **required** fields.
  {% list isChild=true %}
  {% listitem title="allow_pickup" validation="undefined" %}
  {% /listitem %}
  {% listitem title="auto_accept_orders" validation="undefined" %}
  {% /listitem %}
  {% listitem title="auto_accept_booking" validation="undefined" %}
  {% /listitem %}
  {% listitem title="order_business_web_notifications_enabled" validation="undefined" %}
  {% /listitem %}
  {% listitem title="reservation_business_web_notifications_enabled" validation="undefined" %}
  {% /listitem %}
  {% listitem title="orkestro_delivery_confirmation_enabled" validation="undefined" %}
  {% /listitem %}
  {% listitem title="available_in_lefood" validation="undefined" %}
  {% /listitem %}
  {% listitem title="average_delivery_time" validation="integer" %}
  {% /listitem %}
  {% listitem title="average_waiting_time" validation="integer" %}
  {% /listitem %}
  {% listitem title="bill_url" validation="string" %}
  {% /listitem %}
  {% listitem title="bio" validation="string" %}
  {% /listitem %}
  {% listitem title="breakfast_service" validation="undefined" %}
  {% /listitem %}
  {% listitem title="brunch_service" validation="undefined" %}
  {% /listitem %}
  {% listitem title="cafe_service" validation="undefined" %}
  {% /listitem %}
  {% listitem title="can_pay_with_cards" validation="undefined" %}
  {% /listitem %}
  {% listitem title="can_pay_with_cash" validation="undefined" %}
  {% /listitem %}
  {% listitem title="can_pay_with_mobile" validation="undefined" %}
  {% /listitem %}
  {% listitem title="city" validation="string" %}
  {% /listitem %}
  {% listitem title="country_code" validation="string" %}
  {% /listitem %}
  {% listitem title="currency" validation="string" %}
  {% /listitem %}
  {% listitem title="delivery_charge_ref" validation="string" %}
  {% /listitem %}
  {% listitem title="delivery_price_participation_ratio" validation="double" %}
  {% /listitem %}
  {% listitem title="delivery_service_type_ref" validation="string" %}
  {% /listitem %}
  {% listitem title="delivery_url" validation="string" %}
  {% /listitem %}
  {% listitem title="dinner_service" validation="undefined" %}
  {% /listitem %}
  {% listitem title="email" validation="string" %}
  {% /listitem %}
  {% listitem title="facebook" validation="string" %}
  {% /listitem %}
  {% listitem title="youtube" validation="string" %}
  {% /listitem %}
  {% listitem title="groups_list" validation="string" %}
  Slugs of groups delimeted by comma.
  {% /listitem %}
  {% listitem title="has_catering" validation="undefined" %}
  {% /listitem %}
  {% listitem title="has_join_the_queue" validation="undefined" %}
  {% /listitem %}
  {% listitem title="has_private_events" validation="undefined" %}
  {% /listitem %}
  {% listitem title="has_reservations" validation="undefined" %}
  {% /listitem %}
  {% listitem title="instagram" validation="string" %}
  {% /listitem %}
  {% listitem title="live_info" validation="string" %}
  {% /listitem %}
  {% listitem title="logo" validation="file" %}
  {% /listitem %}
  {% listitem title="lunch_service" validation="undefined" %}
  {% /listitem %}
  {% listitem title="max_reservation_size" validation="integer" %}
  {% /listitem %}
  {% listitem title="min_amount_for_delivery_cents" validation="integer" %}
  {% /listitem %}
  {% listitem title="min_time_before_reservation" validation="integer" %}
  Minimum time before creating a reservation expressed in seconds
  {% /listitem %}
  {% listitem title="name" validation="string" %}
  {% /listitem %}
  {% listitem title="online_booking_url" validation="string" %}
  {% /listitem %}
  {% listitem title="owner_role" validation="string" %}
  {% /listitem %}
  {% listitem title="phone" validation="string" %}
  {% /listitem %}
  {% listitem title="phone_country_code" validation="string" %}
  {% /listitem %}
  {% listitem title="phone_country_prefix" validation="string" %}
  {% /listitem %}
  {% listitem title="post_code" validation="string" %}
  {% /listitem %}
  {% listitem title="price_per_person" validation="string" %}
  {% /listitem %}
  {% listitem title="region_code" validation="string" %}
  {% /listitem %}
  {% listitem title="secret_code" validation="string" %}
  {% /listitem %}
  {% listitem title="snack_service" validation="undefined" %}
  {% /listitem %}
  {% listitem title="state" validation="string" %}
  {% /listitem %}
  {% listitem title="street" validation="string" %}
  {% /listitem %}
  {% listitem title="street_number" validation="string" %}
  {% /listitem %}
  {% listitem title="stripe_currency" validation="string" %}
  {% /listitem %}
  {% listitem title="stripe_payment_ref" validation="string" %}
  {% /listitem %}
  {% listitem title="eat_in_ref" validation="string" %}
  {% /listitem %}
  {% listitem title="tagline" validation="string" %}
  {% /listitem %}
  {% listitem title="takeaway_service_type_ref" validation="string" %}
  {% /listitem %}
  {% listitem title="takeaway_url" validation="string" %}
  {% /listitem %}
  {% listitem title="time_of_stay" validation="integer" %}
  Default time of staying in restaurant expressed in seconds
  {% /listitem %}
  {% listitem title="time_slots" validation="integer" %}
  Time specifying available hours for booking expressed in seconds
  {% /listitem %}
  {% listitem title="visible_in_lefood" validation="undefined" %}
  {% /listitem %}
  {% listitem title="website" validation="string" %}
  {% /listitem %}
  {% /list %}
  {% /listitem %}
  {% /list %}
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "PATCH", path: "/api/v1/businesses/{id}"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
  {
    const res = await fetch(`${BASE_URL}/api/v1/businesses/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)});

    const data = await res.json();
  }
  ```
  {% /tab %}
  {% tab label="py"%}
  ```py
    Python example
  ```
  {% /tab %}
  {% tab label="java"%}
  ```java
    Java example
  ```
  {% /tab %}
  {% tab label="ruby"%}
  ```ruby
    Ruby example
  ```
  {% /tab %}
  {% tab label="go"%}
  ```go
    Go example
  ```
  {% /tab %}
{% /tabs %}
{% /codeBlock %}
{% codeBlock title="RESPONSE" collapsable=true %}
  ```json
  {
    "data": {
      "id": "95e7f8ad-ae15-4d8e-acf4-67ada5ac5ec4",
      "type": "businesses",
      "links": {
        "self": "/businesses/95e7f8ad-ae15-4d8e-acf4-67ada5ac5ec4"
      },
      "attributes": {
        "allow-pickup": false,
        "approved-for-lefood": false,
        "auto-accept-orders": false,
        "auto-accept-booking": false,
        "available-in-lefood": false,
        "average-delivery-time": 0,
        "average-score": 0.0,
        "average-waiting-time": 0,
        "bill-url": null,
        "bio": "This is a test business bio created via Postman",
        "breakfast-service": false,
        "brunch-service": false,
        "cafe-service": false,
        "can-pay-with-cards": false,
        "can-pay-with-cash": false,
        "can-pay-with-mobile": false,
        "city": null,
        "connected-to-partoo": false,
        "contact-with-proper-owner-possible": true,
        "country": null,
        "country-code": null,
        "currency": null,
        "delivery-available": false,
        "delivery-charge-ref": null,
        "delivery-price-participation-ratio": "0.0",
        "delivery-service-type-ref": null,
        "delivery-url": null,
        "detected-language": null,
        "dinner-service": false,
        "email": null,
        "facebook": null,
        "favorite-id": null,
        "geolocation-lat": null,
        "geolocation-lng": null,
        "has-catering": false,
        "has-delivery": false,
        "has-join-the-queue": false,
        "has-online-booking": false,
        "has-private-events": false,
        "has-reservations": false,
        "has-takeaway": false,
        "hubrise-catalog-id": null,
        "hubrise-catalog-name": null,
        "instagram": null,
        "live-info": null,
        "logo": {
          "url": null
        },
        "lunch-service": false,
        "main-photo-url": null,
        "max-reservation-size": 20,
        "menu-synced": null,
        "min-amount-for-delivery-cents": 0,
        "min-time-before-reservation": 3600,
        "name": "API Test Business",
        "online-booking-url": null,
        "owner-role": null,
        "phone": null,
        "phone-country-code": null,
        "phone-country-prefix": null,
        "pos-partner-integration-exists": false,
        "post-code": null,
        "price-per-person": 0,
        "price-range": 0,
        "rating": 0.0,
        "region": null,
        "region-code": null,
        "secret-code": null,
        "slug": null,
        "snack-service": false,
        "state": "draft",
        "street": null,
        "street-number": null,
        "stripe-currency": null,
        "stripe-payment-ref": null,
        "eat-in-ref": null,
        "stripe-user-id": null,
        "tagline": null,
        "takeaway-service-type-ref": null,
        "takeaway-url": null,
        "time-of-stay": 2700,
        "time-slots": 1800,
        "timezone": null,
        "visible-in-lefood": false,
        "website": null,
        "youtube": null,
        "settings": {
          "orkestro_delivery_confirmation_enabled": true,
          "order_business_web_notifications_enabled": true,
          "reservation_business_web_notifications_enabled": true
        }
      },
      "relationships": {
        "addresses": {
          "links": {
            "self": "/businesses/95e7f8ad-ae15-4d8e-acf4-67ada5ac5ec4/relationships/addresses",
            "related": "/businesses/95e7f8ad-ae15-4d8e-acf4-67ada5ac5ec4/addresses"
          }
        },
        "groups": {
          "links": {
            "self": "/businesses/95e7f8ad-ae15-4d8e-acf4-67ada5ac5ec4/relationships/groups",
            "related": "/businesses/95e7f8ad-ae15-4d8e-acf4-67ada5ac5ec4/groups"
          }
        },
        "menus": {
          "links": {
            "self": "/businesses/95e7f8ad-ae15-4d8e-acf4-67ada5ac5ec4/relationships/menus",
            "related": "/businesses/95e7f8ad-ae15-4d8e-acf4-67ada5ac5ec4/menus"
          }
        },
        "open-periods": {
          "links": {
            "self": "/businesses/95e7f8ad-ae15-4d8e-acf4-67ada5ac5ec4/relationships/open-periods",
            "related": "/businesses/95e7f8ad-ae15-4d8e-acf4-67ada5ac5ec4/open-periods"
          }
        },
        "order-periods": {
          "links": {
            "self": "/businesses/95e7f8ad-ae15-4d8e-acf4-67ada5ac5ec4/relationships/order-periods",
            "related": "/businesses/95e7f8ad-ae15-4d8e-acf4-67ada5ac5ec4/order-periods"
          }
        },
        "orders": {
          "links": {
            "self": "/businesses/95e7f8ad-ae15-4d8e-acf4-67ada5ac5ec4/relationships/orders",
            "related": "/businesses/95e7f8ad-ae15-4d8e-acf4-67ada5ac5ec4/orders"
          }
        },
        "partners": {
          "links": {
            "self": "/businesses/95e7f8ad-ae15-4d8e-acf4-67ada5ac5ec4/relationships/partners",
            "related": "/businesses/95e7f8ad-ae15-4d8e-acf4-67ada5ac5ec4/partners"
          }
        },
        "pictures": {
          "links": {
            "self": "/businesses/95e7f8ad-ae15-4d8e-acf4-67ada5ac5ec4/relationships/pictures",
            "related": "/businesses/95e7f8ad-ae15-4d8e-acf4-67ada5ac5ec4/pictures"
          }
        },
        "products": {
          "links": {
            "self": "/businesses/95e7f8ad-ae15-4d8e-acf4-67ada5ac5ec4/relationships/products",
            "related": "/businesses/95e7f8ad-ae15-4d8e-acf4-67ada5ac5ec4/products"
          }
        },
        "reviews": {
          "links": {
            "self": "/businesses/95e7f8ad-ae15-4d8e-acf4-67ada5ac5ec4/relationships/reviews",
            "related": "/businesses/95e7f8ad-ae15-4d8e-acf4-67ada5ac5ec4/reviews"
          }
        }
      }
    }
  }
  ```
{% /codeBlock %}

{% /layoutTwoCol %}
{% /section %}

- - -

{% section %}
{% layoutTwoCol %}

{% methodCopy %}
{% methodInfo %}
  # Delete Business
  Delete a Business.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Delete a Business by specific business `id`. You can retrieve this `id` from ...
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "DELETE", path: "/api/v1/businesses/{id}"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
  {
    const res = await fetch(`${BASE_URL}/api/v1/businesses/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }});
    const data = await res.json();
  }
  ```
  {% /tab %}
  {% tab label="py"%}
  ```py
    Python example
  ```
  {% /tab %}
  {% tab label="java"%}
  ```java
    Java example
  ```
  {% /tab %}
  {% tab label="ruby"%}
  ```ruby
    Ruby example
  ```
  {% /tab %}
  {% tab label="go"%}
  ```go
    Go example
  ```
  {% /tab %}
{% /tabs %}
{% /codeBlock %}

{% /layoutTwoCol %}
{% /section %}
