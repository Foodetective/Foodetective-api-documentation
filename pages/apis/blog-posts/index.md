---
title: Blog Posts
---
{% section %}
## {% $markdoc.frontmatter.title %}

{% layoutTwoCol %}

{% box %}
  Parameters
  {% listitem title="include" type="Optional" /%}
  {% listitem title="sort" type="Optional" /%}
  {% listitem title="lang" type="Optional" /%}
  {% listitem title="page" type="Optional" /%}
  {% listitem title="per_page" type="Optional" /%}
{% /box %}

{% codeBlock request={method: "GET", path: "/v1/blog_posts"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/blog_posts`, {
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
    import stripe
    charge = stripe.Charge.retrieve(
      "ch_3M1SVI2eZvKYlo2C07N4spt3",
      api_key="sk_test_4eC39HqLyjWDarjtT1zdp7dc"
    )
    charge.save() # Uses the same API Key.
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
{% /codeBlock %}
{% /layoutTwoCol %}

{% /section %}
- - -

{% section %}
## Blog Post by id

{% layoutTwoCol %}

{% box %}
Parameters
{% listitem title="include" type="Optional" /%}
{% listitem title="language" type="Optional" /%}
{% listitem title="id" type="Required" /%}
{% /box %}

{% codeBlock request={method: "GET", path: "/v1/blog_posts/{id}"} %}
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
{% /codeBlock %}
{% codeBlock title="RESPONSE" %}
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
{% /codeBlock %}

{% /layoutTwoCol %}

{% /section %}