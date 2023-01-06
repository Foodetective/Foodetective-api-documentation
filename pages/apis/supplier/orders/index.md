---
title: Supplier Orders
---
{% section %}
{% layoutTwoCol %}

{% methodCopy %}
{% methodInfo %}
  # {% $markdoc.frontmatter.title %}
  Sends email notification about order creation to the supplier email address.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Sends email to a specific `id`.
  {% /listitem %}
  {% listitem title="locale" validation="query string" %}
  Current locale of Foodetective app. Locale options: **ar**, **de**, **en**, **es**, **fr**, **it**, **ms**, **pt**, **ru**, **zh-CN**
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "GET", path: "/api/v1/supplier_orders/{id}/send_created_email"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
  {
    const res = await fetch(`${BASE_URL}/api/v1/supplier_orders/${id}/send_created_email`, {
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
  The required Request Object.
{% /methodInfo %}
{% /methodCopy %}

{% codeBlock title="REQUEST OBJECT" collapsable=true %}
  ```json
  {
    "data": {
      "type": "supplier_orders",
      "attributes": {
        "desired_delivery_date": "",
        "comment": ""
      },
      "relationships": {
        "business": {
          "id": "62a05bd2-2f0e-4bac-8f8b-63947f4df16f",
          "type": "business"
        },
        "supplier": {
          "id": "62a05bd2-2f0e-4bac-8f8b-63947f4df16f",
          "type": "supplier"
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
  # Create Supplier Order
  Create a Supplier Order for current business.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="data" validation="formData, object" type="Required" %}
  Form Data needed when creating a new Supplier Order for current business.
  {% list isChild=true %}
  {% listitem title="type" validation="string" type="Required" %}
  Provide Supplier Order `type`. Current selection is only **supplier_orders**.
  {% /listitem %}

  {% listitem title="attributes" validation="formData, object" type="Required" %}
  Attributes object.
  {% list isChild=true %}
  {% listitem title="desired_delivery_date" validation="date" type="Required" %}
  Date should be formated as a **ISO date**.
  {% /listitem %}
  {% listitem title="comment" validation="string" %}
  Comment around the Supplier Order.
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

  {% listitem title="supplier" validation="formData, object" %}
  Add a Supplier relationships link.
  {% list isChild=true %}
  {% listitem title="id" validation="string" %}
  Related Supplier `id`.
  {% /listitem %}
  {% listitem title="type" validation="string" %}
  Supplier `type`; **supplier**.
  {% /listitem %}
  {% /list %}
  {% /listitem %}

  {% /list %}
  {% /listitem %}

  {% /list %}
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "POST", path: "/api/v1/supplier_orders"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
  {
    const res = await fetch(`${BASE_URL}/api/v1/supplier_orders`, {
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
