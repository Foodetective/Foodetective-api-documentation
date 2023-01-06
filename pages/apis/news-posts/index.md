---
title: News Posts
---
{% section %}
{% layoutTwoCol %}

{% methodCopy %}
{% methodInfo %}
  # {% $markdoc.frontmatter.title %}
  Return all News Posts.
{% /methodInfo %}
{% list title="Parameters" %}
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

{% codeBlock request={method: "GET", path: "/api/v1/news_posts"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
  {
    const res = await fetch(`${BASE_URL}/api/v1/news_posts`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)});

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
        "id": "39e52f2d-b866-41ee-9591-4847e5f78afa",
        "type": "news-posts",
        "links": {
          "self": "/news-posts/39e52f2d-b866-41ee-9591-4847e5f78afa"
        },
        "attributes": {
          "url": "www.google.com",
          "headline": "We're on 🔥 !\r\n\r\n\r\nThe second line of text",
          "date": "2022-02-09"
        }
      },
      {
        "id": "ceac10cd-13de-40d1-a48c-d883624a1f46",
        "type": "news-posts",
        "links": {
          "self": "/news-posts/ceac10cd-13de-40d1-a48c-d883624a1f46"
        },
        "attributes": {
          "url": "https://business.staging.foodtekk.com/",
          "headline": "Some Headline for the NEWS POST :)",
          "date": "2022-02-22"
        }
      },
      {
        "id": "b0b18ae5-47f7-4d74-98f0-f5d237fe9555",
        "type": "news-posts",
        "links": {
          "self": "/news-posts/b0b18ae5-47f7-4d74-98f0-f5d237fe9555"
        },
        "attributes": {
          "url": "https://www.google.com",
          "headline": "This is 🎉",
          "date": "2022-02-02"
        }
      }
    ],
    "meta": {
      "total-count": 13,
      "total-pages": 5
    }
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
  # News Post by id
  Return a News Post.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Return a News Post by specific `id`.
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "GET", path: "/api/v1/news_posts/{id}"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
  {
    const res = await fetch(`${BASE_URL}/api/v1/news_posts/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)});

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
    "data": {
      "id": "39e52f2d-b866-41ee-9591-4847e5f78afa",
      "type": "news-posts",
      "links": {
        "self": "/news-posts/39e52f2d-b866-41ee-9591-4847e5f78afa"
      },
      "attributes": {
        "url": "www.google.com",
        "headline": "We're on 🔥 !\r\n\r\n\r\nThe second line of text",
        "date": "2022-02-09"
      }
    }
  }
  ```
{% /codeBlock %}

{% /layoutTwoCol %}
{% /section %}
