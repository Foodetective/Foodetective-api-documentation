---
title: Business Guides
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
  ### Example Request GET /api/v1/businesses/{id}/guides
  ```bash
      {
          const res = await fetch(`${BASE_URL}/api/v1/businesses/{id}/guides`, {
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
      "id": "a72ae1a8-747f-4705-a6a9-404e3194f024",
      "type": "guides",
      "links": {
        "self": "/guides/a72ae1a8-747f-4705-a6a9-404e3194f024"
      },
      "attributes": {
        "author-name": "QA Detective",
        "created-at": "2022-04-20T09:29:05.741Z",
        "description": "Hi, this is a test guide",
        "detected-language": "la",
        "main-photo": {
          "url": "https://foodetective-staging-backend-data.s3.amazonaws.com/uploads/guide/main_photo/a72ae1a8-747f-4705-a6a9-404e3194f024/8d05f23a-1b67-483f-ad24-f270b1e514d3.jpeg",
          "desktop": {
            "url": "https://foodetective-staging-backend-data.s3.amazonaws.com/uploads/guide/main_photo/a72ae1a8-747f-4705-a6a9-404e3194f024/desktop_8d05f23a-1b67-483f-ad24-f270b1e514d3.jpeg"
          },
          "tablet": {
            "url": "https://foodetective-staging-backend-data.s3.amazonaws.com/uploads/guide/main_photo/a72ae1a8-747f-4705-a6a9-404e3194f024/tablet_8d05f23a-1b67-483f-ad24-f270b1e514d3.jpeg"
          }
        },
        "name": "Test Guide",
        "slug": "test-guide-dd3add1e-a142-4dda-94f4-46da7d912a08"
      },
      "relationships": {
        "user": {
          "links": {
            "self": "/guides/a72ae1a8-747f-4705-a6a9-404e3194f024/relationships/user",
            "related": "/guides/a72ae1a8-747f-4705-a6a9-404e3194f024/user"
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