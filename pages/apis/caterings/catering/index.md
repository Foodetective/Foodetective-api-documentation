---
title: Caterings
---
{% section %}
{% layoutTwoCol %}

{% methodCopy %}
{% methodInfo %}
  # Catering
  Return a Catering.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Return a Catering by specific catering `id`.
  {% /listitem %}
  {% listitem title="include" validation="query string" %}
  Include associations (delimited with comma). Available associations: business, user, address

  **Example:** `business,address`
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "GET", path: "/api/v1/caterings/{id}"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/caterings/${id}`, {
        method: 'GET',
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

- - -

{% section %}
{% layoutTwoCol %}

{% methodCopy %}
{% methodInfo %}
  # Create Catering
  Create a catering of a business.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="data" validation="formData, object" type="Required" %}
  Form Data needed when creating a catering of a business.
  {% list isChild=true %}
  {% listitem title="type" validation="string" type="Required" %}
  Provide Catering `type`. Current selection is only **caterings**.
  {% /listitem %}
  {% listitem title="attributes" validation="formData, object" type="Required" %}
  Attributes object with a few **required** fields.
  {% list isChild=true %}
  {% listitem title="name" validation="string" type="Required" %}
  {% /listitem %}
  {% listitem title="email" validation="string" type="Required" %}
  {% /listitem %}
  {% listitem title="date" validation="date" type="Required" %}
  Date should be formated as a **ISO date**.
  {% /listitem %}
  {% listitem title="from" validation="integer" type="Required" %}
  {% /listitem %}
  {% listitem title="to" validation="integer" type="Required" %}
  {% /listitem %}
  {% listitem title="number_of_servings" validation="integer" type="Required" %}
  {% /listitem %}
  {% listitem title="address_post_code" validation="string" type="Required" %}
  {% /listitem %}
  {% listitem title="address_street" validation="string" type="Required" %}
  {% /listitem %}
  {% listitem title="address_street_number" validation="string" type="Required" %}
  {% /listitem %}
  {% listitem title="address_city" validation="string" type="Required" %}
  {% /listitem %}
  {% listitem title="address_country_code" validation="string" type="Required" %}
  {% /listitem %}
  {% listitem title="phone" validation="string" %}
  {% /listitem %}
  {% listitem title="phone_country_code" validation="string" %}
  {% /listitem %}
  {% listitem title="phone_country_prefix" validation="string" %}
  {% /listitem %}
  {% listitem title="specifications" validation="string" %}
  {% /listitem %}
  {% listitem title="type_of_event" validation="string" %}
  {% /listitem %}
  {% listitem title="user_name" validation="string" %}
  {% /listitem %}
  {% listitem title="chef_attendance" validation="undefined" %}
  {% /listitem %}
  {% listitem title="cutlery" validation="undefined" %}
  {% /listitem %}
  {% listitem title="company_name" validation="string" %}
  {% /listitem %}
  {% listitem title="outdoors" validation="undefined" %}
  {% /listitem %}
  {% listitem title="corporate_event" validation="undefined" %}
  {% /listitem %}
  {% listitem title="number_of_waiters" validation="integer" %}
  {% /listitem %}
  {% listitem title="address_notes" validation="string" %}
  {% /listitem %}
  {% listitem title="address_region_code" validation="string" %}
  {% /listitem %}
  {% listitem title="marketing_feedback" validation="string" %}
  {% /listitem %}
  {% listitem title="currency" validation="string" %}
  {% /listitem %}
  {% listitem title="auth_token" validation="string" %}
  {% /listitem %}
  {% listitem title="consent_gdpr" validation="string" %}
  {% /listitem %}
  {% listitem title="menu" validation="file" %}
  {% /listitem %}
  {% /list %}
  {% /listitem %}
  {% listitem title="relationships" validation="formData, object" %}
  Relationships object with **`business`** and **`user`** objects.
  {% list isChild=true %}
  {% listitem title="business" validation="formData, object" %}
  Add a relationships link between catering and related Business.
  {% list isChild=true %}
  {% listitem title="type" validation="string" %}
  {% /listitem %}
  {% listitem title="id" validation="string" %}
  Related Business `id`.
  {% /listitem %}
  {% /list %}
  {% /listitem %}
  {% listitem title="user" validation="formData, object" %}
  Add a relationships link between catering and related User.
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

{% codeBlock request={method: "POST", path: "/api/v1/caterings"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/caterings`, {
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
  # Update Catering
  Update a Catering.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Update a Catering by specific catering `id`.
  {% /listitem %}
  {% listitem title="data" validation="formData, object" type="Required" %}
  Form Data needed when creating a catering of a business.
  {% list isChild=true %}
  {% listitem title="id." validation="string" type="Required" %}
  Provide Catering `id`.
  {% /listitem %}
  {% listitem title="type" validation="string" %}
  Provide Catering `type`. Current selection is only **caterings**.
  {% /listitem %}
  {% listitem title="attributes" validation="formData, object" type="Required" %}
  Attributes object with a few **required** fields.
  {% list isChild=true %}
  {% listitem title="name" validation="string" type="Required" %}
  {% /listitem %}
  {% listitem title="date" validation="date" type="Required" %}
  Date should be formated as a **ISO date**.
  {% /listitem %}
  {% listitem title="from" validation="integer" type="Required" %}
  {% /listitem %}
  {% listitem title="to" validation="integer" type="Required" %}
  {% /listitem %}
  {% listitem title="type_of_event" validation="string" %}
  {% /listitem %}
  {% listitem title="outdoors" validation="undefined" %}
  {% /listitem %}
  {% listitem title="corporate_event" validation="undefined" %}
  {% /listitem %}
  {% listitem title="company_name" validation="string" %}
  {% /listitem %}
  {% listitem title="number_of_servings" validation="integer" %}
  {% /listitem %}
  {% listitem title="specifications" validation="integer" %}
  {% /listitem %}
  {% listitem title="menu" validation="file" %}
  {% /listitem %}
  {% listitem title="chef_attendance" validation="undefined" %}
  {% /listitem %}
  {% listitem title="number_of_waiters" validation="integer" %}
  {% /listitem %}
  {% listitem title="cutlery" validation="undefined" %}
  {% /listitem %}
  {% listitem title="price_cents" validation="integer" %}
  {% /listitem %}
  {% listitem title="currency" validation="string" %}
  {% /listitem %}
  {% /list %}
  {% /listitem %}
  {% /list %}
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "PATCH", path: "/api/v1/caterings/{id}"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/caterings/${id}`, {
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
  # Delete Catering
  Delete a Catering.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Delete a Catering by specific catering `id`.
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "DELETE", path: "/api/v1/caterings/{id}"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/caterings/${id}`, {
        method: 'DELETE',
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