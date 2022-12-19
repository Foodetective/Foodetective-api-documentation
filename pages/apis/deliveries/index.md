---
title: Deliveries
---
{% section %}
{% layoutTwoCol %}

{% methodCopy %}
{% methodInfo %}
  # {% $markdoc.frontmatter.title %}
  Return a Delivery.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Return a Delivery by specific `id`.
  {% /listitem %}
  {% listitem title="include" validation="query string" %}
  Include associations (delimited with comma). Available associations: business
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "GET", path: "/api/v1/deliveries/{id}"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/deliveries/${id}`, {
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
  # Request Object
  The required Request Object used for **CRUD**. The only difference is with [Update Delivery](#create-delivery) you need to provide a Delivery `id`.
{% /methodInfo %}
{% /methodCopy %}

{% codeBlock title="REQUEST OBJECT" collapsable=true %}
  ```json
  {
    "data": {
      "type": "deliveries",
      "attributes": {
        "code": "",
        "price_cents": "",
        "free_from_cents": "",
      },
      "relationships": {
        "business": {
          "id": "62a05bd2-2f0e-4bac-8f8b-63947f4df16f",
          "type": "business"
        }
      }
    }
  }
  ```
{% /codeBlock %}

{% /layoutTwoCol %}
{% /section %}

- - -

{% section %}
{% layoutTwoCol %}

{% methodCopy %}
{% methodInfo %}
  # Create Delivery
  Create a Delivery.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="data" validation="formData, object" type="Required" %}
  Form Data needed when creating a new Delivery.
  {% list isChild=true %}
  {% listitem title="type" validation="string" type="Required" %}
  Provide Delivery `type`. Current selection is only **deliveries**.
  {% /listitem %}

  {% listitem title="attributes" validation="formData, object" type="Required" %}
  Attributes object.
  {% list isChild=true %}
  {% listitem title="code" validation="string" type="Required" %}
  Delivery region code
  {% /listitem %}
  {% listitem title="price_cents" validation="integer" type="Required" %}
  Price in cents (currency taken from the business)
  {% /listitem %}
  {% listitem title="free_from_cents" validation="integer" %}
  Delivery is free if order reached this amount
  {% /listitem %}
  {% /list %}
  {% /listitem %}

  {% listitem title="relationships" validation="formData, object" %}
  Relationships object with **`business`** object.
  {% list isChild=true %}
  {% listitem title="business" validation="formData, object" %}
  Add a Business relationships link.
  {% list isChild=true %}
  {% listitem title="id" validation="string" %}
  Related Business `id`.
  {% /listitem %}
  {% listitem title="type" validation="string" %}
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

{% codeBlock request={method: "POST", path: "/api/v1/deliveries"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/deliveries`, {
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
  # Update Delivery
  Update a Delivery
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Update a Delivery by specific `id`.
  {% /listitem %}

  {% listitem title="data" validation="formData, object" type="Required" %}
  Form Data needed when updating a Delivery.
  {% list isChild=true %}
  {% listitem title="id" validation="string" type="Required" %}
  Provide Delivery `id`.
  {% /listitem %}
  {% listitem title="type" validation="string" type="Required" %}
  Provide Delivery `type`. Current selection is only **deliveries**.
  {% /listitem %}

  {% listitem title="attributes" validation="formData, object" %}
  Attributes object.
  {% list isChild=true %}
  {% listitem title="code" validation="string" %}
  Delivery region code
  {% /listitem %}
  {% listitem title="free_from_cents" validation="integer" %}
  Delivery is free if order reached this amount
  {% /listitem %}
  {% listitem title="price_cents" validation="integer" %}
  Price in cents (currency taken from the business)
  {% /listitem %}
  {% /list %}
  {% /listitem %}

  {% /list %}
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "PATCH", path: "/api/v1/deliveries/{id}"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/deliveries/${id}`, {
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
  # Delete Delivery
  Delete a Delivery.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Delete a Delivery by specific `id`.
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "DELETE", path: "/api/v1/deliveries/{id}"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/deliveries/${id}`, {
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
