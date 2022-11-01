---
title: Business Partners
---

## {% $markdoc.frontmatter.title %}

### GET /api/v1/businesses/{id}/preferred_partners
{% table %}
---
* Parameters {% align="left" %}
  {% listitem title="include" type="Optional" /%}
  {% listitem title="sort" type="Optional" /%}
  {% listitem title="filter[categories]" type="Optional" /%}
  {% listitem title="page" type="Optional" /%}
  {% listitem title="per_page" type="Optional" /%}
  {% listitem title="id" type="Required" /%}
* Example {% align="left" %}
  ```bash
      {
          const res = await fetch(`${BASE_URL}/api/v1/businesses/{id}/preferred_partners`, {
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
        "id": "609881f5-3b64-4a4f-9d72-022fb9a6a58a",
        "type": "partners",
        "links": {
          "self": "/partners/609881f5-3b64-4a4f-9d72-022fb9a6a58a"
        },
        "attributes": {
          "active": true,
          "book-meeting": null,
          "categories": ["wholesaler"],
          "description": null,
          "display-credentials-prompt": false,
          "email": null,
          "logo": {
            "url": "https://foodetective-staging-backend-data.s3.amazonaws.com/uploads/partner/logo/609881f5-3b64-4a4f-9d72-022fb9a6a58a/5b95b96a-8a99-4725-b4b8-05c06b05b143.png"
          },
          "name": "Coca Cola HBC",
          "status": null,
          "partner-integration-active": null,
          "partner-integration-requested": null,
          "phone": null,
          "preferred": null,
          "user-integration-requested": null,
          "video-url": "https://www.youtube.com/watch?v=vsmWaX53-eU",
          "website-supports-iframe": true,
          "website-url": "https://www.netguru.com",
          "wholesaler-category": 8,
          "wholesaler-types": ["soft_drinks"]
        },
        "relationships": {
          "users": {
            "links": {
              "self": "/partners/609881f5-3b64-4a4f-9d72-022fb9a6a58a/relationships/users",
              "related": "/partners/609881f5-3b64-4a4f-9d72-022fb9a6a58a/users"
            }
          },
          "partner-integrations": {
            "links": {
              "self": "/partners/609881f5-3b64-4a4f-9d72-022fb9a6a58a/relationships/partner-integrations",
              "related": "/partners/609881f5-3b64-4a4f-9d72-022fb9a6a58a/partner-integrations"
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
{% /table %}
