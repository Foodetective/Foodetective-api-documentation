---
title: Open Periods
---
{% section %}
{% layoutTwoCol %}

{% methodCopy %}
{% methodInfo %}
  # Create Open Period
  Create an open period for a business.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="data" validation="formData, object" type="Required" %}
  Form Data needed when creating an open period for a business.
  {% list isChild=true %}
  {% listitem title="type" validation="string" type="Required" %}
  Provide Open Period `type`. Current selection is only **open_periods**.
  {% /listitem %}

  {% listitem title="attributes" validation="formData, object" type="Required" %}
  Attributes object.
  {% list isChild=true %}
  {% listitem title="opened_from" validation="string" type="Required" %}
  Date should be formated as a **ISO date**.
  {% /listitem %}
  {% listitem title="opened_to" validation="string" type="Required" %}
  Date should be formated as a **ISO date**.
  {% /listitem %}
  {% listitem title="weekday" validation="string" type="Required" %}
  What day of week.
  {% /listitem %}
  {% listitem title="location" validation="string" %}
  Location of the business.
  {% /listitem %}
  {% /list %}
  {% /listitem %}

  {% listitem title="relationships" validation="formData, object" %}
  Relationships object with **`business`** object.
  {% list isChild=true %}
  {% listitem title="business" validation="formData, object" %}
  Add a relationships link between Open Period and related Business.
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

{% codeBlock request={method: "POST", path: "/api/v1/open_periods"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
  {
    const res = await fetch(`${BASE_URL}/api/v1/open_periods`, {
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
      "id": "c7c5fe95-445e-49cb-8a2a-09c069ca2d59",
      "type": "open-periods",
      "links": {
        "self": "/open-periods/c7c5fe95-445e-49cb-8a2a-09c069ca2d59"
      },
      "attributes": {
        "location": null,
        "opened-from": 1200,
        "opened-to": 5600,
        "weekday": 0
      },
      "relationships": {
        "business": {
          "links": {
            "self": "/open-periods/c7c5fe95-445e-49cb-8a2a-09c069ca2d59/relationships/business",
            "related": "/open-periods/c7c5fe95-445e-49cb-8a2a-09c069ca2d59/business"
          }
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
  # Update Open Period
  Update open period.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Update a Open Period by specific `id`.
  {% /listitem %}

  {% listitem title="data" validation="formData, object" type="Required" %}
  Form Data needed when updating a Open Period.
  {% list isChild=true %}
  {% listitem title="id" validation="string" type="Required" %}
  Provide Open Period `id`.
  {% /listitem %}
  {% listitem title="type" validation="string" type="Required" %}
  Provide Open Period `type`. Current selection is only **open_periods**.
  {% /listitem %}

  {% listitem title="attributes" validation="formData, object" %}
  Attributes object.
  {% list isChild=true %}
  {% listitem title="location" validation="string" %}
  Location of the business.
  {% /listitem %}
  {% listitem title="opened_from" validation="string" %}
  Date should be formated as a **ISO date**.
  {% /listitem %}
  {% listitem title="opened_to" validation="string" %}
  Date should be formated as a **ISO date**.
  {% /listitem %}
  {% listitem title="weekday" validation="string" %}
  What day of week.
  {% /listitem %}
  {% /list %}
  {% /listitem %}

  {% /list %}
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "PATCH", path: "/api/v1/open_periods/{id}"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
  {
    const res = await fetch(`${BASE_URL}/api/v1/open_periods/${id}`, {
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
      "id": "c7c5fe95-445e-49cb-8a2a-09c069ca2d59",
      "type": "open-periods",
      "links": {
        "self": "/open-periods/c7c5fe95-445e-49cb-8a2a-09c069ca2d59"
      },
      "attributes": {
        "location": null,
        "opened-from": 3600,
        "opened-to": 5600,
        "weekday": 0
      },
      "relationships": {
        "business": {
          "links": {
            "self": "/open-periods/c7c5fe95-445e-49cb-8a2a-09c069ca2d59/relationships/business",
            "related": "/open-periods/c7c5fe95-445e-49cb-8a2a-09c069ca2d59/business"
          }
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
  # Delete Open Period
  Delete an Open Period.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Delete a Open Period by specific `id`.
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "DELETE", path: "/api/v1/open_periods/{id}"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
  {
    const res = await fetch(`${BASE_URL}/api/v1/open_periods/${id}`, {
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
