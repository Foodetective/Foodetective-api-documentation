---
title: Businesses Reservations
---
{% section %}
{% layoutTwoCol %}

{% methodCopy %}
{% methodInfo %}
  # {% $markdoc.frontmatter.title %}
  This will return {% $markdoc.frontmatter.title %} by business `id`.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="sort" type="Optional" /%}
  {% listitem title="filter[start_date]" type="Optional" /%}
  {% listitem title="filter[end_date]" type="Optional" /%}
  {% listitem title="filter[from]" type="Optional" /%}
  {% listitem title="filter[to]" type="Optional" /%}
  {% listitem title="filter[statuses]" type="Optional" /%}
  {% listitem title="page" type="Optional" /%}
  {% listitem title="per_page" type="Optional" /%}
  {% listitem title="id" type="Required" /%}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "GET", path: "/v1/businesses/{id}/reservations"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/businesses/{id}/reservations`, {
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
{% codeBlock title="RESPONSE" %}
  ```json
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
{% /codeBlock %}  

{% /layoutTwoCol %}
{% /section %}