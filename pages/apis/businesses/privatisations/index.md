---
title: Businesses Privatisations
---
{% section %}
{% layoutTwoCol %}

{% methodCopy %}
{% methodInfo %}
  # {% $markdoc.frontmatter.title %}
  Return all privatisations for specific business.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Return all privatisations by the specific business `id`. You can retrieve this `id` from ...
  {% /listitem %}
  {% listitem title="include" validation="query string" %}
  Include associations (delimited with comma). Available associations: business, user

  **Example:** `business,user`
  {% /listitem %}
  {% listitem title="sort" validation="query string" %}
  Sort ascending or descending order.
  {% /listitem %}
  {% listitem title="filter[start_date]" validation="query date" %}
  Filter by `start_date` date should be formated as a **ISO date**.
  {% /listitem %}
  {% listitem title="filter[end_date]" validation="query date" %}
  Filter by `end_date` date should be formated as a **ISO date**.
  {% /listitem %}
  {% listitem title="filter[statuses]" validation="query string" %}
  Filter by `statuses`.
  {% /listitem %}
  {% listitem title="page" validation="query integer" %}
  Page offset to fetch.
  {% /listitem %}
  {% listitem title="per_page" validation="query integer" %}
  Number of results to return per page.
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "GET", path: "/api/v1/businesses/{id}/privatisations"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/businesses/${id}/privatisations`, {
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
          "id": "49d9ba83-782a-432a-b2af-3098f7a2b53e",
          "type": "privatisations",
          "links": {
            "self": "/privatisations/49d9ba83-782a-432a-b2af-3098f7a2b53e"
          },
          "attributes": {
            "user-name": "Abc",
            "name": "Test",
            "email": "aleksandra.bochenska@netguru.com",
            "phone": "999999999",
            "phone-country-prefix": "41",
            "phone-country-code": "CH",
            "corporate-event": true,
            "date": "2022-08-20",
            "number-of-servings": 3,
            "company-name": null,
            "price-cents": 0,
            "from": 7200,
            "to": 10800,
            "number-of-waiters": 0,
            "type-of-event": "Yes",
            "chef-attendance": true,
            "specifications": null,
            "menu": {
              "url": null
            },
            "offer-send-at": null,
            "currency": null,
            "status": "draft",
            "created-at": "2022-08-19T13:07:35.041Z"
          },
          "relationships": {
            "business": {
              "links": {
                "self": "/privatisations/49d9ba83-782a-432a-b2af-3098f7a2b53e/relationships/business",
                "related": "/privatisations/49d9ba83-782a-432a-b2af-3098f7a2b53e/business"
              }
            },
            "user": {
              "links": {
                "self": "/privatisations/49d9ba83-782a-432a-b2af-3098f7a2b53e/relationships/user",
                "related": "/privatisations/49d9ba83-782a-432a-b2af-3098f7a2b53e/user"
              }
            }
          }
        },
      ],
      "meta": {
        "total-count": 2,
        "total-pages": 1
      }
    }
  ```
{% /codeBlock %}

{% /layoutTwoCol %}
{% /section %}
