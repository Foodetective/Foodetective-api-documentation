---
title: Orders
---
{% section %}
{% layoutTwoCol %}

{% methodCopy %}
{% methodInfo %}
  # {% $markdoc.frontmatter.title %}
  Return a Order.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Return a Order by specific `id`.
  {% /listitem %}
  {% listitem title="include" validation="query string" %}
  Include associations (delimited with comma). Available associations: addresses, elements, business.

  **Example:** `business,elements`
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "GET", path: "/api/v1/orders/{id}"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
  {
    const res = await fetch(`${BASE_URL}/api/v1/orders/${id}`, {
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
      "id": "833a6878-118c-4baa-a6f1-0526e3f06d40",
      "type": "orders",
      "links": {
        "self": "/orders/833a6878-118c-4baa-a6f1-0526e3f06d40"
      },
      "attributes": {
        "accepted-at": null,
        "collection-at": null,
        "collection-code": null,
        "currency": "GBP",
        "customer-name": null,
        "dishes-cost-cents": 0,
        "driver-location-lat": null,
        "driver-location-long": null,
        "estimated-delivery-in": 0,
        "estimated-time-of-dropoff": null,
        "estimated-time-of-pickup": null,
        "notes": "{}",
        "other-rejection-reason": null,
        "origin": null,
        "hubrise-source": null,
        "hubrise-service-type": null,
        "pickup-at-business": false,
        "placed-at": null,
        "reject-reason": null,
        "shipping-cost-cents": 0,
        "shipping-cost-for-business-cents": 0,
        "shipping-cost-for-customer-cents": 0,
        "short-id": 0,
        "state": "draft",
        "time-wish": null,
        "total-cost-cents": 0,
        "unavailable-elements": null,
        "updated-at": "2022-11-22T14:49:17.744Z",
        "user-email": "aleksandra.bochenska+bo@netguru.com",
        "user-phone": null,
        "user-phone-country-code": null,
        "user-phone-country-prefix": null,
        "with-orkestro-delivery": false
      },
      "relationships": {
        "addresses": {
          "links": {
            "self": "/orders/833a6878-118c-4baa-a6f1-0526e3f06d40/relationships/addresses",
            "related": "/orders/833a6878-118c-4baa-a6f1-0526e3f06d40/addresses"
          }
        },
        "elements": {
          "links": {
            "self": "/orders/833a6878-118c-4baa-a6f1-0526e3f06d40/relationships/elements",
            "related": "/orders/833a6878-118c-4baa-a6f1-0526e3f06d40/elements"
          }
        },
        "business": {
          "links": {
            "self": "/orders/833a6878-118c-4baa-a6f1-0526e3f06d40/relationships/business",
            "related": "/orders/833a6878-118c-4baa-a6f1-0526e3f06d40/business"
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
  # Create Order
  Create a order of a business.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="data" validation="formData, object" type="Required" %}
  Form Data needed when creating a order of a business.
  {% list isChild=true %}
  {% listitem title="type" validation="string" type="Required" %}
  Provide Order `type`. Current selection is only **orders**.
  {% /listitem %}

  {% listitem title="relationships" validation="formData, object" %}
  Relationships object with **`business`** object.
  {% list isChild=true %}
  {% listitem title="business" validation="formData, object" %}
  Add a relationships link between Order and related Business.
  {% list isChild=true %}
  {% listitem title="id" validation="string" %}
  Related Business `id`.
  {% /listitem %}
  {% listitem title="type" validation="string" %}
  Business `type`; **business**.
  {% /listitem %}
  {% /list %}
  {% /listitem %}
  {% /list %}
  {% /listitem %}

  {% /list %}
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "POST", path: "/api/v1/orders"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
  {
    const res = await fetch(`${BASE_URL}/api/v1/orders`, {
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
  {
    "data": {
      "id": "833a6878-118c-4baa-a6f1-0526e3f06d40",
      "type": "orders",
      "links": {
        "self": "/orders/833a6878-118c-4baa-a6f1-0526e3f06d40"
      },
      "attributes": {
        "accepted-at": null,
        "collection-at": null,
        "collection-code": null,
        "currency": "GBP",
        "customer-name": null,
        "dishes-cost-cents": 0,
        "driver-location-lat": null,
        "driver-location-long": null,
        "estimated-delivery-in": 0,
        "estimated-time-of-dropoff": null,
        "estimated-time-of-pickup": null,
        "notes": "{}",
        "other-rejection-reason": null,
        "origin": null,
        "hubrise-source": null,
        "hubrise-service-type": null,
        "pickup-at-business": false,
        "placed-at": null,
        "reject-reason": null,
        "shipping-cost-cents": 0,
        "shipping-cost-for-business-cents": 0,
        "shipping-cost-for-customer-cents": 0,
        "short-id": 0,
        "state": "draft",
        "time-wish": null,
        "total-cost-cents": 0,
        "unavailable-elements": null,
        "updated-at": "2022-11-22T14:49:17.744Z",
        "user-email": "aleksandra.bochenska+bo@netguru.com",
        "user-phone": null,
        "user-phone-country-code": null,
        "user-phone-country-prefix": null,
        "with-orkestro-delivery": false
      },
      "relationships": {
        "addresses": {
          "links": {
            "self": "/orders/833a6878-118c-4baa-a6f1-0526e3f06d40/relationships/addresses",
            "related": "/orders/833a6878-118c-4baa-a6f1-0526e3f06d40/addresses"
          }
        },
        "elements": {
          "links": {
            "self": "/orders/833a6878-118c-4baa-a6f1-0526e3f06d40/relationships/elements",
            "related": "/orders/833a6878-118c-4baa-a6f1-0526e3f06d40/elements"
          }
        },
        "business": {
          "links": {
            "self": "/orders/833a6878-118c-4baa-a6f1-0526e3f06d40/relationships/business",
            "related": "/orders/833a6878-118c-4baa-a6f1-0526e3f06d40/business"
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
  # Update Order
  Update an Order.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Update a Order by specific `id`.
  {% /listitem %}

  {% listitem title="data" validation="formData, object" type="Required" %}
  Form Data needed when updating a Order.
  {% list isChild=true %}
  {% listitem title="id" validation="string" type="Required" %}
  Provide Order `id`.
  {% /listitem %}
  {% listitem title="type" validation="string" type="Required" %}
  Provide Order `type`. Current selection is only **orders**.
  {% /listitem %}

  {% listitem title="attributes" validation="formData, object" %}
  Attributes object.
  {% list isChild=true %}
  {% listitem title="delivery_id" validation="string" %}
  Delivery UUID.
  {% /listitem %}
  {% listitem title="notes" validation="undefined" %}
  Notes regarding the **Order** and **Delivery**.
  {% /listitem %}
  {% listitem title="pickup_at_business" validation="undefined" %}
  {% /listitem %}
  {% listitem title="shipping_cost_cents" validation="integer" %}
  {% /listitem %}
  {% listitem title="shipping_cost_for_business_cents" validation="integer" %}
  {% /listitem %}
  {% listitem title="shipping_cost_for_customer_cents" validation="integer" %}
  {% /listitem %}
  {% listitem title="state" validation="string" %}
  {% /listitem %}
  {% listitem title="time_wish" validation="string" %}
  {% /listitem %}
  {% listitem title="user_email" validation="string" %}
  User email address.
  {% /listitem %}
  {% listitem title="user_phone" validation="string" %}
  User phone number.
  {% /listitem %}
  {% listitem title="user_phone_country_code" validation="string" %}
  User phone number country code.
  {% /listitem %}
  {% listitem title="user_phone_country_prefix" validation="string" %}
  User phone number prefix.
  {% /listitem %}
  {% /list %}
  {% /listitem %}

  {% /list %}
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "PATCH", path: "/api/v1/orders/{id}"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
  {
    const res = await fetch(`${BASE_URL}/api/v1/orders/${id}`, {
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
      "id": "833a6878-118c-4baa-a6f1-0526e3f06d40",
      "type": "orders",
      "links": {
        "self": "/orders/833a6878-118c-4baa-a6f1-0526e3f06d40"
      },
      "attributes": {
        "accepted-at": null,
        "collection-at": null,
        "collection-code": null,
        "currency": "GBP",
        "customer-name": null,
        "dishes-cost-cents": 0,
        "driver-location-lat": null,
        "driver-location-long": null,
        "estimated-delivery-in": 0,
        "estimated-time-of-dropoff": null,
        "estimated-time-of-pickup": null,
        "notes": "{}",
        "other-rejection-reason": null,
        "origin": null,
        "hubrise-source": null,
        "hubrise-service-type": null,
        "pickup-at-business": false,
        "placed-at": null,
        "reject-reason": null,
        "shipping-cost-cents": 0,
        "shipping-cost-for-business-cents": 0,
        "shipping-cost-for-customer-cents": 0,
        "short-id": 0,
        "state": "draft",
        "time-wish": null,
        "total-cost-cents": 0,
        "unavailable-elements": null,
        "updated-at": "2022-11-22T14:55:01.874Z",
        "user-email": "iorderedapizza@test.com",
        "user-phone": null,
        "user-phone-country-code": null,
        "user-phone-country-prefix": null,
        "with-orkestro-delivery": false
      },
      "relationships": {
        "addresses": {
          "links": {
            "self": "/orders/833a6878-118c-4baa-a6f1-0526e3f06d40/relationships/addresses",
            "related": "/orders/833a6878-118c-4baa-a6f1-0526e3f06d40/addresses"
          }
        },
        "elements": {
          "links": {
            "self": "/orders/833a6878-118c-4baa-a6f1-0526e3f06d40/relationships/elements",
            "related": "/orders/833a6878-118c-4baa-a6f1-0526e3f06d40/elements"
          }
        },
        "business": {
          "links": {
            "self": "/orders/833a6878-118c-4baa-a6f1-0526e3f06d40/relationships/business",
            "related": "/orders/833a6878-118c-4baa-a6f1-0526e3f06d40/business"
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
  # Delete Order
  Delete a Order.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Delete a Order by specific `id`.
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "DELETE", path: "/api/v1/orders/{id}"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
  {
    const res = await fetch(`${BASE_URL}/api/v1/orders/${id}`, {
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

- - -

{% section %}
{% layoutTwoCol %}

{% methodCopy %}
{% methodInfo %}
  # Reject Order
  Reject an Order.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Update a Reject Order by specific `id`.
  {% /listitem %}

  {% listitem title="data" validation="formData, object" type="Required" %}
  Form Data needed when rejecting an Order.
  {% list isChild=true %}
  {% listitem title="id" validation="string" type="Required" %}
  Provide Order `id`.
  {% /listitem %}
  {% listitem title="type" validation="string" type="Required" %}
  Provide Order `type`. Current selection is only **orders**.
  {% /listitem %}

  {% listitem title="attributes" validation="formData, object" %}
  Attributes object.
  {% list isChild=true %}
  {% listitem title="reject_reason" validation="string" %}
  The reject reason from the following options; **other**, **dishes_unavailable**, **kitchen_full**, **no_delivery_person**, **almost_closing_time**.
  {% /listitem %}
  {% listitem title="other_rejection_reason" validation="string" %}
  If **reject reason** is **other**. Provided written reason not fitting to other categories.
  {% /listitem %}
  {% listitem title="unavailable_elements" validation="string" %}
  Unavailable elements UUIDs delimeted by comma
  {% /listitem %}
  {% /list %}
  {% /listitem %}

  {% /list %}
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "PATCH", path: "/api/v1/orders/{id}/reject"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
  {
    const res = await fetch(`${BASE_URL}/api/v1/orders/${id}/reject`, {
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
      "id": "153aa44c-3fea-4e10-acd5-6a67ee9e77de",
      "type": "orders",
      "links": { "self": "/orders/153aa44c-3fea-4e10-acd5-6a67ee9e77de" },
      "attributes": {
        "acceptedAt": null,
        "collectionAt": null,
        "collectionCode": null,
        "currency": "GBP",
        "customerName": null,
        "dishesCostCents": 51699,
        "driverLocationLat": null,
        "driverLocationLong": null,
        "estimatedDeliveryIn": 0,
        "estimatedTimeOfDropoff": null,
        "estimatedTimeOfPickup": null,
        "notes": {},
        "otherRejectionReason": null,
        "origin": null,
        "hubriseSource": null,
        "hubriseServiceType": null,
        "pickupAtBusiness": true,
        "placedAt": "2022-11-22T15:29:24.098Z",
        "rejectReason": "kitchen_full",
        "shippingCostCents": 0,
        "shippingCostForBusinessCents": 0,
        "shippingCostForCustomerCents": 0,
        "shortId": 441,
        "state": "rejected",
        "timeWish": "as soon as possible",
        "totalCostCents": 51699,
        "unavailableElements": null,
        "updatedAt": "2022-11-22T15:30:25.649Z",
        "userEmail": "aleksandra.bochenska+clientnew@netguru.com",
        "userPhone": "999999999",
        "userPhoneCountryCode": "PL",
        "userPhoneCountryPrefix": "48",
        "withOrkestroDelivery": false
      },
      "relationships": {
        "addresses": {
          "links": {
            "self": "/orders/153aa44c-3fea-4e10-acd5-6a67ee9e77de/relationships/addresses",
            "related": "/orders/153aa44c-3fea-4e10-acd5-6a67ee9e77de/addresses"
          }
        },
        "elements": {
          "links": {
            "self": "/orders/153aa44c-3fea-4e10-acd5-6a67ee9e77de/relationships/elements",
            "related": "/orders/153aa44c-3fea-4e10-acd5-6a67ee9e77de/elements"
          }
        },
        "business": {
          "links": {
            "self": "/orders/153aa44c-3fea-4e10-acd5-6a67ee9e77de/relationships/business",
            "related": "/orders/153aa44c-3fea-4e10-acd5-6a67ee9e77de/business"
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
  # Order Elements
  Return all elements for specific order.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Return all elements for specific order by `id`.
  {% /listitem %}
  {% listitem title="include" validation="query string" %}
  Include associations (delimited with comma). Available associations: element_options
  {% /listitem %}
  {% listitem title="page" validation="query integer" %}
  Page offset to fetch.
  {% /listitem %}
  {% listitem title="per_page" validation="query integer" %}
  Number of results to return per page.
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "GET", path: "/api/v1/orders/{id}/elements"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
  {
    const res = await fetch(`${BASE_URL}/api/v1/orders/${id}/elements`, {
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
        "id": "c47dcd01-d875-4960-8df1-e436e3b04fd1",
        "type": "elements",
        "links": {
          "self": "/elements/c47dcd01-d875-4960-8df1-e436e3b04fd1"
        },
        "attributes": {
          "currency": "GBP",
          "dish-name": "Test Dish",
          "dish-price-per-item-cents": 3000,
          "notes": null,
          "subsum-cents": 3000,
          "units": 1
        },
        "relationships": {
          "element-options": {
            "links": {
              "self": "/elements/c47dcd01-d875-4960-8df1-e436e3b04fd1/relationships/element-options",
              "related": "/elements/c47dcd01-d875-4960-8df1-e436e3b04fd1/element-options"
            }
          }
        }
      }
    ],
    "meta": {
      "total-count": 1,
      "total-pages": 1
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
  # Orkestro Order
  Return an Orkestro Order.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Return an Orkestro Order by specific `id`.
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "GET", path: "/api/v1/orders/{id}/orkestro"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/orders/${id}/orkestro`, {
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
  ```
{% /codeBlock %}

{% /layoutTwoCol %}
{% /section %}

- - -

{% section %}
{% layoutTwoCol %}

{% methodCopy %}
{% methodInfo %}
  # Create Orkestro Order
  Create an Orkestro Order.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Provided an Orkestro Order `id`.
  {% /listitem %}
  {% listitem title="data" validation="formData, object" type="Required" %}
  Form Data needed when creating an Orkestro Order.
  {% list isChild=true %}
  {% listitem title="id" validation="string" type="Required" %}
  Provided an Orkestro Order `id`.
  {% /listitem %}
  {% listitem title="type" validation="string" type="Required" %}
  Provide Order `type`. Current selection is only **orders**.
  {% /listitem %}

  {% /list %}
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "POST", path: "/api/v1/orders/{id}/orkestro"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/orders/${id}/orkestro`, {
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
