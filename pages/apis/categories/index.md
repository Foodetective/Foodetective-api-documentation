---
title: Categories
---
{% section %}
{% layoutTwoCol %}

{% methodCopy %}
{% methodInfo %}
  # {% $markdoc.frontmatter.title %}
  Return all Categories.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="include" validation="query string" %}
  Include associations (delimited with comma). Available associations: dishes
  {% /listitem %}
  {% listitem title="language" validation="query string" %}
  Return results of Business by language **ISO 639‑1** code.
  {% /listitem %}
  {% listitem title="page" validation="query integer" %}
  Page offset to fetch.
  {% /listitem %}
  {% listitem title="per_page" validation="query integer" %}
  Number of results to return per page.
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "GET", path: "/api/v1/categories"} %}
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
{% codeBlock title="RESPONSE" collapsable=true %}
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
  Return a Category by category `id`.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Return a Category by specific category `id`. You can retrieve this `id` from [Categories](#categories)
  {% /listitem %}
  {% listitem title="include" validation="query string" %}
  Include associations (delimited with comma). Available associations: dishes
  {% /listitem %}
  {% listitem title="language" validation="query string" %}
  Return results of Business by language **ISO 639‑1** code.
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "GET", path: "/api/v1/categories/{id}"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${Base_url}/api/v1/categories/${id}`, {
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
