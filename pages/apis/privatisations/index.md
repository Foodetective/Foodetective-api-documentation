---
title: Privatisations
---
{% section %}
{% layoutTwoCol %}

{% methodCopy %}
{% methodInfo %}
  # {% $markdoc.frontmatter.title %}
  Return a Privatisation.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Return a Privatisation by specific `id`.
  {% /listitem %}
  {% listitem title="include" validation="query string" %}
  Include associations (delimited with comma). Available associations: business, user.
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "GET", path: "/api/v1/privatisations/{id}"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/privatisations/${id}`, {
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
  # Create Privatisation
  Create a privatisation of a business.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="data" validation="formData, object" type="Required" %}
  Form Data needed when creating a new privatisation of a business.
  {% list isChild=true %}
  {% listitem title="type" validation="string" type="Required" %}
  Provide Privatisation `type`. Current selection is only **privatisations**.
  {% /listitem %}

  {% listitem title="attributes" validation="formData, object" type="Required" %}
  Attributes object.
  {% list isChild=true %}
  {% listitem title="name" validation="string" type="Required" %}
  Privatisation name.
  {% /listitem %}
  {% listitem title="from" validation="integer" type="Required" %}
  {% /listitem %}
  {% listitem title="to" validation="integer" type="Required" %}
  {% /listitem %}
  {% listitem title="date" validation="date" type="Required" %}
  Date should be formated as a **ISO date**.
  {% /listitem %}
  {% listitem title="number_of_servings" validation="integer" type="Required" %}
  {% /listitem %}
  {% listitem title="email" validation="string" type="Required" %}
  Privatisation email.
  {% /listitem %}
  {% listitem title="phone" validation="string" %}
  Privatisation phone number.
  {% /listitem %}
  {% listitem title="phone_country_code" validation="string" %}
  Privatisation phone number country code.
  {% /listitem %}
  {% listitem title="phone_country_prefix" validation="string" %}
  Privatisation phone number prefix.
  {% /listitem %}
  {% listitem title="specifications" validation="string" %}
  {% /listitem %}
  {% listitem title="user_name" validation="string" %}
  Privatisation user name.
  {% /listitem %}
  {% listitem title="type_of_event" validation="string" %}
  {% /listitem %}
  {% listitem title="chef_attendance" validation="undefined" %}
  {% /listitem %}
  {% listitem title="company_name" validation="string" %}
  Privatisation company name.
  {% /listitem %}
  {% listitem title="corporate_event" validation="undefined" %}
  {% /listitem %}
  {% listitem title="number_of_waiters" validation="integer" %}
  Number of waiters.
  {% /listitem %}
  {% listitem title="marketing_feedback" validation="string" %}
  Privatisation marketing feedback.
  {% /listitem %}
  {% listitem title="consent_gdpr" validation="undefined" %}
  {% /listitem %}
  {% listitem title="menu" validation="file" %}
  {% /listitem %}
  {% /list %}
  {% /listitem %}
  
  {% listitem title="relationships" validation="formData, object" type="Required" %}
  Relationships object with **`business`** object.
  {% list isChild=true %}
  {% listitem title="business" validation="formData, object" type="Required" %}
  Add a Business relationships link.
  {% list isChild=true %}
  {% listitem title="id" validation="string" type="Required" %}
  Related Business `id`.
  {% /listitem %}
  {% listitem title="type" validation="string" type="Required" %}
  Business `type`; **business**.
  {% /listitem %}
  {% /list %}
  {% /listitem %}

  {% listitem title="user" validation="formData, object" %}
  Add a User relationships link.
  {% list isChild=true %}
  {% listitem title="id" validation="string" %}
  Related User `id`.
  {% /listitem %}
  {% listitem title="type" validation="string" %}
  User `type`; **user**.
  {% /listitem %}
  {% /list %}
  {% /listitem %}

  {% /list %}
  {% /listitem %}
  
  {% /list %}
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "POST", path: "/api/v1/privatisations"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/privatisations`, {
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
  # Update Privatisation
  Update privatisation
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Update a Privatisation by specific `id`.
  {% /listitem %}

  {% listitem title="data" validation="formData, object" type="Required" %}
  Form Data needed when updating a privatisation of a business.
  {% list isChild=true %}
  {% listitem title="id" validation="string" type="Required" %}
  Provide Privatisation `id`.
  {% /listitem %}
  {% listitem title="type" validation="string" type="Required" %}
  Provide Privatisation `type`. Current selection is only **privatisations**.
  {% /listitem %}

  {% listitem title="attributes" validation="formData, object" %}
  Attributes object.
  {% list isChild=true %}
  {% listitem title="name" validation="string" %}
  Privatisation name.
  {% /listitem %}
  {% listitem title="date" validation="date" %}
  Date should be formated as a **ISO date**.
  {% /listitem %}
  {% listitem title="from" validation="integer" %}
  {% /listitem %}
  {% listitem title="to" validation="integer" %}
  {% /listitem %}
  {% listitem title="type_of_event" validation="string" %}
  {% /listitem %}
  {% listitem title="corporate_event" validation="undefined" %}
  {% /listitem %}
  {% listitem title="company_name" validation="string" %}
  Privatisation company name.
  {% /listitem %}
  {% listitem title="number_of_servings" validation="string" %}
  {% /listitem %}
  {% listitem title="specifications" validation="string" %}
  {% /listitem %}
  {% listitem title="menu" validation="file" %}
  {% /listitem %}
  {% listitem title="chef_attendance" validation="undefined" %}
  {% /listitem %}
  {% listitem title="number_of_waiters" validation="integer" %}
  Number of waiters.
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

{% codeBlock request={method: "PATCH", path: "/api/v1/privatisations/{id}"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/privatisations/${id}`, {
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
  # Delete Privatisation
  Delete a Privatisation.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Delete a Privatisation by specific `id`.
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "DELETE", path: "/api/v1/privatisations/{id}"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/privatisations/${id}`, {
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

- - -

{% section %}
{% layoutTwoCol %}

{% methodCopy %}
{% methodInfo %}
  # Send offer
  Send email with a privatisation offer
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Send email with a privatisation offer by specific `id`.
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "PATCH", path: "/api/v1/privatisations/{id}/send"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/privatisations/${id}/send`, {
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
  # Accept offer
  Accept a privatisation offer.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="data" validation="formData, object" type="Required" %}
  Form Data needed when accepting a privatisation offer.
  {% list isChild=true %}
  {% listitem title="type" validation="string" type="Required" %}
  Provide Privatisation `type`. Current selection is only **privatisations**.
  {% /listitem %}

  {% listitem title="attributes" validation="formData, object" %}
  Attributes object.
  {% list isChild=true %}
  {% listitem title="auth_token" validation="string" %}
  Privatisation authorization token.
  {% /listitem %}
  {% /list %}
  {% /listitem %}
  
  {% /list %}
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "PATCH", path: "/api/v1/privatisations/{id}/accept"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/privatisations/${id}/accept`, {
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
  # Reject offer
  Reject a privatisation offer.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="data" validation="formData, object" type="Required" %}
  Form Data needed when rejecting a privatisation offer.
  {% list isChild=true %}
  {% listitem title="type" validation="string" type="Required" %}
  Provide Privatisation `type`. Current selection is only **privatisations**.
  {% /listitem %}

  {% listitem title="attributes" validation="formData, object" %}
  Attributes object.
  {% list isChild=true %}
  {% listitem title="auth_token" validation="string" %}
  Privatisation authorization token.
  {% /listitem %}
  {% /list %}
  {% /listitem %}
  
  {% /list %}
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "PATCH", path: "/api/v1/privatisations/{id}/reject"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/privatisations/${id}/reject`, {
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