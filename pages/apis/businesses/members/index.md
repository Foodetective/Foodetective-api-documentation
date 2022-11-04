---
title: Business Members
---
## {% $markdoc.frontmatter.title %}

### GET /api/v1/businesses{id}/members
{% table %}
---
* Parameters {% align="left" %}
  {% listitem title="include" type="Optional" /%}
  {% listitem title="page" type="Optional" /%}
  {% listitem title="per_page" type="Optional" /%}
  {% listitem title="id" type="Required" /%}
* Example {% align="left" %}
  ```bash
      {
          const res = await fetch(`${BASE_URL}/api/v1/businesses{id}/members`, {
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
        "id": "2249233b-baad-4c67-8914-947b3e5dc06e",
        "type": "members",
        "links": {
          "self": "/members/2249233b-baad-4c67-8914-947b3e5dc06e"
        },
        "attributes": {
          "business-manager": false,
          "email": "aleksandra.bochenska+TFDmember@netguru.com",
          "role": "business_member",
          "status": "pending"
        },
        "relationships": {
          "business": {
            "links": {
              "self": "/members/2249233b-baad-4c67-8914-947b3e5dc06e/relationships/business",
              "related": "/members/2249233b-baad-4c67-8914-947b3e5dc06e/business"
            }
          },
          "user": {
            "links": {
              "self": "/members/2249233b-baad-4c67-8914-947b3e5dc06e/relationships/user",
              "related": "/members/2249233b-baad-4c67-8914-947b3e5dc06e/user"
            }
          }
        }
      }
    ],
    "meta": {
      "total-count": 1,
      "total-pages": 1
    }
  }
```
{% /table %}
