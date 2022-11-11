---
title: Business Members
---
{% section %}
{% layoutTwoCol %}

{% methodCopy %}
{% methodInfo %}
  # {% $markdoc.frontmatter.title %}
  Return all members for specific business.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Return all members by the specific business `id`. You can retrieve this `id` from ...
  {% /listitem %}
  {% listitem title="include" validation="query string" %}
  Include associations (delimited with comma). Available associations: business, user.

  **Example:** `business,user`
  {% /listitem %}
  {% listitem title="page" validation="query integer" %}
  Page offset to fetch.
  {% /listitem %}
  {% listitem title="per_page" validation="query integer" %}
  Number of results to return per page.
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "GET", path: "/api/v1/businesses{id}/members"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/businesses/${id}/members`, {
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
{% /codeBlock %}  

{% /layoutTwoCol %}
{% /section %}