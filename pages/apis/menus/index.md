---
title: Menus
---
{% section %}
{% layoutTwoCol %}

{% methodCopy %}
{% methodInfo %}
  # Create Menu
  Create a menu for an exisitng business.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="data" validation="formData, object" type="Required" %}
  Form Data needed when creating a new Menu for an exisitng business.
  {% list isChild=true %}
  {% listitem title="type" validation="string" type="Required" %}
  Provide Menu `type`. Current selection is only **menus**.
  {% /listitem %}

  {% listitem title="attributes" validation="formData, object" %}
  Attributes object.
  {% list isChild=true %}
  {% listitem title="display_name" validation="string" %}
  Menu display name.
  {% /listitem %}
  {% listitem title="file" validation="file"%}
  Menu list of items.
  {% /listitem %}
  {% /list %}
  {% /listitem %}

  {% listitem title="relationships" validation="formData, object" %}
  Relationships object with **`business`** object.
  {% list isChild=true %}
  {% listitem title="business" validation="formData, object" %}
  Add a relationships link between Menu and related Business.
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

{% codeBlock request={method: "POST", path: "/api/v1/menus"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
  {
    const res = await fetch(`${BASE_URL}/api/v1/menus`, {
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
  {
    "data": {
      "id": "1fc3d278-db04-4268-a1d1-6ab4a4b10032",
      "type": "menus",
      "links": {
        "self": "/menus/1fc3d278-db04-4268-a1d1-6ab4a4b10032"
      },
      "attributes": {
        "display-name": "Menu",
        "file": {
          "url": "https://foodetective-staging-backend-data.s3.amazonaws.com/uploads/menu/file/1fc3d278-db04-4268-a1d1-6ab4a4b10032/7ba661e5-f32e-4b93-ae4d-ac4da09b21af.jpeg"
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
  # Update Menu
  Update a Menu.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Update a Menu by specific `id`.
  {% /listitem %}

  {% listitem title="data" validation="formData, object" type="Required" %}
  Form Data needed when updating a Menu.
  {% list isChild=true %}
  {% listitem title="id" validation="string" type="Required" %}
  Provide Menu `id`.
  {% /listitem %}
  {% listitem title="type" validation="string" type="Required" %}
  Provide Menu `type`. Current selection is only **menus**.
  {% /listitem %}

  {% listitem title="attributes" validation="formData, object" %}
  Attributes object.
  {% list isChild=true %}
  {% listitem title="display_name" validation="string" %}
  Menu display name.
  {% /listitem %}
  {% listitem title="file" validation="file"%}
  Menu list of items.
  {% /listitem %}
  {% /list %}
  {% /listitem %}

  {% /list %}
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "PATCH", path: "/api/v1/menus/{id}"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
  {
    const res = await fetch(`${BASE_URL}/api/v1/menus/${id}`, {
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
  {
    "data": {
      "id": "1fc3d278-db04-4268-a1d1-6ab4a4b10032",
      "type": "menus",
      "links": {
        "self": "/menus/1fc3d278-db04-4268-a1d1-6ab4a4b10032"
      },
      "attributes": {
        "display-name": "Menu name was edited here!",
        "file": {
          "url": "https://foodetective-staging-backend-data.s3.amazonaws.com/uploads/menu/file/1fc3d278-db04-4268-a1d1-6ab4a4b10032/7ba661e5-f32e-4b93-ae4d-ac4da09b21af.jpeg"
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
  # Delete Menu
  Delete a Menu.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Delete a Menu by specific `id`.
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "DELETE", path: "/api/v1/menus/{id}"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
  {
    const res = await fetch(`${BASE_URL}/api/v1/menus/${id}`, {
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

{% /layoutTwoCol %}
{% /section %}
