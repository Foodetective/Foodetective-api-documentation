---
title: Supplier Elements
---
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
      "type": "supplier_elements",
      "attributes": {
        "quantity": ""
      },
      "relationships": {
        "supplier_order": {
          "id": "62a05bd2-2f0e-4bac-8f8b-63947f4df16f",
          "type": "supplier_order"
        },
        "supplier_product": {
          "id": "62a05bd2-2f0e-4bac-8f8b-63947f4df16f",
          "type": "supplier_product"
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
  # Create Supplier Element
  Create a supplier element of a supplier order.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="data" validation="formData, object" type="Required" %}
  Form Data needed when creating a new supplier element of a supplier order.
  {% list isChild=true %}
  {% listitem title="type" validation="string" type="Required" %}
  Provide Supplier Element `type`. Current selection is only **supplier_elements**.
  {% /listitem %}

  {% listitem title="attributes" validation="formData, object" type="Required" %}
  Attributes object.
  {% list isChild=true %}
  {% listitem title="quantity" validation="integer" type="Required" %}
  Amount of given supplier product.
  {% /listitem %}
  {% /list %}
  {% /listitem %}
  
  {% listitem title="relationships" validation="formData, object" type="Required" %}
  Relationships object with **`Supplier Order`** and **`Supplier Product`** objects.
  {% list isChild=true %}
  {% listitem title="supplier_order" validation="formData, object" type="Required" %}
  Add a Supplier Order relationships link.
  {% list isChild=true %}
  {% listitem title="id" validation="string" type="Required" %}
  Related Supplier Order `id`.
  {% /listitem %}
  {% listitem title="type" validation="string" type="Required" %}
  Supplier Order `type`; **supplier_order**.
  {% /listitem %}
  {% /list %}
  {% /listitem %}
  {% listitem title="supplier_product" validation="formData, object" type="Required" %}
  Add a Supplier Product relationships link.
  {% list isChild=true %}
  {% listitem title="id" validation="string" type="Required" %}
  Related Supplier Product `id`.
  {% /listitem %}
  {% listitem title="type" validation="string" type="Required" %}
  Supplier Product `type`; **supplier_product**.
  {% /listitem %}
  {% /list %}
  {% /listitem %}

  {% /list %}
  {% /listitem %}
  
  {% /list %}
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "POST", path: "/api/v1/supplier_elements"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/supplier_elements`, {
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