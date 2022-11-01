---
title: Bookings
---

## {% $markdoc.frontmatter.title %}

### GET ${BASE_URL}/api/v1/bookings/{id}
{% table %}
---
* Parameters {% align="left" %}
  {% listitem title="include" type="Optional" /%}
  {% listitem title="id" type="Required" /%}
* Example {% align="left" %}
  ```bash
      {
          const res = await fetch(`${BASE_URL}/api/v1/bookings/{id}`, {
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
  "data": {
    "id": "8f9399eb-e629-4756-a929-83a4fab16d3a",
    "type": "bookings",
    "links": {
      "self": "/bookings/8f9399eb-e629-4756-a929-83a4fab16d3a"
    },
    "attributes": {
      "seats-taken": 2
    },
    "relationships": {
      "reservation": {
        "links": {
          "self": "/bookings/8f9399eb-e629-4756-a929-83a4fab16d3a/relationships/reservation",
          "related": "/bookings/8f9399eb-e629-4756-a929-83a4fab16d3a/reservation"
        }
      },
      "table": {
        "links": {
          "self": "/bookings/8f9399eb-e629-4756-a929-83a4fab16d3a/relationships/table",
          "related": "/bookings/8f9399eb-e629-4756-a929-83a4fab16d3a/table"
        }
      }
    }
  }
}
  ```

{% /table %}