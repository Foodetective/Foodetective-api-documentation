---
title: Business Claim as Owner
---
{% section %}
{% layoutTwoCol %}

{% methodCopy %}
{% methodInfo %}
  # {% $markdoc.frontmatter.title %}
  Sends claim email notification to the business email address.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Sends claim email notification to the business email address by specific business `id`. You can retrieve this `id` from ...
  {% /listitem %}
  {% listitem title="locale" validation="query string" %}
  Current locale of Foodetective app. Locale options: **ar**, **de**, **en**, **es**, **fr**, **it**, **ms**, **pt**, **ru**, **zh-CN**
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "GET", path: "/api/v1/businesses/{id}/claim_as_owner"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/businesses/${id}/claim_as_owner`, {
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
  ```
{% /codeBlock %}

{% /layoutTwoCol %}
{% /section %}
