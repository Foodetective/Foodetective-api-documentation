---
title: Business Guides
---
{% section %}
{% layoutTwoCol %}

{% methodCopy %}
{% methodInfo %}
  # {% $markdoc.frontmatter.title %}
  Return all guides that mentions the business.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Return all guides that mentions the business by the specific business `id`. You can retrieve this `id` from ...
  {% /listitem %}
  {% listitem title="include" validation="query string" %}
  Include associations (*delimited with comma*). Available associations: user.
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

{% codeBlock request={method: "GET", path: "/api/v1/businesses/{id}/guides"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
  {
    const res = await fetch(`${BASE_URL}/api/v1/businesses/${id}/guides`, {
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
{% /codeBlock %}

{% /layoutTwoCol %}
{% /section %}
