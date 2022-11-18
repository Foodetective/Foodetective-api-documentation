---
title: Business Connect Stripe
---
{% section %}
{% layoutTwoCol %}

{% methodCopy %}
{% methodInfo %}
  # {% $markdoc.frontmatter.title %}
  Connect Stripe Account to this Business.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Connect Stripe Account to this Business by specific business `id`. You can retrieve this `id` from ...
  {% /listitem %}
  {% listitem title="data[id]" validation="formData string" type="Required" %}
  Provide Business `id`.
  {% /listitem %}
  {% listitem title="data[type]" validation="formData string" %}
  Provide Business `type`. Current selection is only **businesses**.
  {% /listitem %}
  {% listitem title="data[attributes][authorization_code]" validation="formData string" %}
  Authorization Code retrieved from Stripe.
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "PATCH", path: "/api/v1/businesses/{id}/connect_stripe"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/businesses/${id}/connect_stripe`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: '1231',
          data: {
            id: '1231 ',
            type: 'businesses'
          },
          attributes: {
            authorization_code: 'strip-authorization-code'
          }
        })});
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