---
title: Cities
---
{% section %}
{% layoutTwoCol %}

{% methodCopy %}
{% methodInfo %}
  # {% $markdoc.frontmatter.title %}
  This will return {% $markdoc.frontmatter.title %}.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="sort" type="Optional" /%}
  {% listitem title="page" type="Optional" /%}
  {% listitem title="per_page" type="Optional" /%}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "GET", path: "/v1/cities"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/cities`, {
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
          "id": "4b166dbe-d99d-5091-abdd-95b83330ed3a",
          "type": "cities",
          "links": {
            "self": "/cities/4b166dbe-d99d-5091-abdd-95b83330ed3a"
          },
          "attributes": {
            "businesses-count": 1,
            "geolocation-lat": null,
            "geolocation-lng": null,
            "name": "2"
          }
        },
      ],
      "meta": {
        "total-count": 18,
        "total-pages": 2
      }
    }
  ```
{% /codeBlock %}  

{% /layoutTwoCol %}
{% /section %}