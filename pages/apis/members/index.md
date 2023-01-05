---
title: Members
---
{% section %}
{% layoutTwoCol %}

{% methodCopy %}
{% methodInfo %}
  # {% $markdoc.frontmatter.title %}
  Return a Member.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Return a Member by specific `id`.
  {% /listitem %}
  {% listitem title="include" validation="query string" %}
  Include associations (delimited with comma). Available associations: business, user.

  **Example:** `business,user`.
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "GET", path: "/api/v1/members/{id}"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
  {
    const res = await fetch(`${BASE_URL}/api/v1/members/${id}`, {
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
  # Create Member
  Create a member of a business.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="data" validation="formData, object" type="Required" %}
  Form Data needed when creating a member of a business.
  {% list isChild=true %}
  {% listitem title="type" validation="string" type="Required" %}
  Provide Member `type`. Current selection is only **members**.
  {% /listitem %}

  {% listitem title="attributes" validation="formData, object" type="Required" %}
  Attributes object with a few **required** fields.
  {% list isChild=true %}
  {% listitem title="email" validation="string" type="Required" %}
  Email address.
  {% /listitem %}
  {% listitem title="role" validation="string" type="Required" %}
  Role in business.
  {% /listitem %}
  {% listitem title="business_manager" validation="undefined" type="Required" %}
  Allow member to manage business.
  {% /listitem %}
  {% /list %}
  {% /listitem %}

  {% listitem title="relationships" validation="formData, object" type="Required" %}
  Relationships object with **`business`** object.
  {% list isChild=true %}
  {% listitem title="business" validation="formData, object" type="Required" %}
  Add a relationships link between member and related Business.
  {% list isChild=true %}
  {% listitem title="id" validation="string" type="Required" %}
  Related Business `id`.
  {% /listitem %}
  {% listitem title="type" validation="string" type="Required" %}
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

{% codeBlock request={method: "POST", path: "/api/v1/members"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
  {
    const res = await fetch(`${BASE_URL}/api/v1/members`, {
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
      "id": "16547034-d0a8-4108-9046-129a60d309e7",
      "type": "members",
      "links": {
        "self": "/members/16547034-d0a8-4108-9046-129a60d309e7"
      },
      "attributes": {
        "business-manager": true,
        "email": "member@test.com",
        "role": "manager",
        "status": "pending"
      },
      "relationships": {
        "business": {
          "links": {
            "self": "/members/16547034-d0a8-4108-9046-129a60d309e7/relationships/business",
            "related": "/members/16547034-d0a8-4108-9046-129a60d309e7/business"
          }
        },
        "user": {
          "links": {
            "self": "/members/16547034-d0a8-4108-9046-129a60d309e7/relationships/user",
            "related": "/members/16547034-d0a8-4108-9046-129a60d309e7/user"
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
  # Update Member
  Update a member.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Update a Member by specific `id`.
  {% /listitem %}

  {% listitem title="data" validation="formData, object" type="Required" %}
  Form Data needed when updating a Member.
  {% list isChild=true %}
  {% listitem title="id" validation="string" type="Required" %}
  Provide Member `id`.
  {% /listitem %}
  {% listitem title="type" validation="string" type="Required" %}
  Provide Member `type`. Current selection is only **members**.
  {% /listitem %}

  {% listitem title="attributes" validation="formData, object" %}
  Attributes object.
  {% list isChild=true %}
  {% listitem title="role" validation="string" %}
  Role in business.
  {% /listitem %}
  {% listitem title="business_manager" validation="undefined" %}
  Allow member to manage business.
  {% /listitem %}
  {% /list %}
  {% /listitem %}

  {% /list %}
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "PATCH", path: "/api/v1/members/{id}"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
  {
    const res = await fetch(`${BASE_URL}/api/v1/members/${id}`, {
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
      "id": "16547034-d0a8-4108-9046-129a60d309e7",
      "type": "members",
      "links": {
        "self": "/members/16547034-d0a8-4108-9046-129a60d309e7"
      },
      "attributes": {
        "business-manager": true,
        "email": "member@test.com",
        "role": "the boss",
        "status": "pending"
      },
      "relationships": {
        "business": {
          "links": {
            "self": "/members/16547034-d0a8-4108-9046-129a60d309e7/relationships/business",
            "related": "/members/16547034-d0a8-4108-9046-129a60d309e7/business"
          }
        },
        "user": {
          "links": {
            "self": "/members/16547034-d0a8-4108-9046-129a60d309e7/relationships/user",
            "related": "/members/16547034-d0a8-4108-9046-129a60d309e7/user"
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
  # Delete Member
  Delete a Member.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Delete a Member by specific `id`.
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "DELETE", path: "/api/v1/Member/{id}"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
  {
    const res = await fetch(`${BASE_URL}/api/v1/Member/${id}`, {
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

- - -

{% section %}
{% layoutTwoCol %}

{% methodCopy %}
{% methodInfo %}
  # Accept Member
  Accept a member of a business.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="data" validation="formData, object" type="Required" %}
  Form Data needed when **accepting** a Member.
  {% list isChild=true %}
  {% listitem title="type" validation="string" type="Required" %}
  Provide Member `type`. Current selection is only **members**.
  {% /listitem %}

  {% listitem title="attributes" validation="formData, object" type="Required" %}
  Attributes object.
  {% list isChild=true %}
  {% listitem title="auth_token" validation="string" type="Required" %}
  {% /listitem %}
  {% listitem title="terms_agreement" validation="undefined" type="Required" %}
  {% /listitem %}
  {% /list %}
  {% /listitem %}

  {% /list %}
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "PATCH", path: "/api/v1/members/accept"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/members/accept`, {
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
  # Reject Member
  Reject a member of a business.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="data" validation="formData, object" type="Required" %}
  Form Data needed when **rejecting** a Member.
  {% list isChild=true %}
  {% listitem title="type" validation="string" type="Required" %}
  Provide Member `type`. Current selection is only **members**.
  {% /listitem %}

  {% listitem title="attributes" validation="formData, object" type="Required" %}
  Attributes object.
  {% list isChild=true %}
  {% listitem title="auth_token" validation="string" type="Required" %}
  {% /listitem %}
  {% /list %}
  {% /listitem %}

  {% /list %}
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "PATCH", path: "/api/v1/members/reject"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/members/reject`, {
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
