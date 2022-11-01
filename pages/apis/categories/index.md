---
title: Categories
---

## {% $markdoc.frontmatter.title %}

### GET /api/v1/categories
{% table %}
---
* Parameters {% align="left" %}
  {% listitem title="include" type="Optional" /%}
  {% listitem title="language" type="Optional" /%}
  {% listitem title="page" type="Optional" /%}
  {% listitem title="per_page" type="Optional" /%}
* Example {% align="left" %}
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
  Response
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
{% /table %}
- - -

### GET /api/v1/categories/{id}
{% table %}
---
* Parameters {% align="left" %}
  {% listitem title="include" type="Optional" /%}
  {% listitem title="language" type="Optional" /%}
  {% listitem title="id" type="Required" /%}
* Example {% align="left" %}
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
  Response
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
{% /table %}