---
title: Categories
---

## {% $markdoc.frontmatter.title %}

{% table %}
* ### **Parameters**
---
* 
   {% listitem %}
    [type] **Required**
   {% /listitem %}
   {% listitem %}
    [name] **Required**
   {% /listitem %}
   {% listitem %}
    [city] **Required**
   {% /listitem %}
   {% listitem %}
    [country_code] **Required**
   {% /listitem %}
   {% listitem %}
    [post_code] **Required**
   {% /listitem %}
   {% listitem %}
    [street] **Required**
   {% /listitem %}
   {% listitem %}
    [street_number] **Required**
   {% /listitem %}
   {% listitem %}
    [address_line]Optional
   {% /listitem %}
   {% listitem %}
    [notes]Optional 
   {% /listitem %}
   {% listitem %}
    [region_code]Optional
   {% /listitem %}
   {% listitem %}
     [order][data][type]Optional
   {% /listitem %}
   {% listitem %}
    [order][data][id]Optional
   {% /listitem %}
   {% listitem %}
    [region_code]Optional
   {% /listitem %}
*
*
  ### Example Request GET /api/v1/categories
  ```bash
      {
          const res = await fetch(`${Base_url}/api/v1/categories`, {
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
      "id": "d5f107e9-8134-4cd3-822c-50dfea412982",
      "type": "categories",
      "links": {
        "self": "/categories/d5f107e9-8134-4cd3-822c-50dfea412982"
      },
      "attributes": {
        "name": "New added category TEST"
      },
      "relationships": {
        "dishes": {
          "links": {
            "self": "/categories/d5f107e9-8134-4cd3-822c-50dfea412982/relationships/dishes",
            "related": "/categories/d5f107e9-8134-4cd3-822c-50dfea412982/dishes"
          }
        }
      }
    },
  ],
  "meta": {
    "total-count": 48,
    "total-pages": 5
  }
  ```
*
{% /table %}

---

{% table %}
* ### **Parameters**
---
* 
   {% listitem %}
    [type] **Required**
   {% /listitem %}
   {% listitem %}
    [name] **Required**
   {% /listitem %}
   {% listitem %}
    [city] **Required**
   {% /listitem %}
   {% listitem %}
    [country_code] **Required**
   {% /listitem %}
   {% listitem %}
    [post_code] **Required**
   {% /listitem %}
   {% listitem %}
    [street] **Required**
   {% /listitem %}
   {% listitem %}
    [street_number] **Required**
   {% /listitem %}
   {% listitem %}
    [address_line]Optional
   {% /listitem %}
   {% listitem %}
    [notes]Optional 
   {% /listitem %}
   {% listitem %}
    [region_code]Optional
   {% /listitem %}
   {% listitem %}
     [order][data][type]Optional
   {% /listitem %}
   {% listitem %}
    [order][data][id]Optional
   {% /listitem %}
   {% listitem %}
    [region_code]Optional
   {% /listitem %}
*
*
  ### Example Request GET /api/v1/categories/{id}
  ```bash
      {
          const res = await fetch(`${Base_url}/api/v1/categories/{id}`, {
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
  "url": "/api/v1/categories/{id}",
  "method": "GET",
  "data": {
    "id": "d5f107e9-8134-4cd3-822c-50dfea412982",
    "type": "categories",
    "links": {
      "self": "/categories/d5f107e9-8134-4cd3-822c-50dfea412982"
    },
    "attributes": {
      "name": "New added category TEST"
    },
    "relationships": {
      "dishes": {
        "links": {
          "self": "/categories/d5f107e9-8134-4cd3-822c-50dfea412982/relationships/dishes",
          "related": "/categories/d5f107e9-8134-4cd3-822c-50dfea412982/dishes"
        }
      }
    }
  }
}
  ```
*
{% /table %}