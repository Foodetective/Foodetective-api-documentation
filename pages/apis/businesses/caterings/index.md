---
title: Business Caterings
---
{% section %}
{% layoutTwoCol %}

{% methodCopy %}
{% methodInfo %}
  # {% $markdoc.frontmatter.title %}
  Return all caterings for specific business.

  If any erros occur you can access the [errors guide](/errors).
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Returns all caterings for specific business by the specific business `id`. You can retrieve this `id` from ...
  {% /listitem %}
  {% listitem title="include" validation="query string" %}
  Include associations (*delimited with comma*). Available associations: business, user, address.

  **Example:** `business,user,address`
  {% /listitem %}
  {% listitem title="sort" validation="query string" %}
  Sort ascending or descending order.
  {% /listitem %}
  {% listitem title="start_date" validation="query date filter" %}
  Date should be formated as a **ISO date**.

  **Example:** `?filter=${start_date}`
  {% /listitem %}
  {% listitem title="end_date" validation="query date filter" %}
  Date should be formated as a **ISO date**.
  {% /listitem %}
  {% listitem title="statuses" validation="query string filter" %}
  Filter caterings by a certain status.
  {% /listitem %}
  {% listitem title="page" validation="query integer" %}
  Page offset to fetch.
  {% /listitem %}
  {% listitem title="per_page" validation="query integer" %}
  Number of results to return per page.
  {% /listitem %}
{% /list %}
{% /methodCopy %}
{% codeBlock request={method: "GET", path: "/api/v1/businesses/{id}/caterings"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/businesses/${id}/caterings`, {
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
{% /codeBlock %}

{% /layoutTwoCol %}
{% /section %}
