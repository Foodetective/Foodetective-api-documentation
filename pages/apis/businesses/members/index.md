---
title: Business Members
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
  ### Example Request GET /api/v1/businesses{id}/members
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
  ### Response
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
*
{% /table %}

- - -