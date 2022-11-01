---
title: Blog Posts
---

## {% $markdoc.frontmatter.title %}

### GET ${BASE_URL}/api/v1/blog_posts
{% table %}
* Parameters {% align="left" %}
  {% listitem title="include" type="Optional" %}
    Bring back all blog posts by type
  {% /listitem %}
  {% listitem title="sort" type="Optional" /%}
  {% listitem title="lang" type="Optional" /%}
  {% listitem title="page" type="Optional" /%}
  {% listitem title="per_page" type="Optional" /%}
* Example {% align="left" %}
  ```bash
      {
          const res = await fetch(`${BASE_URL}/api/v1/blog_posts`, {
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
        "data":[
      {
        "id": "62a05bd2-2f0e-4bac-8f8b-63947f4df16f",
        "type": "blog-posts",
        "links":{
           "self": "/blog-posts/62a05bd2-2f0e-4bac-8f8b-63947f4df16f"
         },
        "attributes":{
            "alt-text": null,
            "name": "asdf",
            "headline": "asdf",
            "summary": "summary",
            "read-duration": 3,
            "date": "2022-03-01",
            "cover-picture": {
               "url": "https://foodetective-staging-backend-data.s3.amazonaws.com/uploads/blog_post/cover_picture/62a05bd2-2f0e-4bac-8f8b-63947f4df16f/8077896a-c988-4ed3-bf85-ff7ed48ff77d.png",
               "desktop":{
                  "url": "https://foodetective-staging-backend-data.s3.amazonaws.com/uploads/blog_post/cover_picture/62a05bd2-2f0e-4bac-8f8b-63947f4df16f/desktop_8077896a-c988-4ed3-bf85-ff7ed48ff77d.png"
               },
               "tablet": {
                  "url": "https://foodetective-staging-backend-data.s3.amazonaws.com/uploads/blog_post/cover_picture/62a05bd2-2f0e-4bac-8f8b-63947f4df16f/tablet_8077896a-c988-4ed3-bf85-ff7ed48ff77d.png"
               }
            },
            "category": "blogpost",
            "author-name": "Temple Howell",
            "created-at": "2022-03-03T14:05:41.073Z",
            "detected-language": "en",
            "slug": "asdf",
            "language-settings":{
               "en": true
               "es": false
               "fr": false
               "ge": false
               "it": false
               "de": false
            }
         },
         "relationships":{
            "user":{
               "links":{
                  "self": "/blog-posts/62a05bd2-2f0e-4bac-8f8b-63947f4df16f/relationships/user",
                  "related": "/blog-posts/62a05bd2-2f0e-4bac-8f8b-63947f4df16f/user"
               }
            },
            "chapters":{
               "links":{
                  "self": "/blog-posts/62a05bd2-2f0e-4bac-8f8b-63947f4df16f/relationships/chapters",
                  "related": "/blog-posts/62a05bd2-2f0e-4bac-8f8b-63947f4df16f/chapters"
               }
            }
         }
      },
   ],
   "meta":{
      "total-count":1,
      "total-pages":1
   }
  ```

{% /table %}

- - -

### GET /api/v1/blog_posts/{id}
{% table %}
*  Parameters {% align="left" %}
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
* Example {% align="left" %}
  ```bash
      {
          const res = await fetch(`${BASE_URL}/api/v1/blog_posts/{id}`, {
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
    "id": "62a05bd2-2f0e-4bac-8f8b-63947f4df16f",
    "type": "blog-posts",
    "links": {
      "self": "/blog-posts/62a05bd2-2f0e-4bac-8f8b-63947f4df16f"
    },
    "attributes": {
      "alt-text": null,
      "name": "asdf",
      "headline": "asdf",
      "summary": "summary",
      "read-duration": 3,
      "date": "2022-03-01",
      "cover-picture": {
        "url": "https://foodetective-staging-backend-data.s3.amazonaws.com/uploads/blog_post/cover_picture/62a05bd2-2f0e-4bac-8f8b-63947f4df16f/8077896a-c988-4ed3-bf85-ff7ed48ff77d.png",
        "desktop": {
          "url": "https://foodetective-staging-backend-data.s3.amazonaws.com/uploads/blog_post/cover_picture/62a05bd2-2f0e-4bac-8f8b-63947f4df16f/desktop_8077896a-c988-4ed3-bf85-ff7ed48ff77d.png"
        },
        "tablet": {
          "url": "https://foodetective-staging-backend-data.s3.amazonaws.com/uploads/blog_post/cover_picture/62a05bd2-2f0e-4bac-8f8b-63947f4df16f/tablet_8077896a-c988-4ed3-bf85-ff7ed48ff77d.png"
        }
      },
      "category": "blogpost",
      "author-name": "Temple Howell",
      "created-at": "2022-03-03T14:05:41.073Z",
      "detected-language": "en",
      "slug": "asdf",
      "language-settings": {
        "en": true,
        "es": false,
        "fr": false,
        "ge": false,
        "it": false,
        "de": false
      }
    },
    "relationships": {
      "user": {
        "links": {
          "self": "/blog-posts/62a05bd2-2f0e-4bac-8f8b-63947f4df16f/relationships/user",
          "related": "/blog-posts/62a05bd2-2f0e-4bac-8f8b-63947f4df16f/user"
        }
      },
      "chapters": {
        "links": {
          "self": "/blog-posts/62a05bd2-2f0e-4bac-8f8b-63947f4df16f/relationships/chapters",
          "related": "/blog-posts/62a05bd2-2f0e-4bac-8f8b-63947f4df16f/chapters"
        }
      }
    }
  }
  ```

{% /table %}