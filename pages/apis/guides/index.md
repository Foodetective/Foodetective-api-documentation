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
  ```
{% /codeBlock %}

{% /layoutTwoCol %}
{% /section %}
