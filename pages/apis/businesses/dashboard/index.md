---
title: Business Dashboard
---
{% section %}
{% layoutTwoCol %}

{% methodCopy %}
{% methodInfo %}
  # Average Ticket Size
  Return average ticket size values for dashboard.

  If any erros occur you can access the [errors guide](/errors).
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Returns average ticket size values by the specific business `id`. You can retrieve this `id` from ...
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "GET", path: "/api/v1/businesses/{id}/dashboard/average_ticket_size"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/businesses/${id}/dashboard/average_ticket_size`, {
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
      "data": {
        "id": "2022-10-31 14:49:54 UTC",
        "type": "average_ticket_size",
        "attributes": {
          "average_today": 0,
          "average_yesterday": 0,
          "average_this_month": 0,
          "average_previous_month": 0,
          "average_this_quarter": 0,
          "average_previous_quarter": 6111,
          "average_this_year": 3742,
          "average_previous_year": 26044
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
  # Best Sales
  Return best selling dishes for specific business. You can compare by **day**, **month**, **quarter** or **year**.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Returns best selling dishes by the specific business `id`. You can retrieve this `id` from ...
  {% /listitem %}
  {% listitem title="include" validation="query string" %}
  Include associations (*delimited with comma*). Available associations: pictures, dish_option_categories, business, category.

  **Example:** `pictures,category`
  {% /listitem %}
  {% listitem title="comparison" validation="query string" %}
  Period of sales comparison by **day**, **month**, **quarter** or **year**.
  {% /listitem %}
  {% listitem title="page" validation="query integer" %}
  Page offset to fetch.
  {% /listitem %}
  {% listitem title="per_page" validation="query integer" %}
  Number of results to return per page.
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "GET", path: "/api/v1/businesses/{id}/dashboard/best_sales"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/businesses/${id}/dashboard/best_sales`, {
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
          "id": "cd75805c-4952-4414-800e-988dea9988da",
          "type": "dishes",
          "links": {
            "self": "/dishes/cd75805c-4952-4414-800e-988dea9988da"
          },
          "attributes": {
            "currency": "EUR",
            "description": null,
            "name": "Make your own pasta",
            "on-uber-eats": true,
            "ordered-units-count-current": 18,
            "ordered-units-count-previous": 0,
            "price-per-item-cents": 1500,
            "sku-ref": "127",
            "unavailable": false
          },
          "relationships": {
            "pictures": {
              "links": {
                "self": "/dishes/cd75805c-4952-4414-800e-988dea9988da/relationships/pictures",
                "related": "/dishes/cd75805c-4952-4414-800e-988dea9988da/pictures"
              }
            },
            "dish-option-categories": {
              "links": {
                "self": "/dishes/cd75805c-4952-4414-800e-988dea9988da/relationships/dish-option-categories",
                "related": "/dishes/cd75805c-4952-4414-800e-988dea9988da/dish-option-categories"
              }
            },
            "business": {
              "links": {
                "self": "/dishes/cd75805c-4952-4414-800e-988dea9988da/relationships/business",
                "related": "/dishes/cd75805c-4952-4414-800e-988dea9988da/business"
              }
            },
            "category": {
              "links": {
                "self": "/dishes/cd75805c-4952-4414-800e-988dea9988da/relationships/category",
                "related": "/dishes/cd75805c-4952-4414-800e-988dea9988da/category"
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

- - -

{% section %}
{% layoutTwoCol %}

{% methodCopy %}
{% methodInfo %}
  # Earnings
  Return sum of today's earnings compared to sum of yesterday's earnings and to last month/last 3 months/last year average values for earnings.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Returns sum of earnings by the specific business `id`. You can retrieve this `id` from ...
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "GET", path: "/api/v1/businesses/{id}/dashboard/earnings"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/businesses/${id}/dashboard/earnings`, {
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
      "data": {
        "id": "2022-10-31 14:43:52 UTC",
        "type": "earnings",
        "attributes": {
          "sum_today": 0,
          "sum_yesterday": 0,
          "sum_this_month": 0,
          "sum_previous_month": 5364,
          "sum_this_quarter": 0,
          "sum_previous_quarter": 170398,
          "sum_this_year": 625110,
          "sum_previous_year": 483243
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
  # Revenue Breakdown
  Return revenue breakdown for dashboard.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Returns revenue breakdown by the specific business `id`. You can retrieve this `id` from ...
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "GET", path: "/api/v1/businesses/{id}/dashboard/revenue_breakdown"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/businesses/${id}/dashboard/revenue_breakdown`, {
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
      "data": {
        "id": "2022-10-31 14:41:47 UTC",
        "type": "revenue_breakdown",
        "attributes": {
          "revenue": {
            "sum_today": 0,
            "sum_yesterday": 0,
            "sum_this_month": 0,
            "sum_previous_month": 0,
            "sum_this_quarter": 0,
            "sum_previous_quarter": 132500,
            "sum_this_year": 504149,
            "sum_previous_year": 2198012,
            "sum_all": 2709631
          },
          "on_site_revenue": {
            "sum_today": 0,
            "sum_yesterday": 0,
            "sum_this_month": 0,
            "sum_previous_month": 0,
            "sum_this_quarter": 0,
            "sum_previous_quarter": 0,
            "sum_this_year": 0,
            "sum_previous_year": 0,
            "sum_all": 0
          },
          "delivery_revenue": {
            "sum_today": 0,
            "sum_yesterday": 0,
            "sum_this_month": 0,
            "sum_previous_month": 0,
            "sum_this_quarter": 0,
            "sum_previous_quarter": 123300,
            "sum_this_year": 275300,
            "sum_previous_year": 1320287,
            "sum_all": 1603057
          },
          "takeaway_revenue": {
            "sum_today": 0,
            "sum_yesterday": 0,
            "sum_this_month": 0,
            "sum_previous_month": 0,
            "sum_this_quarter": 0,
            "sum_previous_quarter": 9200,
            "sum_this_year": 228849,
            "sum_previous_year": 877725,
            "sum_all": 1106574
          },
          "other_revenue": {
            "sum_today": 0,
            "sum_yesterday": 0,
            "sum_this_month": 0,
            "sum_previous_month": 0,
            "sum_this_quarter": 0,
            "sum_previous_quarter": 0,
            "sum_this_year": 0,
            "sum_previous_year": 0,
            "sum_all": 0
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
  # Worst Sales
  Return worst selling dishes for specific business. You can compare by **day**, **month**, **quarter** or **year**.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Returns worst selling dishes by the specific business `id`. You can retrieve this `id` from ...
  {% /listitem %}
  {% listitem title="include" validation="query string" %}
  Include associations (*delimited with comma*). Available associations: pictures, dish_option_categories, business, category.

  **Example:** `pictures,category`
  {% /listitem %}
  {% listitem title="comparison" validation="query string" %}
  Period of sales comparison by **day**, **month**, **quarter** or **year**.
  {% /listitem %}
  {% listitem title="page" validation="query integer" %}
  Page offset to fetch.
  {% /listitem %}
  {% listitem title="per_page" validation="query integer" %}
  Number of results to return per page.
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "GET", path: "/api/v1/businesses/{id}/dashboard/worst_sales"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/businesses/${id}/dashboard/worst_sales`, {
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
          "id": "cd75805c-4952-4414-800e-988dea9988da",
          "type": "dishes",
          "links": {
            "self": "/dishes/cd75805c-4952-4414-800e-988dea9988da"
          },
          "attributes": {
            "currency": "EUR",
            "description": null,
            "name": "Make your own pasta",
            "on-uber-eats": true,
            "ordered-units-count-current": 18,
            "ordered-units-count-previous": 0,
            "price-per-item-cents": 1500,
            "sku-ref": "127",
            "unavailable": false
          },
          "relationships": {
            "pictures": {
              "links": {
                "self": "/dishes/cd75805c-4952-4414-800e-988dea9988da/relationships/pictures",
                "related": "/dishes/cd75805c-4952-4414-800e-988dea9988da/pictures"
              }
            },
            "dish-option-categories": {
              "links": {
                "self": "/dishes/cd75805c-4952-4414-800e-988dea9988da/relationships/dish-option-categories",
                "related": "/dishes/cd75805c-4952-4414-800e-988dea9988da/dish-option-categories"
              }
            },
            "business": {
              "links": {
                "self": "/dishes/cd75805c-4952-4414-800e-988dea9988da/relationships/business",
                "related": "/dishes/cd75805c-4952-4414-800e-988dea9988da/business"
              }
            },
            "category": {
              "links": {
                "self": "/dishes/cd75805c-4952-4414-800e-988dea9988da/relationships/category",
                "related": "/dishes/cd75805c-4952-4414-800e-988dea9988da/category"
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