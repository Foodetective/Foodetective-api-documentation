---
title: Business Dishes
---

## {% $markdoc.frontmatter.title %}

{% table %}
* ### **Parameters**
---
* Parameters {% align="left" %}
  {% listitem title="include" type="Optional" /%}
  {% listitem title="page" type="Optional" /%}
  {% listitem title="per_page" type="Optional" /%}
  {% listitem title="id" type="Required" /%}
*
*
  ### Example Request GET /api/v1/businesses/{id}/dishes
  ```bash
      {
          const res = await fetch(`${BASE_URL}/api/v1/businesses/{id}/dishes`, {
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
*
{% /table %}

- - -