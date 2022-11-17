---
title: Favorite Suppliers
---
{% section %}
{% layoutTwoCol %}

{% methodCopy %}
{% methodInfo %}
  # Create Favorite Suppliers
  Add given supplier to current busineses favorites
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="data" validation="formData, object" type="Required" %}
  Form Data needed when adding given supplier to current businesses favorites.
  {% list isChild=true %}
  {% listitem title="type" validation="string" type="Required" %}
  Provide Favorite Suppliers `type`. Current selection is only **favorite_suppliers**.
  {% /listitem %}
  
  {% listitem title="relationships" validation="formData, object" type="Required" %}
  Relationships object with **`business`** or **`supplier`** objects.
  {% list isChild=true %}
  {% listitem title="business" validation="formData, object" type="Required" %}
  Add a relationships link between Favorite Suppliers and related Business.
  {% list isChild=true %}
  {% listitem title="id" validation="string" type="Required" %}
  Related Business `id`.
  {% /listitem %}
  {% listitem title="type" validation="string" type="Required" %}
  Business `type`; **business**.
  {% /listitem %}
  {% /list %}
  {% /listitem %}

  {% listitem title="supplier" validation="formData, object" type="Required" %}
  Add a Supplier relationships link.
  {% list isChild=true %}
  {% listitem title="id" validation="string" type="Required" %}
  Related Supplier `id`.
  {% /listitem %}
  {% listitem title="type" validation="string" type="Required" %}
  Business `type`; **supplier**.
  {% /listitem %}
  {% /list %}
  {% /listitem %}
  {% /list %}
  {% /listitem %}
  
  {% /list %}
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "POST", path: "/api/v1/favorite_suppliers"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/favorite_suppliers`, {
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
  # Delete Favorite Supplier
  Delete a Favorite Supplier.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Delete a Favorite Supplier by specific `id`.
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "DELETE", path: "/api/v1/favorite_suppliers/{id}"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/favorite_suppliers/${id}`, {
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