---
title: Addresses
---
{% section %}
{% layoutTwoCol %}

{% methodCopy %}
{% methodInfo %}
  # Create Address
  Create a Address.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="data[type]" validation="formData string" type="Required" %}
  Provide Business `type`. Current selection is only **addresses**.
  {% /listitem %}
  {% listitem title="data[attributes][name]" validation="formData string" type="Required" %}
  {% /listitem %}
  {% listitem title="data[attributes][city]" validation="formData string" type="Required" %}
  {% /listitem %}
  {% listitem title="data[attributes][country_code]" validation="formData string" type="Required" %}
  {% /listitem %}
  {% listitem title="data[attributes][post_code]" validation="formData string" type="Required" %}
  {% /listitem %}
  {% listitem title="data[attributes][street]" validation="formData string" type="Required" %}
  {% /listitem %}
  {% listitem title="data[attributes][street_number]" validation="formData string" type="Required" %}
  {% /listitem %}
  {% listitem title="data[attributes][address_line]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][notes]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][region_code]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[relationships][order][data][type]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[relationships][order][data][id]" validation="formData string" %}
  Related order `id`.
  {% /listitem %}
  {% listitem title="data[relationships][user][data][type]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[relationships][user][data][id]" validation="formData string" %}
  Related user `id`.
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "POST", path: "/api/v1/addresses"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/addresses`, {
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
{% codeBlock title="RESPONSE" %}
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
  # Update Address
  Update a Address
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Update a Address by specific Address `id`. You can retrieve this `id` from ...
  {% /listitem %}
  {% listitem title="data[id]" validation="formData string" type="Required" %}
  Provide address `id`.
  {% /listitem %}
  {% listitem title="data[type]" validation="formData string" %}
  Provide address `type`. Current selection is only **addresses**.
  {% /listitem %}
  {% listitem title="data[attributes][address_line]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][city]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][country_code]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][name]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][notes]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][post_code]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][region_code]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][street]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][street_number]" validation="formData string" %}
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "PATCH", path: "/api/v1/addresses/{id}"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/addresses/${id}`, {
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
{% codeBlock title="RESPONSE" %}
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
  # Delete Business
  Delete a Address.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Delete a Address by specific Address `id`. You can retrieve this `id` from ...
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "DELETE", path: "/api/v1/businesses/{id}"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/businesses/${id}`, {
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
{% codeBlock title="RESPONSE" %}
  ```json
  ```
{% /codeBlock %}

{% /layoutTwoCol %}
{% /section %}