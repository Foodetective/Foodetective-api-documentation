---
title: Notification
---
{% section %}
{% layoutTwoCol %}

{% methodCopy %}
{% methodInfo %}
  # {% $markdoc.frontmatter.title %}
  Return a notification.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Return a Notification by specific `id`.
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "GET", path: "/api/v1/notifications/{id}"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/notifications/${id}`, {
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
  # Notification read
  Mark a notification as read.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Mark a notification as read by specific `id`.
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "PATCH", path: "/api/v1/notifications/{id}/mark_as_read"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/notifications/${id}/mark_as_read`, {
        method: 'PATCH',
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
