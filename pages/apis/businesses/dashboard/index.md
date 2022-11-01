---
title: Business Dashboard
---

## {% $markdoc.frontmatter.title %}

{% table %}
* ### **Parameters**
---
* Parameters {% align="left" %}
  {% listitem title="id" type="Required" /%}
*
*
  ### Example Request GET /api/v1/businesses/{id}/dashboard/average_ticket_size
  ```bash
      {
          const res = await fetch(`${BASE_URL}/api/v1/businesses/{id}/dashboard/average_ticket_size`, {
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
*
{% /table %}

- - -

{% table %}
* ### **Parameters**
---
* Parameters {% align="left" %}
  {% listitem title="id" type="Required" /%}
*
*
  ### Example Request GET /api/v1/businesses/{id}/dashboard/earnings
  ```bash
      {
          const res = await fetch(`${BASE_URL}/api/v1/businesses/{id}/dashboard/earnings`, {
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
*
{% /table %}

- - -

{% table %}
* ### **Parameters**
---
* Parameters {% align="left" %}
  {% listitem title="id" type="Required" /%}
*
*
  ### Example Request GET /api/v1/businesses/{id}/dashboard/revenue_breakdown
  ```bash
      {
          const res = await fetch(`${BASE_URL}/api/v1/businesses/{id}/dashboard/revenue_breakdown`, {
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
*
{% /table %}

- - -

{% table %}
* ### **Parameters**
---
* Parameters {% align="left" %}
  {% listitem title="include" type="Optional" /%}
  {% listitem title="comparison" type="Optional" /%}
  {% listitem title="page" type="Optional" /%}
  {% listitem title="per_page" type="Optional" /%}
  {% listitem title="id" type="Required" /%}
*
*
  ### Example Request GET /api/v1/businesses/{id}/dashboard/worst_sales
  ```bash
      {
          const res = await fetch(`${BASE_URL}/api/v1/businesses/{id}/dashboard/worst_sales`, {
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
*
{% /table %}