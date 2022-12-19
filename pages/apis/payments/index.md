---
title: Payments
---
{% section %}
{% layoutTwoCol %}

{% methodCopy %}
{% methodInfo %}
  # Create Payment
  Create a payment for an order.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="data" validation="formData, object" type="Required" %}
  Form Data needed when creating a new payment for an order.
  {% list isChild=true %}
  {% listitem title="type" validation="string" type="Required" %}
  Provide Payment `type`. Current selection is only **payments**.
  {% /listitem %}

  {% listitem title="attributes" validation="formData, object" %}
  Attributes object.
  {% list isChild=true %}
  {% listitem title="stripe_token" validation="string" %}
  Stripe reusable Source/PaymentMethod token.
  {% /listitem %}
  {% listitem title="stripe_payment_method_id" validation="string" %}
  Stripe PaymentMethod ID which was saved before along with Card record.
  {% /listitem %}
  {% /list %}
  {% /listitem %}

  {% listitem title="relationships" validation="formData, object" %}
  Relationships object with **`order`** object.
  {% list isChild=true %}
  {% listitem title="order" validation="formData, object" %}
  Add a order relationships link.
  {% list isChild=true %}
  {% listitem title="id" validation="string" %}
  Related Order `id`.
  {% /listitem %}
  {% listitem title="type" validation="string" %}
  Order `type`; **order**.
  {% /listitem %}
  {% /list %}
  {% /listitem %}
  {% /list %}
  {% /listitem %}

  {% /list %}
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "POST", path: "/api/v1/payments"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/payments`, {
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
