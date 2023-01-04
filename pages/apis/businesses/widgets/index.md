---
title: Business Widgets
---
{% section %}

{% layoutTwoCol %}
{% methodCopy %}
{% methodInfo %}
  # {% $markdoc.frontmatter.title %}
  Return all widgets for specific business.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Return all widgets by specific business `id`. You can retrieve this `id` from ...
  {% /listitem %}
  {% listitem title="include" validation="query string" %}
  Include associations (*delimited with comma*). Available associations: business.
  {% /listitem %}
  {% listitem title="page" validation="query number" %}
  Page offset to fetch.
  {% /listitem %}
  {% listitem title="per_page" validation="query number" %}
  Number of results to return per page.
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "GET", path: "/api/v1/businesses/{id}/widgets"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
  {
    const res = await fetch(`${BASE_URL}/api/v1/businesses/${id}/widgets`, {
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
