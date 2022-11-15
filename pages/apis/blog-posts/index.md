---
title: Blog Posts
---
{% section %}

{% layoutTwoCol %}
{% methodCopy %}
{% methodInfo %}
  # {% $markdoc.frontmatter.title %}
  This will return all Blog Posts. You can do a custom search by providing a `id`. Example is provided at [Blog post by id](#blog-post-by-id). 
  
  If any erros occur you can access the [errors guide](/errors).
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="include" validation="query string" %}
  Include associations (*delimited with comma*). Available associations: user, chapters. 
  
  **Example:** `user,chapters`
  {% /listitem %}
  {% listitem title="sort" validation="query string" %}
  Sort ascending or descending order.
  {% /listitem %}
  {% listitem title="lang" validation="query string" %}
  Get blog post by a certain language.
  {% /listitem %}
  {% listitem title="page" validation="query number" %}
  Page offset to fetch.
  {% /listitem %}
  {% listitem title="per_page" validation="query number" %}
  Number of results to return per page.
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "GET", path: "/api/v1/blog_posts"} %}
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
{% layoutTwoCol %}

{% methodCopy %}
{% methodInfo %}
  # Blog Post by id
  This will return a {% $markdoc.frontmatter.title %} by provided `id`.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Returns a specific blog post by the provided `id`. You can retrieve this `id` from the response of any [blog post](#blog-posts).
  {% /listitem %}
  {% listitem title="include" validation="query string" %}
  Include associations (*delimited with comma*). Available associations: user, chapters.
  {% /listitem %}
  {% listitem title="language" validation="query string" %}
  Get blog post by a certain language.
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "GET", path: "/api/v1/blog_posts"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/blog_posts/${id}`, {
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
  }
  ```
{% /codeBlock %}

{% /layoutTwoCol %}
{% /section %}