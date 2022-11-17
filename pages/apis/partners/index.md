---
title: Partners
---
{% section %}
{% layoutTwoCol %}

{% methodCopy %}
{% methodInfo %}
  # {% $markdoc.frontmatter.title %}
  Return all Partners with Partner Integration and preference status for given Business.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="business_uuid" validation="path integer" type="Required" %}
  Return all Partners by specific `business_uuid`.
  {% /listitem %}
  {% listitem title="include" validation="query string" %}
  Include associations (delimited with comma). Available associations: users, partner_integrations.
  {% /listitem %}

  {% listitem title="filter" validation="formData, object" %}
  Form Data needed when filtering.
  {% list isChild=true %}
  {% listitem title="categories" validation="string[]" %}
  Filter by a array of `categories`.
  {% /listitem %}
  {% listitem title="excluded_categories" validation="string[]" %}
  Filter by a array of `excluded_categories`.
  {% /listitem %}
  {% listitem title="wholesaler_categories" validation="string[]" %}
  Filter by a array of `wholesaler_categories`.
  {% /listitem %}
  {% listitem title="country_codes" validation="string[]" %}
  Filter by a array of `country_codes`.
  {% /listitem %}
  {% listitem title="preferred" validation="undefined" %}
  Filter by `preferred`.
  {% /listitem %}
  {% listitem title="active" validation="undefined" %}
  Filter by `active`.
  {% /listitem %}
  {% /list %}
  {% /listitem %}

  {% listitem title="search" validation="query string" %}
  Name search query.
  {% /listitem %}
  {% listitem title="page" validation="query integer" %}
  Page offset to fetch.
  {% /listitem %}
  {% listitem title="per_page" validation="query integer" %}
  Number of results to return per page.
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "GET", path: "/api/v1/partners"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/partners`, {
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
  # Available
  Return all active Partners with status available and coming soon.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="include" validation="query string" %}
  Include associations (delimited with comma). Available associations: users, partner_integrations.
  {% /listitem %}

  {% listitem title="filter" validation="formData, object" %}
  Form Data needed when filtering.
  {% list isChild=true %}
  {% listitem title="categories" validation="string[]" %}
  Filter by a array of `categories`.
  {% /listitem %}
  {% listitem title="status" validation="string[]" %}
  Filter by a array of `status`.
  {% /listitem %}
  {% /list %}
  {% /listitem %}

  {% listitem title="search" validation="query string" %}
  Name search query.
  {% /listitem %}
  {% listitem title="page" validation="query integer" %}
  Page offset to fetch.
  {% /listitem %}
  {% listitem title="per_page" validation="query integer" %}
  Number of results to return per page.
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "GET", path: "/api/v1/partners/available"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/partners/available`, {
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
  # Wholesalers
  Return all Partners with wholesaler category.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="include" validation="query string" %}
  Include associations (delimited with comma). Available associations: users, partner_integrations.
  {% /listitem %}
  {% listitem title="page" validation="query integer" %}
  Page offset to fetch.
  {% /listitem %}
  {% listitem title="per_page" validation="query integer" %}
  Number of results to return per page.
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "GET", path: "/api/v1/partners/wholesalers"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/partners/wholesalers`, {
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
  # Partner
  Return a Partner.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Delete a Partner by specific `id`.
  {% /listitem %}
  {% listitem title="include" validation="query string" %}
  Include associations (delimited with comma). Available associations: users, partner_integrations.
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "GET", path: "/api/v1/partners/wholesalers"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/partners/wholesalers`, {
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
  # Create Partner Click Event
  Creates a click event for partner.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="data" validation="formData, object" type="Required" %}
  Form Data needed when creating a click event for partner.
  {% list isChild=true %}
  {% listitem title="type" validation="string" type="Required" %}
  Provide Delivery `type`. Current selection is only **partner_click_events**.
  {% /listitem %}

  {% listitem title="attributes" validation="formData, object" type="Required" %}
  Attributes object.
  {% list isChild=true %}
  {% listitem title="event_type" validation="string" type="Required" %}
  Click event types are; **website** or **video**.
  {% /listitem %}
  {% /list %}
  {% /listitem %}
  
  {% listitem title="relationships" validation="formData, object" %}
  Relationships object with **`partner`** object.
  {% list isChild=true %}
  {% listitem title="partner" validation="formData, object" %}
  Add a Partner relationships link.
  {% list isChild=true %}
  {% listitem title="id" validation="string" %}
  Related Partner `id`.
  {% /listitem %}
  {% listitem title="type" validation="string" %}
  Partner `type`; **partner**.
  {% /listitem %}
  {% /list %}
  {% /listitem %}
  {% /list %}
  {% /listitem %}
  
  {% /list %}
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "POST", path: "/api/v1/partners/{id}/click_event"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/partners/{id}/click_event`, {
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
  # Links User
  Link the user to the partner.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Update user link to the partner by `id`.
  {% /listitem %}  
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "PATCH", path: "/api/v1/partners/{id}/connect"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/partners/${id}/connect`, {
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
  # Disconnects User
  Disconnects the user from the partner.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Disconnects user link from the partner by `id`.
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "DELETE", path: "/api/v1/partners/{id}/connect"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/partners/${id}/connect`, {
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