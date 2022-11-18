---
title: Business Dishes
---
{% section %}
{% layoutTwoCol %}

{% methodCopy %}
{% methodInfo %}
  # {% $markdoc.frontmatter.title %}
  Return all dishes for specific business.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="include" validation="query string" %}
  Include associations (*delimited with comma*). Available associations: pictures, dish_option_categories, business, category.

  **Example:** `business,category`
  {% /listitem %}
  {% listitem title="page" validation="query string" %}
  Page offset to fetch.
  {% /listitem %}
  {% listitem title="per_page" validation="query integer" %}
  Number of results to return per page.
  {% /listitem %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Return all dishes by the specific business `id`. You can retrieve this `id` from ...
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "GET", path: "/api/v1/businesses/{id}/dishes"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/businesses/${id}/dishes`, {
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
          "id": "ef7eccdc-e214-438d-8cdb-4d4f04efa593",
          "type": "dishes",
          "links": {
            "self": "/dishes/ef7eccdc-e214-438d-8cdb-4d4f04efa593"
          },
          "attributes": {
            "currency": "GBP",
            "description": "eggs, beans, and everything you like",
            "name": "english breakfast",
            "on-uber-eats": true,
            "price-per-item-cents": 699,
            "sku-ref": "BR_1",
            "unavailable": false
          },
          "relationships": {
            "pictures": {
              "links": {
                "self": "/dishes/ef7eccdc-e214-438d-8cdb-4d4f04efa593/relationships/pictures",
                "related": "/dishes/ef7eccdc-e214-438d-8cdb-4d4f04efa593/pictures"
              }
            },
            "dish-option-categories": {
              "links": {
                "self": "/dishes/ef7eccdc-e214-438d-8cdb-4d4f04efa593/relationships/dish-option-categories",
                "related": "/dishes/ef7eccdc-e214-438d-8cdb-4d4f04efa593/dish-option-categories"
              }
            },
            "business": {
              "links": {
                "self": "/dishes/ef7eccdc-e214-438d-8cdb-4d4f04efa593/relationships/business",
                "related": "/dishes/ef7eccdc-e214-438d-8cdb-4d4f04efa593/business"
              }
            },
            "category": {
              "links": {
                "self": "/dishes/ef7eccdc-e214-438d-8cdb-4d4f04efa593/relationships/category",
                "related": "/dishes/ef7eccdc-e214-438d-8cdb-4d4f04efa593/category"
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