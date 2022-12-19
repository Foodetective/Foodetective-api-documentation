---
title: Preferred Partners
---
{% section %}
{% layoutTwoCol %}

{% methodCopy %}
{% methodInfo %}
  # Create Preferred Partner
  Create a preferred partner for business.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="data" validation="formData, object" type="Required" %}
  Form Data needed when creating a new Preferred Partner for business.
  {% list isChild=true %}
  {% listitem title="type" validation="string" type="Required" %}
  Provide Preferred Partner `type`. Current selection is only **partners**.
  {% /listitem %}

  {% listitem title="relationships" validation="formData, object" type="Required" %}
  Relationships object with **`business`** object.
  {% list isChild=true %}
  {% listitem title="business" validation="formData, object" type="Required" %}
  Add a Business relationships link.
  {% list isChild=true %}
  {% listitem title="id" validation="string" type="Required" %}
  Related Business `id`.
  {% /listitem %}
  {% /list %}
  {% /listitem %}

  {% listitem title="partner" validation="formData, object" type="Required" %}
  Add a Partner relationships link.
  {% list isChild=true %}
  {% listitem title="id" validation="string" type="Required" %}
  Related Partner `id`.
  {% /listitem %}
  {% listitem title="type" validation="string" type="Required" %}
  Partner `type`; **partner**.
  {% /listitem %}
  {% /list %}
  {% /listitem %}

  {% /list %}
  {% /listitem %}

  {% /list %}
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "POST", path: "/api/v1/preferred_partners"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/preferred_partners`, {
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

- - -

{% section %}
{% layoutTwoCol %}

{% methodCopy %}
{% methodInfo %}
  # Delete Preferred Partner
  Delete a preferred partner for business.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="data" validation="formData, object" type="Required" %}
  Form Data needed when deleting a new Preferred Partner for business.
  {% list isChild=true %}
  {% listitem title="type" validation="string" type="Required" %}
  Provide Preferred Partner `type`. Current selection is only **partners**.
  {% /listitem %}

  {% listitem title="relationships" validation="formData, object" type="Required" %}
  Relationships object with **`business`** object.
  {% list isChild=true %}
  {% listitem title="business" validation="formData, object" type="Required" %}
  Add a Business relationships link.
  {% list isChild=true %}
  {% listitem title="id" validation="string" type="Required" %}
  Related Business `id`.
  {% /listitem %}
  {% /list %}
  {% /listitem %}

  {% listitem title="partner" validation="formData, object" type="Required" %}
  Add a Partner relationships link.
  {% list isChild=true %}
  {% listitem title="id" validation="string" type="Required" %}
  Related Partner `id`.
  {% /listitem %}
  {% listitem title="type" validation="string" type="Required" %}
  Partner `type`; **partner**.
  {% /listitem %}
  {% /list %}
  {% /listitem %}

  {% /list %}
  {% /listitem %}

  {% /list %}
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "DELETE", path: "/api/v1/preferred_partners"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/preferred_partners`, {
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
{% codeBlock title="RESPONSE" collapsable=true %}
  ```json
  ```
{% /codeBlock %}

{% /layoutTwoCol %}
{% /section %}
