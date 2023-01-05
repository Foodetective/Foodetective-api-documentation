---
title: Partoo Business intergrations
---
{% section %}
{% layoutTwoCol %}

{% methodCopy %}
{% methodInfo %}
  # {% $markdoc.frontmatter.title %}
  Connect given business to Partoo.

  If any erros occur you can access the [errors guide](/errors).
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Connect specific business to Partoo with provided business `id`.
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "POST", path: "/api/v1/businesses/{id}/integrations/partoo"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
  {
    const res = await fetch(`${BASE_URL}/api/v1/businesses/${id}/integrations/partoo`, {
      method: 'POST',
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

- - -

{% section %}
{% layoutTwoCol %}

{% methodCopy %}
{% methodInfo %}
  # Update Business on Partoo
  Update given business on Partoo.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Update specific business to Partoo with provided business `id`.
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "POST", path: "/api/v1/businesses/{id}/integrations/partoo"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
  {
    const res = await fetch(`${BASE_URL}/api/v1/businesses/${id}/integrations/partoo`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: null});

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
  # Disconnect Business on Partoo
  Disconnect the business from Partoo.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Disconnect specific business from Partoo with provided business `id`.
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "DELETE", path: "/api/v1/businesses/{id}/integrations/partoo"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
  {
    const res = await fetch(`${BASE_URL}/api/v1/businesses/${id}/integrations/partoo`, {
      method: 'DELETE',
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

{% /layoutTwoCol %}
{% /section %}
