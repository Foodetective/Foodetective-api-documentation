---
title: Businesses Clients
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
  ### Example Request GET /v1/banners/newsroom
  ```bash
      {
          const res = await fetch(Base_url + '/v1/banners/newsroom', {
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
      "url": "/v1/banners/newsroom",
      "method": "GET",
      "data": {
        "id": "bd0ce9e1-74ba-4bf4-8f1c-8acee7b69b49",
        "type": "banners",
        "links": { "self": "/banners/bd0ce9e1-74ba-4bf4-8f1c-8acee7b69b49" },
        "attributes": {
          "target": "newsroom",
          "picture": {
            "url": "https://foodetective-staging-backend-data.s3.amazonaws.com/uploads/banner/picture/bd0ce9e1-74ba-4bf4-8f1c-8acee7b69b49/ 59a3926a-4b6c-4a5a-b046-5dae06327465.jpeg",
            "desktop": {
              "url": "https://foodetective-staging-backend-data.s3.amazonaws.com/uploads/banner/picture/bd0ce9e1-74ba-4bf4-8f1c-8acee7b69b49/   desktop_59a3926a-4b6c-4a5a-b046-5dae06327465.jpeg"
            },
            "tablet": {
              "url": "https://foodetective-staging-backend-data.s3.amazonaws.com/uploads/banner/picture/bd0ce9e1-74ba-4bf4-8f1c-8acee7b69b49/   tablet_59a3926a-4b6c-4a5a-b046-5dae06327465.jpeg"
            }
          }
        }
      }
    }
  ```
*
{% /table %}
