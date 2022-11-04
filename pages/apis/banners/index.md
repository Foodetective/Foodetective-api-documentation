---
title: Banners
---
{% section %}
## {% $markdoc.frontmatter.title %}

{% layoutTwoCol %}

{% box %}
Parameters
{% listitem title="target" type="Required" /%}
{% /box %}
{% box %}
{% codeExample title="Example" subTitle="GET ${BASE_URL}/api/v1/banners/${target}" %}
  ```bash
    {
      const res = await fetch(`${BASE_URL}/api/v1/banners/${target}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
          }});
      const data = await res.json();
    }
  ```
{% /codeExample %}
{% codeExample title="Response" %}
  ```bash
    {
      "data": {
        "id": "bd0ce9e1-74ba-4bf4-8f1c-8acee7b69b49",
        "type": "banners",
        "links": { "self": "/banners/bd0ce9e1-74ba-4bf4-8f1c-8acee7b69b49" },
        "attributes": {
          "target": "newsroom",
          "picture": {
            "url": "https://foodetective-staging-backend-data.s3.amazonaws.com/uploads/banner/picture/bd0ce9e1-74ba-4bf4-8f1c-8acee7b69b49/      59a3926a-4b6c-4a5a-b046-5dae06327465.jpeg",
            "desktop": {
              "url": "https://foodetective-staging-backend-data.s3.amazonaws.com/uploads/banner/picture/bd0ce9e1-74ba-4bf4-8f1c-8acee7b69b49/      desktop_59a3926a-4b6c-4a5a-b046-5dae06327465.jpeg"
            },
            "tablet": {
              "url": "https://foodetective-staging-backend-data.s3.amazonaws.com/uploads/banner/picture/bd0ce9e1-74ba-4bf4-8f1c-8acee7b69b49/      tablet_59a3926a-4b6c-4a5a-b046-5dae06327465.jpeg"
            }
          }
        }
      }
    }
  ```
{% /codeExample %}
{% /box %}
{% /layoutTwoCol %}

{% /section %}