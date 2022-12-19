---
title: External Service Links
---
{% section %}
{% layoutTwoCol %}

{% methodCopy %}
{% methodInfo %}
  # Create External Service Link
  Create an external service link.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="data" validation="formData, object" type="Required" %}
  Form Data needed when creating an external service link.
  {% list isChild=true %}
  {% listitem title="type" validation="string" type="Required" %}
  Provide external service link `type`. Current selection is only **external_service_links**.
  {% /listitem %}

  {% listitem title="attributes" validation="formData, object" type="Required" %}
  Attributes object with a few **required** fields.
  {% list isChild=true %}
  {% listitem title="service_url" validation="string" type="Required" %}
  URL for external service
  {% /listitem %}
  {% /list %}
  {% /listitem %}

  {% listitem title="relationships" validation="formData, object" type="Required" %}
  Relationships object with **`business`** oor **`external_service`** objects.
  {% list isChild=true %}
  {% listitem title="business" validation="formData, object" type="Required" %}
  Add a relationships link between deliveries and related Business.
  {% list isChild=true %}
  {% listitem title="id" validation="string" type="Required" %}
  Related Business `id`.
  {% /listitem %}
  {% listitem title="type" validation="string" %}
  Business `type`; **Business**.
  {% /listitem %}
  {% /list %}
  {% /listitem %}

  {% listitem title="external_service" validation="formData, object" type="Required" %}
  Add a relationships link.
  {% list isChild=true %}
  {% listitem title="id" validation="string" type="Required" %}
  Related External Service `id`.
  {% /listitem %}
  {% listitem title="type" validation="string" %}
  External Service `type`; **external_service**.
  {% /listitem %}
  {% /list %}
  {% /listitem %}
  {% /list %}
  {% /listitem %}

  {% /list %}
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "POST", path: "/api/v1/external_service_links"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/external_service_links`, {
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
  # Update External Service Link
  Update an external service link.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Update a External Service Link by specific link `id`.
  {% /listitem %}

  {% listitem title="data" validation="formData, object" type="Required" %}
  Form Data needed when updating a External Service Link.
  {% list isChild=true %}
  {% listitem title="id" validation="string" type="Required" %}
  Provide External Service Link `id`.
  {% /listitem %}
  {% listitem title="type" validation="string" type="Required" %}
  Provide External Service Link `type`. Current selection is only **external_service_links**.
  {% /listitem %}

  {% listitem title="attributes" validation="formData, object" %}
  Attributes object.
  {% list isChild=true %}
  {% listitem title="service_url" validation="string" %}
  URL for external service
  {% /listitem %}
  {% /list %}
  {% /listitem %}

  {% /list %}
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "PATCH", path: "/api/v1/external_service_links/{id}"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/external_service_links/${id}`, {
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

- - -

{% section %}
{% layoutTwoCol %}

{% methodCopy %}
{% methodInfo %}
  # Delete External Service Link
  Delete an external service link.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Delete a External Service Link by specific link `id`.
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "DELETE", path: "/api/v1/external_service_links/{id}"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/external_service_links/${id}`, {
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
