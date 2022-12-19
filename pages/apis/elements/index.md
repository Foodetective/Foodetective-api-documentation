---
title: Elements
---
{% section %}
{% layoutTwoCol %}

{% methodCopy %}
{% methodInfo %}
  # {% $markdoc.frontmatter.title %}
  Return a Element.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Return a Element by specific Element `id`.
  {% /listitem %}
  {% listitem title="include" validation="query string" %}
  Include associations (delimited with comma). Available associations: element_options
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "GET", path: "/api/v1/elements/{id}"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/elements/${id}`, {
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
  # Create Element
  Create a element of a order
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="data" validation="formData, object" type="Required" %}
  Form Data needed when creating a new Element.
  {% list isChild=true %}
  {% listitem title="type" validation="string" type="Required" %}
  Provide Element `type`. Current selection is only **elements**.
  {% /listitem %}

  {% listitem title="attributes" validation="formData, object" type="Required" %}
  Attributes object with a few **required** fields.
  {% list isChild=true %}
  {% listitem title="units" validation="integer" type="Required" %}
  Amount of given dish.
  {% /listitem %}
  {% listitem title="notes" validation="string" %}
  Additional notes for given dish
  {% /listitem %}
  {% /list %}
  {% /listitem %}

  {% listitem title="relationships" validation="formData, object" %}
  Relationships object with **`order`**, **`dish`** or **`dish_options`** objects.
  {% list isChild=true %}
  {% listitem title="order" validation="formData, object" %}
  Add a relationships link between Element and related Order.
  {% list isChild=true %}
  {% listitem title="id" validation="string" type="Required" %}
  Related Order `id`.
  {% /listitem %}
  {% listitem title="type" validation="string" %}
  Order `type`; **order**
  {% /listitem %}
  {% /list %}
  {% /listitem %}

  {% listitem title="dish" validation="formData, object" %}
  Add a relationships link between Element and related Dish.
  {% list isChild=true %}
  {% listitem title="id" validation="string" type="Required" %}
  Related Dish `id`.
  {% /listitem %}
  {% listitem title="type" validation="string" %}
  Dish `type`; **dish**
  {% /listitem %}
  {% /list %}
  {% /listitem %}

  {% listitem title="dish_options" validation="formData, object" %}
  Add a relationships link between Element and related Dish Option.
  {% list isChild=true %}
  {% listitem title="id" validation="string" %}
  Related Dish Option`id`.
  {% /listitem %}
  {% listitem title="type" validation="string" %}
  Dish Option `type`; **dish_options**
  {% /listitem %}
  {% /list %}
  {% /listitem %}
  {% /list %}
  {% /listitem %}

  {% /list %}
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "POST", path: "/api/v1/elements"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/elements`, {
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
  # Update Element
  Update a Element
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Update a Element by specific Element `id`.
  {% /listitem %}

  {% listitem title="data" validation="formData, object" type="Required" %}
  Form Data needed when updating a Element.
  {% list isChild=true %}
  {% listitem title="id" validation="string" type="Required" %}
  Provide Element `id`.
  {% /listitem %}
  {% listitem title="type" validation="string" type="Required" %}
  Provide Element `type`. Current selection is only **elements**.
  {% /listitem %}

  {% listitem title="attributes" validation="formData, object" %}
  Attributes object.
  {% list isChild=true %}
  {% listitem title="units" validation="integer" %}
  Amount of given dish
  {% /listitem %}
  {% listitem title="notes" validation="string" %}
  Additional notes for given dish
  {% /listitem %}
  {% /list %}
  {% /listitem %}

  {% /list %}
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "PATCH", path: "/api/v1/elements/{id}"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/elements/${id}`, {
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
  # Delete Element
  Delete a Element.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Delete a Element by specific Element `id`.
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "DELETE", path: "/api/v1/elements/{id}"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/elements/${id}`, {
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
