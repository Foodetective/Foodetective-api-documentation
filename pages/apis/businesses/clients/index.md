---
title: Business Clients
---
{% section %}
{% layoutTwoCol %}

{% methodCopy %}
{% methodInfo %}
  # {% $markdoc.frontmatter.title %}
  Return all clients for specific business.

  If any erros occur you can access the [errors guide](/errors).
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Returns all clients for specific business by the specific business `id`. You can retrieve this `id` from ...
  {% /listitem %}
  {% listitem title="sort" validation="query string" %}
  Sort ascending or descending order.
  {% /listitem %}
  {% listitem title="search" validation="query string" %}
  Search for clients by the following search queries **Name** or **email**.
  {% /listitem %}
  {% listitem title="page" validation="query string" %}
  Page offset to fetch.
  {% /listitem %}
  {% listitem title="per_page" validation="query string" %}
  Number of results to return per page.
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "GET", path: "/api/v1/businesses/{id}/clients"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/businesses/${id}/clients`, {
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
          "id": "583c82ab-04c7-4ce3-91f3-aceaa12a020e",
          "type": "users",
          "links": {
            "self": "/users/583c82ab-04c7-4ce3-91f3-aceaa12a020e"
          },
          "attributes": {
            "accepted-food-detective": false,
            "allergies": "peanuts, cats",
            "avatar": {
              "url": "https://foodetective-staging-backend-data.s3.amazonaws.com/uploads/user/avatar/583c82ab-04c7-4ce3-91f3-aceaa12a020e/9bb59f08-aee8-43ce-810c-cbbaa2532234.jpeg"
            },
            "birthday": "2000-06-10",
            "email": "bo@example.com",
            "favourite-drink": "beer & whisky",
            "favourite-food": "burger",
            "gender": "male",
            "monthly-bars-budget": 100,
            "monthly-delivery-takeaway-budget": 200,
            "monthly-restaurants-budget": 545,
            "name": "BOs Example 2",
            "phone": "8005555535",
            "phone-country-code": "RU",
            "phone-country-prefix": "7"
          }
        },
      ],
      "meta": {
        "total-count": 16,
        "total-pages": 2
      }
    }
  ```
{% /codeBlock %}

{% /layoutTwoCol %}
{% /section %}
