---
title: Dishes
---
{% section %}
{% layoutTwoCol %}

{% methodCopy %}
{% methodInfo %}
  # {% $markdoc.frontmatter.title %}
  Return a Dish.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Return a Delivery by specific delivery `id`.
  {% /listitem %}
  {% listitem title="include" validation="query string" %}
  Include associations (delimited with comma). Available associations: pictures, dish_option_categories, business, category

  **Example:** `category,pictures`
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "GET", path: "/api/v1/dishes/{id}"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/dishes/${id}`, {
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
  # Create Dish
  Create a dish of a business.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="data" validation="formData, object" type="Required" %}
  Form Data needed when creating a new Dish.
  {% list isChild=true %}
  {% listitem title="type" validation="string" type="Required" %}
  Provide Dish `type`. Current selection is only **dishes**.
  {% /listitem %}

  {% listitem title="attributes" validation="formData, object" type="Required" %}
  Attributes object with a few **required** fields.
  {% list isChild=true %}
  {% listitem title="name" validation="string" type="Required" %}
  {% /listitem %}
  {% listitem title="price_per_item_cents" validation="integer" type="Required" %}
  Price in cents (currency taken from the business)
  {% /listitem %}
  {% listitem title="sku_ref" validation="string" %}
  {% /listitem %}
  {% listitem title="description" validation="string" %}
  {% /listitem %}
  {% listitem title="unavailable" validation="undefined" %}
  {% /listitem %}
  {% listitem title="on_uber_eats" validation="undefined" %}
  {% /listitem %}
  {% /list %}
  {% /listitem %}
  
  {% listitem title="relationships" validation="formData, object" type="Required" %}
  Relationships object with **`business`** or **`category`** objects.
  {% list isChild=true %}
  {% listitem title="business" validation="formData, object" %}
  Add a relationships link between dish and related Business.
  {% list isChild=true %}
  {% listitem title="id" validation="string" type="Required" %}
  Related Business `id`.
  {% /listitem %}
  {% listitem title="type" validation="string" %}
  Type **business**.
  {% /listitem %}
  {% /list %}
  {% /listitem %}

  {% listitem title="category" validation="formData, object" %}
  Add a relationships link between dish and related Category.
  {% list isChild=true %}
  {% listitem title="id" validation="string" type="Required" %}
  Related Category `id`.
  {% /listitem %}
  {% listitem title="type" validation="string" %}
  Type **category**.
  {% /listitem %}
  {% /list %}
  {% /listitem %}
  {% /list %}
  {% /listitem %}
  
  {% /list %}
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "POST", path: "/api/v1/dishes"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/dishes`, {
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
  # Create Dish Upload
  Upload a CSV file with dishes
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="data" validation="formData, object" type="Required" %}
  Form Data needed for upload a CSV file with dishes.
  {% list isChild=true %}
  {% listitem title="type" validation="string" type="Required" %}
  Provide Dish `type`. Current selection is only **dishes**.
  {% /listitem %}

  {% listitem title="attributes" validation="formData, object" type="Required" %}
  Attributes object with a few **required** fields.
  {% list isChild=true %}
  {% listitem title="file" validation="file" type="Required" %}
  Upload a CSV file.
  {% /listitem %}
  {% listitem title="mode" validation="string" type="Required" %}
  You can either **add** or **replace** to the dishes.
  {% /listitem %}
  {% listitem title="locale" validation="string" %}
  {% /listitem %}
  {% /list %}
  {% /listitem %}
  
  {% listitem title="relationships" validation="formData, object" type="Required" %}
  Relationships object with **`business`** or **`category`** objects.
  {% list isChild=true %}
  {% listitem title="business" validation="formData, object" %}
  Add a relationships link between dish and related Business.
  {% list isChild=true %}
  {% listitem title="id" validation="string" %}
  Related Business `id`.
  {% /listitem %}
  {% listitem title="type" validation="string" %}
  Type **business**.
  {% /listitem %}
  {% /list %}
  {% /listitem %}  
  {% /list %}
  {% /listitem %}
  
  {% /list %}
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "POST", path: "/api/v1/dishes/upload"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/dishes/upload`, {
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
  # Update Dish
  Update a Dish
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Update a Dish by specific Dish `id`.
  {% /listitem %}
  {% listitem title="include" validation="query string" type="Required" %}
  Include associations (delimited with comma). Available associations: pictures, dish_option_categories, business, category.

  **Example:** `business,category`
  {% /listitem %}

  {% listitem title="data" validation="formData, object" type="Required" %}
  Form Data needed when updating a Dish.
  {% list isChild=true %}
  {% listitem title="id" validation="string" type="Required" %}
  Provide Dish `id`.
  {% /listitem %}
  {% listitem title="type" validation="string" type="Required" %}
  Provide Dish `type`. Current selection is only **dishes**.
  {% /listitem %}

  {% listitem title="attributes" validation="formData, object" %}
  Attributes object with a few **required** fields.
  {% list isChild=true %}
  {% listitem title="description" validation="string" %}
  {% /listitem %}
  {% listitem title="name" validation="string" %}
  {% /listitem %}
  {% listitem title="sku_ref" validation="string" %}
  {% /listitem %}
  {% listitem title="price_per_item_cents" validation="integer" %}
  Price in cents (currency taken from the business)
  {% /listitem %}
  {% listitem title="unavailable" validation="undefined" %}
  {% /listitem %}
  {% listitem title="on_uber_eats" validation="undefined" %}
  {% /listitem %}
  {% /list %}
  {% /listitem %}

  {% listitem title="relationships" validation="formData, object" %}
  Relationships object with **`business`** or **`category`** objects.
  {% list isChild=true %}
  {% listitem title="business" validation="formData, object" %}
  Add a relationships link between dish and related Business.
  {% list isChild=true %}
  {% listitem title="id" validation="string" %}
  Related Business `id`.
  {% /listitem %}
  {% listitem title="type" validation="string" %}
  Type **business**.
  {% /listitem %}
  {% /list %}
  {% /listitem %}

  {% listitem title="category" validation="formData, object" %}
  Add a relationships link between dish and related Category.
  {% list isChild=true %}
  {% listitem title="id" validation="string" %}
  Related Category `id`.
  {% /listitem %}
  {% listitem title="type" validation="string" %}
  Type **category**.
  {% /listitem %}
  {% /list %}
  {% /listitem %}
  {% /list %}
  {% /listitem %}
  
  {% /list %}
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "PATCH", path: "/api/v1/dishes/{id}"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/dishes/${id}`, {
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
  # Delete Dish
  Delete a Dish.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Delete a Dish by specific Dish `id`.
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "DELETE", path: "/api/v1/dishes/{id}"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/dishes/${id}`, {
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