---
title: Categories
---
{% section %}
{% layoutTwoCol %}

{% methodCopy %}
{% methodInfo %}
  # {% $markdoc.frontmatter.title %}
  This will return {% $markdoc.frontmatter.title %}.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="include" type="Optional" /%}
  {% listitem title="language" type="Optional" /%}
  {% listitem title="page" type="Optional" /%}
  {% listitem title="per_page" type="Optional" /%}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "GET", path: "/v1/categories"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${Base_url}/api/v1/categories`, {
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
          "id": "d5f107e9-8134-4cd3-822c-50dfea412982",
          "type": "categories",
          "links": {
            "self": "/categories/d5f107e9-8134-4cd3-822c-50dfea412982"
          },
          "attributes": {
            "name": "New added category TEST"
          },
          "relationships": {
            "dishes": {
              "links": {
                "self": "/categories/d5f107e9-8134-4cd3-822c-50dfea412982/relationships/dishes",
                "related": "/categories/d5f107e9-8134-4cd3-822c-50dfea412982/dishes"
              }
            }
          }
        },
      ],
      "meta": {
        "total-count": 48,
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
  # Categories by id
  This will return {% $markdoc.frontmatter.title %} by category `id`.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="include" type="Optional" /%}
  {% listitem title="language" type="Optional" /%}
  {% listitem title="id" type="Required" /%}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "GET", path: "/v1/categories/{id}"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${Base_url}/api/v1/categories/{id}`, {
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
      "url": "/api/v1/categories/{id}",
      "method": "GET",
      "data": {
        "id": "d5f107e9-8134-4cd3-822c-50dfea412982",
        "type": "categories",
        "links": {
          "self": "/categories/d5f107e9-8134-4cd3-822c-50dfea412982"
        },
        "attributes": {
          "name": "New added category TEST"
        },
        "relationships": {
          "dishes": {
            "links": {
              "self": "/categories/d5f107e9-8134-4cd3-822c-50dfea412982/relationships/dishes",
              "related": "/categories/d5f107e9-8134-4cd3-822c-50dfea412982/dishes"
            }
          }
        }
      }
    }
  ```
{% /codeBlock %}  

{% /layoutTwoCol %}
{% /section %}