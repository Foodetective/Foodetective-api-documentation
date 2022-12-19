---
title: Business Direct Service Click
---
{% section %}
{% layoutTwoCol %}

{% methodCopy %}
{% methodInfo %}
  # {% $markdoc.frontmatter.title %}
  Creates a click event for business direct service.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Creates a click event for business direct service by specific business `id`. You can retrieve this `id` from ...
  {% /listitem %}
  {% listitem title="data[type]" validation="formData string" %}
  Provide direct service `type`. Current selection is only `direct_service_click_events`.
  {% /listitem %}
  {% listitem title="data[relationships][business][data][type]" validation="formData string" %}
  Provide Business `type`. Current selection is only **businesses**.
  {% /listitem %}
  {% listitem title="data[relationships][business][data][id]" validation="formData string" %}
  Related Business `id`.
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "POST", path: "/api/v1/businesses/{id}/direct_service_click"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/businesses/${id}/direct_service_click`, {
        method: 'POST',
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
