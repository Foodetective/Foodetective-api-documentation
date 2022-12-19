---
title: Orkestro Partner Integrations
---
{% section %}
{% layoutTwoCol %}

{% methodCopy %}
{% methodInfo %}
  # Create Orkestro Partner Integration
  Create Orkestro partner integration with a business.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="data" validation="formData, object" type="Required" %}
  Form Data needed when creating a new Orkestro Partner Integrations.
  {% list isChild=true %}
  {% listitem title="type" validation="string" type="Required" %}
  Provide Partner Integrations `type`. Current selection is only **partner_integrations**.
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
  {% listitem title="type" validation="string" type="Required" %}
  Business `type`; **business**.
  {% /listitem %}
  {% /list %}
  {% /listitem %}

  {% /list %}
  {% /listitem %}

  {% /list %}
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "POST", path: "/api/v1/partner_integrations/orkestro/connect"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/partner_integrations/orkestro/connect`, {
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
  # Delete Orkestro Partner Integration
  Delete a Orkestro partner integration for a given business.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="data" validation="formData, object" type="Required" %}
  Form Data needed when deleteing a Orkestro Partner Integrations.
  {% list isChild=true %}
  {% listitem title="type" validation="string" type="Required" %}
  Provide Partner Integrations `type`. Current selection is only **partner_integrations**.
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
  {% listitem title="type" validation="string" type="Required" %}
  Business `type`; **business**.
  {% /listitem %}
  {% /list %}
  {% /listitem %}

  {% /list %}
  {% /listitem %}

  {% /list %}
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "DELETE", path: "/api/v1/partner_integrations/orkestro/disconnect"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/partner_integrations/orkestro/disconnect`, {
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
