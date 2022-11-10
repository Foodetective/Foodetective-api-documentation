---
title: Bookings
---
{% section %}
{% layoutTwoCol %}

{% methodCopy %}
{% methodInfo %}
  # {% $markdoc.frontmatter.title %}
  This will return {% $markdoc.frontmatter.title %} by `id`.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="include" type="Optional" /%}
  {% listitem title="id" type="Required" /%}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "GET", path: "/v1/bookings/{id}"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/bookings/{id}`, {
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
      "data": {
        "id": "8f9399eb-e629-4756-a929-83a4fab16d3a",
        "type": "bookings",
        "links": {
          "self": "/bookings/8f9399eb-e629-4756-a929-83a4fab16d3a"
        },
        "attributes": {
          "seats-taken": 2
        },
        "relationships": {
          "reservation": {
            "links": {
              "self": "/bookings/8f9399eb-e629-4756-a929-83a4fab16d3a/relationships/reservation",
              "related": "/bookings/8f9399eb-e629-4756-a929-83a4fab16d3a/reservation"
            }
          },
          "table": {
            "links": {
              "self": "/bookings/8f9399eb-e629-4756-a929-83a4fab16d3a/relationships/table",
              "related": "/bookings/8f9399eb-e629-4756-a929-83a4fab16d3a/table"
            }
          }
        }
      }
    }
  ```
{% /codeBlock %}  

{% /layoutTwoCol %}
{% /section %}