---
title: Banners
---
{% section %}
{% layoutTwoCol %}

{% methodCopy %}
{% methodInfo %}
  # {% $markdoc.frontmatter.title %}
  Return a Banner.

  If any erros occur you can access the [errors guide](/errors).
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="target" validation="path string" type="Required" %}
  Provided the `target` associated with the banners. Try using the following path parameter **newsroom**.
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "GET", path: "/api/v1/banners/${target}"} %}
 {% tabs %}
  {% tab label="js"%}
  ```js
  {
    const res = await fetch(`${BASE_URL}/api/v1/banners/${target}`, {
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
    "data": {
      "id": "bd0ce9e1-74ba-4bf4-8f1c-8acee7b69b49",
      "type": "banners",
      "links": { "self": "/banners/bd0ce9e1-74ba-4bf4-8f1c-8acee7b69b49" },
      "attributes": {
        "target": "newsroom",
        "picture": {
          "url": "https://foodetective-staging-backend-data.s3.amazonaws.com/uploads/banner/picture/bd0ce9e1-74ba-4bf4-8f1c-8acee7b69b49/59a3926a-4b6c-4a5a-b046-5dae06327465.jpeg",
          "desktop": {
            "url": "https://foodetective-staging-backend-data.s3.amazonaws.com/uploads/banner/picture/bd0ce9e1-74ba-4bf4-8f1c-8acee7b69b49/desktop_59a3926a-4b6c-4a5a-b046-5dae06327465.jpeg"
          },
          "tablet": {
            "url": "https://foodetective-staging-backend-data.s3.amazonaws.com/uploads/banner/picture/bd0ce9e1-74ba-4bf4-8f1c-8acee7b69b49/tablet_59a3926a-4b6c-4a5a-b046-5dae06327465.jpeg"
          }
        }
      }
    }
  }
  ```
{% /codeBlock %}

{% /layoutTwoCol %}
{% /section %}
