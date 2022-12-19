---
title: Business Preferred Partners
---
{% section %}
{% layoutTwoCol %}

{% methodCopy %}
{% methodInfo %}
  # Business Prefered Partners
  Return preferred partners for specific business
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Return preferred partners by the specific business `id`. You can retrieve this `id` from ...
  {% /listitem %}
  {% listitem title="include" validation="query string" %}
  Include associations (*delimited with comma*). Available associations: users, partner_integrations.
  {% /listitem %}
  {% listitem title="categories" validation="query Array[string] filter" %}
  Filter by categories.
  {% /listitem %}
  {% listitem title="sort" validation="query string" %}
  Sort ascending or descending order.
  {% /listitem %}
  {% listitem title="page" validation="query integer" %}
  Page offset to fetch.
  {% /listitem %}
  {% listitem title="per_page" validation="query integer" %}
  Number of results to return per page.
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "GET", path: "/api/v1/businesses/{id}/preferred_partners"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/businesses/${id}/preferred_partners`, {
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
{% /codeBlock %}

{% /layoutTwoCol %}
{% /section %}
