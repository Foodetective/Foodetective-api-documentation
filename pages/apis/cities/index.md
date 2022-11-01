---
title: Cities
---

## {% $markdoc.frontmatter.title %}

{% table %}
* ### **Parameters**
---
* Parameters {% align="left" %}
  {% listitem title="sort" type="Optional" /%}
  {% listitem title="page" type="Optional" /%}
  {% listitem title="per_page" type="Optional" /%}
*
*
  ### Example Request GET /api/v1/cities
  ```bash
      {
          const res = await fetch(`${BASE_URL}/api/v1/cities`', {
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
          "id": "4b166dbe-d99d-5091-abdd-95b83330ed3a",
          "type": "cities",
          "links": {
            "self": "/cities/4b166dbe-d99d-5091-abdd-95b83330ed3a"
          },
          "attributes": {
            "businesses-count": 1,
            "geolocation-lat": null,
            "geolocation-lng": null,
            "name": "2"
          }
        },
      ],
      "meta": {
        "total-count": 18,
        "total-pages": 2
      }
    }
  ```
*
{% /table %}
