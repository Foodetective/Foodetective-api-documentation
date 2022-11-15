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
  # Create Catering
  Create a catering of a business.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="data[type]" validation="formData string" type="Required" %}
  Provide Catering `type`. Current selection is only **caterings**.
  {% /listitem %}
  {% listitem title="data[attributes][name]" validation="formData string" type="Required" %}
  {% /listitem %}
  {% listitem title="data[attributes][email]" validation="formData string" type="Required" %}
  {% /listitem %}
  {% listitem title="data[attributes][date]" validation="formData date" type="Required" %}
  {% /listitem %}
  {% listitem title="data[attributes][from]" validation="formData integer" type="Required" %}
  {% /listitem %}
  {% listitem title="data[attributes][to]" validation="formData integer" type="Required" %}
  {% /listitem %}
  {% listitem title="data[attributes][number_of_servings]" validation="formData integer" type="Required" %}
  {% /listitem %}
  {% listitem title="data[attributes][address_post_code]" validation="formData string" type="Required" %}
  {% /listitem %}
  {% listitem title="data[attributes][address_street]" validation="formData string" type="Required" %}
  {% /listitem %}
  {% listitem title="data[attributes][address_street_number]" validation="formData string" type="Required" %}
  {% /listitem %}
  {% listitem title="data[attributes][address_city]" validation="formData string" type="Required" %}
  {% /listitem %}
  {% listitem title="data[attributes][address_country_code]" validation="formData string" type="Required" %}
  {% /listitem %}
  {% listitem title="data[attributes][phone]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][phone_country_code]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][phone_country_prefix]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][specifications]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][type_of_event]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][user_name]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][chef_attendance]" validation="formData undefined" %}
  {% /listitem %}
  {% listitem title="data[attributes][cutlery]" validation="formData undefined" %}
  {% /listitem %}
  {% listitem title="data[attributes][company_name]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][outdoors]" validation="formData undefined" %}
  {% /listitem %}
  {% listitem title="data[attributes][corporate_event]" validation="formData undefined" %}
  {% /listitem %}
  {% listitem title="data[attributes][number_of_waiters]" validation="formData integer" %}
  {% /listitem %}
  {% listitem title="data[attributes][address_notes]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][address_region_code]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][marketing_feedback]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][currency]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][auth_token]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][consent_gdpr]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][menu]" validation="formData file" %}
  {% /listitem %}
  {% listitem title="data[relationships][business][data][type]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[relationships][business][data][id]" validation="formData string" %}
  Related Business `id`.
  {% /listitem %}
  {% listitem title="data[relationships][user][data][type]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[relationships][user][data][id]" validation="formData string" %}
  Related User `id`.
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
  # Update Catering
  Update a Catering.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Update a Catering by specific catering `id`.
  {% /listitem %}
  {% listitem title="data[id]" validation="formData string" type="Required" %}
  Provide Catering `id`.
  {% /listitem %}
  {% listitem title="data[type]" validation="formData string" %}
  Provide Catering `type`. Current selection is only **caterings**.
  {% /listitem %}
  {% listitem title="data[attributes][name]" validation="formData string" type="Required" %}
  {% /listitem %}
  {% listitem title="data[attributes][date]" validation="formData date" type="Required" %}
  {% /listitem %}
  {% listitem title="data[attributes][from]" validation="formData integer" type="Required" %}
  {% /listitem %}
  {% listitem title="data[attributes][to]" validation="formData integer" type="Required" %}
  {% /listitem %}
  {% listitem title="data[attributes][type_of_event]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][outdoors]" validation="formData undefined" %}
  {% /listitem %}
  {% listitem title="data[attributes][corporate_event]" validation="formData undefined" %}
  {% /listitem %}
  {% listitem title="data[attributes][company_name]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][number_of_servings]" validation="formData integer" %}
  {% /listitem %}
  {% listitem title="data[attributes][specifications]" validation="formData integer" %}
  {% /listitem %}
  {% listitem title="data[attributes][menu]" validation="formData file" %}
  {% /listitem %}
  {% listitem title="data[attributes][chef_attendance]" validation="formData undefined" %}
  {% /listitem %}
  {% listitem title="data[attributes][number_of_waiters]" validation="formData integer" %}
  {% /listitem %}
  {% listitem title="data[attributes][cutlery]" validation="formData undefined" %}
  {% /listitem %}
  {% listitem title="data[attributes][price_cents]" validation="formData integer" %}
  {% /listitem %}
  {% listitem title="data[attributes][currency]" validation="formData string" %}
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
{% codeBlock title="RESPONSE" %}
  ```json
  ```
{% /codeBlock %}  

{% /layoutTwoCol %}
{% /section %}