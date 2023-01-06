---
title: User intergrations
---
{% section %}
{% layoutTwoCol %}

{% methodCopy %}
{% methodInfo %}
  # {% $markdoc.frontmatter.title %}
  Connect User to Review Management Tool.

  If any erros occur you can access the [errors guide](/errors).
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Connect specific User to Review Management Tool with provided User `id`.
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "POST", path: "/api/v1/users/{id}/integrations/partoo"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/users/${id}/integrations/partoo`, {
        method: 'POST',
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
  # Disconnect User
  Disconnect the User from Review Management Tool.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Disconnect specific User from Review Management Tool with provided User `id`.
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "DELETE", path: "/api/v1/users/{id}/integrations/partoo"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
  {
    const res = await fetch(`${BASE_URL}/api/v1/users/${id}/integrations/partoo`, {
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
  # Business reviews
  Search for the reviews of your businesses on Review Management Tool.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="partoo_business_ids" validation="String[]" type="Required" %}
  Reviews for given business ids. You can provide multiple business `id`'s.
  {% /listitem %}
  {% listitem title="page" validation="query integer" %}
  **Default:** `1`, page number.
  {% /listitem %}
  {% listitem title="per_page" validation="query integer" %}
  **Default:** `30`, number of items to return per page. Currently **limited** to `100`.
  {% /listitem %}

  {% listitem title="include" validation="query string" %}
  Include associations (*delimited with comma*). Available associations: addresses, groups, menus, open_periods, order_periods, orders, partners, pictures, products, reviews

  **Example:** `orders,pictures`
  {% /listitem %}
  {% listitem title="language" validation="query string" %}
  Return results of Business by language **ISO 639‑1** code.
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "GET", path: "/api/v1/users/integrations/partoo/reviews"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/users/integrations/partoo/reviews`, {
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
