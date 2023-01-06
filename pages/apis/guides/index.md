---
title: Guides
---
{% section %}
{% layoutTwoCol %}

{% methodCopy %}
{% methodInfo %}
  # {% $markdoc.frontmatter.title %}
  Return all Guides.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="include" validation="query string" %}
  Include associations (delimited with comma). Available associations: user.
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

{% codeBlock request={method: "GET", path: "/api/v1/guides"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
  {
    const res = await fetch(`${BASE_URL}/api/v1/guides`, {
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
        "id": "a8ec2bd7-81e4-4930-b2de-742df58bff32",
        "type": "guides",
        "links": {
          "self": "/guides/a8ec2bd7-81e4-4930-b2de-742df58bff32"
        },
        "attributes": {
          "author-name": "Roger Zboncak",
          "created-at": "2018-12-21T11:25:22.644Z",
          "description": "Best food ever. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia. Test.",
          "detected-language": "la",
          "main-photo": {
            "url": "https://foodetective-staging-backend-data.s3.amazonaws.com/uploads/guide/main_photo/a8ec2bd7-81e4-4930-b2de-742df58bff32/Berlin2000.jpg",
            "desktop": {
              "url": "https://foodetective-staging-backend-data.s3.amazonaws.com/uploads/guide/main_photo/a8ec2bd7-81e4-4930-b2de-742df58bff32/desktop_Berlin2000.jpg"
            },
            "tablet": {
              "url": "https://foodetective-staging-backend-data.s3.amazonaws.com/uploads/guide/main_photo/a8ec2bd7-81e4-4930-b2de-742df58bff32/tablet_Berlin2000.jpg"
            }
          },
          "name": "Food in Białystok",
          "slug": "food-in-bialystok"
        },
        "relationships": {
          "user": {
            "links": {
              "self": "/guides/a8ec2bd7-81e4-4930-b2de-742df58bff32/relationships/user",
              "related": "/guides/a8ec2bd7-81e4-4930-b2de-742df58bff32/user"
            }
          }
        }
      }
    ],
    "meta": {
      "total-count": 21,
      "total-pages": 11
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
  # Guide by id
  Return a Guide.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Return a Group by specific `id`.
  {% /listitem %}
  {% listitem title="include" validation="query string" %}
  Include associations (delimited with comma). Available associations: user.
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "GET", path: "/api/v1/guides/{id}"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
  {
    const res = await fetch(`${BASE_URL}/api/v1/guides/${id}`, {
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
      "id": "a8ec2bd7-81e4-4930-b2de-742df58bff32",
      "type": "guides",
      "links": {
        "self": "/guides/a8ec2bd7-81e4-4930-b2de-742df58bff32"
      },
      "attributes": {
        "author-name": "Roger Zboncak",
        "created-at": "2018-12-21T11:25:22.644Z",
        "description": "Best food ever. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia. Test.",
        "detected-language": "la",
        "main-photo": {
          "url": "https://foodetective-staging-backend-data.s3.amazonaws.com/uploads/guide/main_photo/a8ec2bd7-81e4-4930-b2de-742df58bff32/Berlin2000.jpg",
          "desktop": {
            "url": "https://foodetective-staging-backend-data.s3.amazonaws.com/uploads/guide/main_photo/a8ec2bd7-81e4-4930-b2de-742df58bff32/desktop_Berlin2000.jpg"
          },
          "tablet": {
            "url": "https://foodetective-staging-backend-data.s3.amazonaws.com/uploads/guide/main_photo/a8ec2bd7-81e4-4930-b2de-742df58bff32/tablet_Berlin2000.jpg"
          }
        },
        "name": "Food in Białystok",
        "slug": "food-in-bialystok"
      },
      "relationships": {
        "user": {
          "links": {
            "self": "/guides/a8ec2bd7-81e4-4930-b2de-742df58bff32/relationships/user",
            "related": "/guides/a8ec2bd7-81e4-4930-b2de-742df58bff32/user"
          }
        }
      }
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
  # Guide Points
  Return points for specific guide.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Return a Group by specific `id`.
  {% /listitem %}
  {% listitem title="include" validation="query string" %}
  Include associations (delimited with comma). Available associations: pictures, business.

  **Example:** `business,pictures`
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

{% codeBlock request={method: "GET", path: "/api/v1/guides/{id}/points"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
  {
    const res = await fetch(`${BASE_URL}/api/v1/guides/${id}/points`, {
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
        "id": "0c03c88e-4a57-4283-bfe8-3669caec624c",
        "type": "points",
        "links": {
          "self": "/points/0c03c88e-4a57-4283-bfe8-3669caec624c"
        },
        "attributes": {
          "description": "very good restaurant",
          "detected-language": null
        },
        "relationships": {
          "pictures": {
            "links": {
              "self": "/points/0c03c88e-4a57-4283-bfe8-3669caec624c/relationships/pictures",
              "related": "/points/0c03c88e-4a57-4283-bfe8-3669caec624c/pictures"
            }
          },
          "business": {
            "links": {
              "self": "/points/0c03c88e-4a57-4283-bfe8-3669caec624c/relationships/business",
              "related": "/points/0c03c88e-4a57-4283-bfe8-3669caec624c/business"
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
