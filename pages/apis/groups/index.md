---
title: Groups
---
{% section %}
{% layoutTwoCol %}

{% methodCopy %}
{% methodInfo %}
  # {% $markdoc.frontmatter.title %}
  Return all Groups.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="include" validation="query string" %}
  Include associations (delimited with comma). Available associations: businesses.
  {% /listitem %}
  {% listitem title="filter[parent_group]" validation="query string" %}
  Filter by `parent_group`.
  {% /listitem %}
  {% listitem title="sort" validation="query string" %}
  Sort ascending or descending order.
  {% /listitem %}
  {% listitem title="page" validation="query integer" %}
  Page offset to fetch.
  {% /listitem %}
  {% listitem title="per_page" validation="query integer" %}
  Number of results to return per page.
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "GET", path: "/api/v1/groups"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
  {
    const res = await fetch(`${BASE_URL}/api/v1/groups`, {
      method: 'GET',
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
    "data": [
      {
        "id": "a8366631-9d80-438a-8096-04724727d35b",
        "type": "groups",
        "links": {
          "self": "/groups/a8366631-9d80-438a-8096-04724727d35b"
        },
        "attributes": {
          "icon": {
            "url": null
          },
          "name": "African",
          "parent-group": "cuisines",
          "slug": "african"
        },
        "relationships": {
          "businesses": {
            "links": {
              "self": "/groups/a8366631-9d80-438a-8096-04724727d35b/relationships/businesses",
              "related": "/groups/a8366631-9d80-438a-8096-04724727d35b/businesses"
            }
          }
        }
      }
    ],
    "meta": {
      "total-count": 190,
      "total-pages": 95
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
  # Group by id
  Return a Group.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Return a Group by specific `id`.
  {% /listitem %}
  {% listitem title="include" validation="query string" %}
  Include associations (delimited with comma). Available associations: businesses.
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "GET", path: "/api/v1/groups/{id}"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
  {
    const res = await fetch(`${BASE_URL}/api/v1/groups/${id}`, {
      method: 'GET',
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
      "id": "a8366631-9d80-438a-8096-04724727d35b",
      "type": "groups",
      "links": {
        "self": "/groups/a8366631-9d80-438a-8096-04724727d35b"
      },
      "attributes": {
        "icon": {
          "url": null
        },
        "name": "African",
        "parent-group": "cuisines",
        "slug": "african"
      },
      "relationships": {
        "businesses": {
          "links": {
            "self": "/groups/a8366631-9d80-438a-8096-04724727d35b/relationships/businesses",
            "related": "/groups/a8366631-9d80-438a-8096-04724727d35b/businesses"
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
  # Published Businesses Group
  Return published businesses for specific group.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Return a Group by specific `id`.
  {% /listitem %}
  {% listitem title="include" validation="query string" %}
  Include associations (delimited with comma). Available associations: addresses, groups, menus, open_periods, order_periods, orders, partners, pictures, products, reviews.

  **Example:** `groups,reviews`
  {% /listitem %}
  {% listitem title="sort" validation="query string" %}
  Sort ascending or descending order.
  {% /listitem %}
  {% listitem title="page" validation="query integer" %}
  Page offset to fetch.
  {% /listitem %}
  {% listitem title="per_page" validation="query integer" %}
  Number of results to return per page.
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "GET", path: "/api/v1/groups/{id}/businesses"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
  {
    const res = await fetch(`${BASE_URL}/api/v1/groups/${id}/businesses`, {
      method: 'GET',
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
    "data": [
      {
        "id": "c64ca4b7-dbad-4912-86d2-bdc1a0e25ea4",
        "type": "businesses",
        "links": {
          "self": "/businesses/c64ca4b7-dbad-4912-86d2-bdc1a0e25ea4"
        },
        "attributes": {
          "allow-pickup": true,
          "approved-for-lefood": true,
          "auto-accept-orders": true,
          "auto-accept-booking": false,
          "auto-accept-booking-limit": null,
          "available-in-lefood": true,
          "average-delivery-time": 30,
          "average-score": 6.9,
          "average-waiting-time": 0,
          "bill-url": null,
          "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum rhoncus libero pharetra varius. Sed pulvinar augue ante, quis mattis eros auctor nec. Proin sed risus ac metus mollis aliquet non quis nunc. Nullam sollicitudin orci et arcu scelerisque, eget consequat mi vulputate. In vitae purus nisl. Morbi vel magna convallis, pretium ipsum non, malesuada dolor. Ut tincidunt sagittis quam quis gravida. Sed eu lacinia lorem. Proin ac risus maximus tortor facilisis ultricies ac ac dui. Sed maximus lorem ut dolor imperdiet, lobortis dignissim ligula blandit. Sed et accumsan nisi, ac feugiat libero. Test",
          "breakfast-service": true,
          "brunch-service": true,
          "cafe-service": true,
          "can-pay-with-cards": true,
          "can-pay-with-cash": true,
          "can-pay-with-mobile": false,
          "city": "London",
          "connected-to-partoo": true,
          "contact-with-proper-owner-possible": true,
          "country": "United Kingdom",
          "country-code": "GB",
          "currency": "EUR",
          "delivery-available": true,
          "delivery-charge-ref": null,
          "delivery-price-participation-ratio": "1.0",
          "delivery-service-type-ref": null,
          "delivery-url": "https://test.co1",
          "detected-language": "la",
          "dinner-service": true,
          "email": "tests@foodetective.co",
          "facebook": "https://facebook.com/test",
          "favorite-id": null,
          "geolocation-lat": "51.5100083",
          "geolocation-lng": "-0.1352921",
          "has-catering": true,
          "has-delivery": true,
          "has-join-the-queue": false,
          "has-online-booking": true,
          "has-private-events": true,
          "has-reservations": true,
          "has-takeaway": true,
          "hubrise-catalog-id": "wqv49",
          "hubrise-catalog-name": "BOs Example",
          "instagram": "https://instagram.com/test",
          "live-info": "20% off on every Sunday! Visit us! bl blabla",
          "logo": {
            "url": "https://foodetective-staging-backend-data.s3.amazonaws.com/uploads/business/logo/c64ca4b7-dbad-4912-86d2-bdc1a0e25ea4/9ae8a32b-a8d4-4aef-a361-f8b7d1187dac.jpeg"
          },
          "lunch-service": true,
          "main-photo-url": "https://foodetective-staging-backend-data.s3.amazonaws.com/uploads/picture/photo/e2bcd170-e838-47a8-b6e0-54ccd32a993f/a6069b87-dd2c-4e5e-83da-8693fb13bae3.jpeg",
          "max-reservation-size": 20,
          "menu-synced": false,
          "min-amount-for-delivery-cents": 2000,
          "min-time-before-reservation": 3600,
          "name": "Demo Account",
          "online-booking-url": "https://test.com",
          "owner-role": null,
          "phone": "48805553535",
          "phone-country-code": "PL",
          "phone-country-prefix": "48",
          "pos-partner-integration-exists": true,
          "post-code": "1205",
          "price-per-person": 35,
          "price-range": 3,
          "rating": 6.9,
          "region": "London, City of",
          "region-code": "GB-LND",
          "secret-code": null,
          "slug": "demo-account",
          "snack-service": true,
          "state": "published",
          "street": "Piccadilly Stree",
          "street-number": "12",
          "stripe-currency": "EUR",
          "stripe-payment-ref": null,
          "eat-in-ref": null,
          "stripe-user-id": "acct_1ESMR7BfthCf3nJp",
          "tagline": "The Very Best, Just for you.",
          "takeaway-service-type-ref": null,
          "takeaway-url": "https://takeway.url",
          "time-of-stay": 2700,
          "time-slots": 3600,
          "timezone": "Europe/London",
          "visible-in-lefood": true,
          "website": "https://test.com",
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
              "self": "/businesses/c64ca4b7-dbad-4912-86d2-bdc1a0e25ea4/relationships/addresses",
              "related": "/businesses/c64ca4b7-dbad-4912-86d2-bdc1a0e25ea4/addresses"
            }
          },
          "groups": {
            "links": {
              "self": "/businesses/c64ca4b7-dbad-4912-86d2-bdc1a0e25ea4/relationships/groups",
              "related": "/businesses/c64ca4b7-dbad-4912-86d2-bdc1a0e25ea4/groups"
            }
          },
          "menus": {
            "links": {
              "self": "/businesses/c64ca4b7-dbad-4912-86d2-bdc1a0e25ea4/relationships/menus",
              "related": "/businesses/c64ca4b7-dbad-4912-86d2-bdc1a0e25ea4/menus"
            }
          },
          "open-periods": {
            "links": {
              "self": "/businesses/c64ca4b7-dbad-4912-86d2-bdc1a0e25ea4/relationships/open-periods",
              "related": "/businesses/c64ca4b7-dbad-4912-86d2-bdc1a0e25ea4/open-periods"
            }
          },
          "order-periods": {
            "links": {
              "self": "/businesses/c64ca4b7-dbad-4912-86d2-bdc1a0e25ea4/relationships/order-periods",
              "related": "/businesses/c64ca4b7-dbad-4912-86d2-bdc1a0e25ea4/order-periods"
            }
          },
          "orders": {
            "links": {
              "self": "/businesses/c64ca4b7-dbad-4912-86d2-bdc1a0e25ea4/relationships/orders",
              "related": "/businesses/c64ca4b7-dbad-4912-86d2-bdc1a0e25ea4/orders"
            }
          },
          "partners": {
            "links": {
              "self": "/businesses/c64ca4b7-dbad-4912-86d2-bdc1a0e25ea4/relationships/partners",
              "related": "/businesses/c64ca4b7-dbad-4912-86d2-bdc1a0e25ea4/partners"
            }
          },
          "pictures": {
            "links": {
              "self": "/businesses/c64ca4b7-dbad-4912-86d2-bdc1a0e25ea4/relationships/pictures",
              "related": "/businesses/c64ca4b7-dbad-4912-86d2-bdc1a0e25ea4/pictures"
            }
          },
          "products": {
            "links": {
              "self": "/businesses/c64ca4b7-dbad-4912-86d2-bdc1a0e25ea4/relationships/products",
              "related": "/businesses/c64ca4b7-dbad-4912-86d2-bdc1a0e25ea4/products"
            }
          },
          "reviews": {
            "links": {
              "self": "/businesses/c64ca4b7-dbad-4912-86d2-bdc1a0e25ea4/relationships/reviews",
              "related": "/businesses/c64ca4b7-dbad-4912-86d2-bdc1a0e25ea4/reviews"
            }
          }
        }
      }
    ],
    "meta": {
      "total-count": 9,
      "total-pages": 9
    }
  }
  ```
{% /codeBlock %}

{% /layoutTwoCol %}
{% /section %}
