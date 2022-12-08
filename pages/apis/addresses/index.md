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
  {% listitem title="data" validation="formData, object" type="Required" %}
  Form Data needed when creating a new address.
  {% list isChild=true %}
  {% listitem title="type" validation="string" type="Required" %}
  Provide Address `type`. Current selection is only **address**.
  {% /listitem %}

  {% listitem title="attributes" validation="formData, object" type="Required" %}
  Attributes object with a few **required** fields.
  {% list isChild=true %}
  {% listitem title="name" validation="string" type="Required" %}
  {% /listitem %}
  {% listitem title="city" validation="string" type="Required" %}
  {% /listitem %}
  {% listitem title="country_code" validation="string" type="Required" %}
  {% /listitem %}
  {% listitem title="post_code" validation="string" type="Required" %}
  {% /listitem %}
  {% listitem title="street" validation="string" type="Required" %}
  {% /listitem %}
  {% listitem title="street_number" validation="string" type="Required" %}
  {% /listitem %}
  {% listitem title="address_line" validation="string" %}
  {% /listitem %}
  {% listitem title="notes" validation="string" %}
  {% /listitem %}
  {% listitem title="region_code" validation="string" %}
  {% /listitem %}
  {% /list %}
  {% /listitem %}

  {% listitem title="relationships" validation="formData, object" %}
  Relationships object with **`order`** and **`user`** objects.
  {% list isChild=true %}
  {% listitem title="order" validation="formData, object" %}
  Add a relationships link between address and related Order.
  {% list isChild=true %}
  {% listitem title="type" validation="string" %}
  {% /listitem %}
  {% listitem title="id" validation="string" %}
  Related order `id`.
  {% /listitem %}
  {% /list %}
  {% /listitem %}
  {% listitem title="user" validation="formData, object" %}
  Add a relationships link between address and related User.
  {% list isChild=true %}
  {% listitem title="type" validation="string" %}
  {% /listitem %}
  {% listitem title="id" validation="string" %}
  Related User `id`.
  {% /listitem %}
  {% /list %}
  {% /listitem %}
  {% /list %}
  {% /listitem %}

  {% /list %}
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
  # Update Address
  Update a Address
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Update a Address by specific Address `id`. You can retrieve this `id` from ...
  {% /listitem %}

  {% listitem title="data" validation="formData, object" type="Required" %}
  Form Data needed when updating a new address.
  {% list isChild=true %}
  {% listitem title="id" validation="string" type="Required" %}
  Provide address `id`.
  {% /listitem %}
  {% listitem title="type" validation="string" type="Required" %}
  Provide address `type`. Current selection is only **addresses**.
  {% /listitem %}

  {% listitem title="attributes" validation="formData, object" type="Required" %}
  Attributes object with a few **required** fields.
  {% list isChild=true %}
  {% listitem title="address_line" validation="string" %}
  {% /listitem %}
  {% listitem title="city" validation="string" %}
  {% /listitem %}
  {% listitem title="country_code" validation="string" %}
  {% /listitem %}
  {% listitem title="name" validation="string" %}
  {% /listitem %}
  {% listitem title="notes" validation="string" %}
  {% /listitem %}
  {% listitem title="post_code" validation="string" %}
  {% /listitem %}
  {% listitem title="region_code" validation="string" %}
  {% /listitem %}
  {% listitem title="street" validation="string" %}
  {% /listitem %}
  {% listitem title="street_number" validation="string" %}
  {% /listitem %}
  {% /list %}
  {% /listitem %}

  {% /list %}
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
  # Delete Address
  Delete a Address.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Delete a Address by specific Address `id`. You can retrieve this `id` from ...
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "DELETE", path: "/api/v1/addresses/{id}"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/addresses/${id}`, {
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
