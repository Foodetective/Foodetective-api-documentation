---
title: Business
---
{% section %}
{% layoutTwoCol %}

{% methodCopy %}
{% methodInfo %}
  # {% $markdoc.frontmatter.title %}
  Return a Business.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Returns a Business by specific business `id`. You can retrieve this `id` from ...
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

{% codeBlock request={method: "GET", path: "/api/v1/businesses/{id}"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/businesses/${id}`, {
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
  # Create Business
  Create a business record for current user.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="data" validation="formData, object" type="Required" %}
  Form Data needed when creating a business record for current user.
  {% list isChild=true %}
  {% listitem title="type" validation="string" type="Required" %}
  Provide Business `type`. Current selection is only **businesses**.
  {% /listitem %}
  {% listitem title="attributes" validation="formData, object" type="Required" %}
  Attributes object with a few **required** fields.
  {% list isChild=true %}
  {% listitem title="average_delivery_time" validation="integer" %}
  {% /listitem %}
  {% listitem title="bill_url" validation="string" %}
  {% /listitem %}
  {% listitem title="bio" validation="string" %}
  {% /listitem %}
  {% listitem title="breakfast_service" validation="undefined" %}
  {% /listitem %}
  {% listitem title="brunch_service" validation="undefined" %}
  {% /listitem %}
  {% listitem title="cafe_service" validation="undefined" %}
  {% /listitem %}
  {% listitem title="can_pay_with_cards" validation="undefined" %}
  {% /listitem %}
  {% listitem title="can_pay_with_cash" validation="undefined" %}
  {% /listitem %}
  {% listitem title="can_pay_with_mobile" validation="undefined" %}
  {% /listitem %}
  {% listitem title="city" validation="string" %}
  {% /listitem %}
  {% listitem title="country_code" validation="string" %}
  {% /listitem %}
  {% listitem title="currency" validation="string" %}
  {% /listitem %}
  {% listitem title="delivery_charge_ref" validation="string" %}
  {% /listitem %}
  {% listitem title="delivery_price_participation_ratio" validation="double" %}
  {% /listitem %}
  {% listitem title="delivery_service_type_ref" validation="string" %}
  {% /listitem %}
  {% listitem title="delivery_url" validation="string" %}
  {% /listitem %}
  {% listitem title="dinner_service" validation="undefined" %}
  {% /listitem %}
  {% listitem title="email" validation="string" %}
  {% /listitem %}
  {% listitem title="facebook" validation="string" %}
  {% /listitem %}
  {% listitem title="youtube" validation="string" %}
  {% /listitem %}
  {% listitem title="groups_list" validation="string" %}
  Slugs of groups delimeted by comma.
  {% /listitem %}
  {% listitem title="has_catering" validation="undefined" %}
  {% /listitem %}
  {% listitem title="has_join_the_queue" validation="undefined" %}
  {% /listitem %}
  {% listitem title="has_private_events" validation="undefined" %}
  {% /listitem %}
  {% listitem title="has_reservations" validation="undefined" %}
  {% /listitem %}
  {% listitem title="instagram" validation="string" %}
  {% /listitem %}
  {% listitem title="live_info" validation="string" %}
  {% /listitem %}
  {% listitem title="logo" validation="file" %}
  {% /listitem %}
  {% listitem title="lunch_service" validation="undefined" %}
  {% /listitem %}
  {% listitem title="max_reservation_size" validation="integer" %}
  {% /listitem %}
  {% listitem title="min_amount_for_delivery_cents" validation="integer" %}
  {% /listitem %}
  {% listitem title="min_time_before_reservation" validation="integer" %}
  Minimum time before creating a reservation expressed in seconds
  {% /listitem %}
  {% listitem title="name" validation="string" %}
  {% /listitem %}
  {% listitem title="online_booking_url" validation="string" %}
  {% /listitem %}
  {% listitem title="owner_role" validation="string" %}
  {% /listitem %}
  {% listitem title="phone" validation="string" %}
  {% /listitem %}
  {% listitem title="phone_country_code" validation="string" %}
  {% /listitem %}
  {% listitem title="phone_country_prefix" validation="string" %}
  {% /listitem %}
  {% listitem title="post_code" validation="string" %}
  {% /listitem %}
  {% listitem title="price_per_person" validation="string" %}
  {% /listitem %}
  {% listitem title="region_code" validation="string" %}
  {% /listitem %}
  {% listitem title="secret_code" validation="string" %}
  {% /listitem %}
  {% listitem title="snack_service" validation="undefined" %}
  {% /listitem %}
  {% listitem title="state" validation="string" %}
  {% /listitem %}
  {% listitem title="street" validation="string" %}
  {% /listitem %}
  {% listitem title="street_number" validation="string" %}
  {% /listitem %}
  {% listitem title="stripe_currency" validation="string" %}
  {% /listitem %}
  {% listitem title="stripe_payment_ref" validation="string" %}
  {% /listitem %}
  {% listitem title="eat_in_ref" validation="string" %}
  {% /listitem %}
  {% listitem title="tagline" validation="string" %}
  {% /listitem %}
  {% listitem title="takeaway_service_type_ref" validation="string" %}
  {% /listitem %}
  {% listitem title="takeaway_url" validation="string" %}
  {% /listitem %}
  {% listitem title="time_of_stay" validation="integer" %}
  Default time of staying in restaurant expressed in seconds
  {% /listitem %}
  {% listitem title="time_slots" validation="integer" %}
  Time specifying available hours for booking expressed in seconds
  {% /listitem %}
  {% listitem title="visible_in_lefood" validation="undefined" %}
  {% /listitem %}
  {% listitem title="website" validation="string" %}
  {% /listitem %}
  {% /list %}
  {% /listitem %}
  {% /list %}
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "POST", path: "/api/v1/businesses"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/businesses`, {
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
  # Update Business
  Update a Business
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Update a Business by specific business `id`. You can retrieve this `id` from ...
  {% /listitem %}
  {% listitem title="data" validation="formData, object" type="Required" %}
  Form Data needed when creating a business record for current user.
  {% list isChild=true %}
  {% listitem title="id" validation="string" type="Required" %}
  Provide Business `id`.
  {% /listitem %}
  {% listitem title="type" validation="string" type="Required" %}
  Provide Business `type`. Current selection is only **businesses**.
  {% /listitem %}
  {% listitem title="attributes" validation="formData, object" %}
  Attributes object with a few **required** fields.
  {% list isChild=true %}
  {% listitem title="allow_pickup" validation="undefined" %}
  {% /listitem %}
  {% listitem title="auto_accept_orders" validation="undefined" %}
  {% /listitem %}
  {% listitem title="auto_accept_booking" validation="undefined" %}
  {% /listitem %}
  {% listitem title="order_business_web_notifications_enabled" validation="undefined" %}
  {% /listitem %}
  {% listitem title="reservation_business_web_notifications_enabled" validation="undefined" %}
  {% /listitem %}
  {% listitem title="orkestro_delivery_confirmation_enabled" validation="undefined" %}
  {% /listitem %}
  {% listitem title="available_in_lefood" validation="undefined" %}
  {% /listitem %}
  {% listitem title="average_delivery_time" validation="integer" %}
  {% /listitem %}
  {% listitem title="average_waiting_time" validation="integer" %}
  {% /listitem %}
  {% listitem title="bill_url" validation="string" %}
  {% /listitem %}
  {% listitem title="bio" validation="string" %}
  {% /listitem %}
  {% listitem title="breakfast_service" validation="undefined" %}
  {% /listitem %}
  {% listitem title="brunch_service" validation="undefined" %}
  {% /listitem %}
  {% listitem title="cafe_service" validation="undefined" %}
  {% /listitem %}
  {% listitem title="can_pay_with_cards" validation="undefined" %}
  {% /listitem %}
  {% listitem title="can_pay_with_cash" validation="undefined" %}
  {% /listitem %}
  {% listitem title="can_pay_with_mobile" validation="undefined" %}
  {% /listitem %}
  {% listitem title="city" validation="string" %}
  {% /listitem %}
  {% listitem title="country_code" validation="string" %}
  {% /listitem %}
  {% listitem title="currency" validation="string" %}
  {% /listitem %}
  {% listitem title="delivery_charge_ref" validation="string" %}
  {% /listitem %}
  {% listitem title="delivery_price_participation_ratio" validation="double" %}
  {% /listitem %}
  {% listitem title="delivery_service_type_ref" validation="string" %}
  {% /listitem %}
  {% listitem title="delivery_url" validation="string" %}
  {% /listitem %}
  {% listitem title="dinner_service" validation="undefined" %}
  {% /listitem %}
  {% listitem title="email" validation="string" %}
  {% /listitem %}
  {% listitem title="facebook" validation="string" %}
  {% /listitem %}
  {% listitem title="youtube" validation="string" %}
  {% /listitem %}
  {% listitem title="groups_list" validation="string" %}
  Slugs of groups delimeted by comma.
  {% /listitem %}
  {% listitem title="has_catering" validation="undefined" %}
  {% /listitem %}
  {% listitem title="has_join_the_queue" validation="undefined" %}
  {% /listitem %}
  {% listitem title="has_private_events" validation="undefined" %}
  {% /listitem %}
  {% listitem title="has_reservations" validation="undefined" %}
  {% /listitem %}
  {% listitem title="instagram" validation="string" %}
  {% /listitem %}
  {% listitem title="live_info" validation="string" %}
  {% /listitem %}
  {% listitem title="logo" validation="file" %}
  {% /listitem %}
  {% listitem title="lunch_service" validation="undefined" %}
  {% /listitem %}
  {% listitem title="max_reservation_size" validation="integer" %}
  {% /listitem %}
  {% listitem title="min_amount_for_delivery_cents" validation="integer" %}
  {% /listitem %}
  {% listitem title="min_time_before_reservation" validation="integer" %}
  Minimum time before creating a reservation expressed in seconds
  {% /listitem %}
  {% listitem title="name" validation="string" %}
  {% /listitem %}
  {% listitem title="online_booking_url" validation="string" %}
  {% /listitem %}
  {% listitem title="owner_role" validation="string" %}
  {% /listitem %}
  {% listitem title="phone" validation="string" %}
  {% /listitem %}
  {% listitem title="phone_country_code" validation="string" %}
  {% /listitem %}
  {% listitem title="phone_country_prefix" validation="string" %}
  {% /listitem %}
  {% listitem title="post_code" validation="string" %}
  {% /listitem %}
  {% listitem title="price_per_person" validation="string" %}
  {% /listitem %}
  {% listitem title="region_code" validation="string" %}
  {% /listitem %}
  {% listitem title="secret_code" validation="string" %}
  {% /listitem %}
  {% listitem title="snack_service" validation="undefined" %}
  {% /listitem %}
  {% listitem title="state" validation="string" %}
  {% /listitem %}
  {% listitem title="street" validation="string" %}
  {% /listitem %}
  {% listitem title="street_number" validation="string" %}
  {% /listitem %}
  {% listitem title="stripe_currency" validation="string" %}
  {% /listitem %}
  {% listitem title="stripe_payment_ref" validation="string" %}
  {% /listitem %}
  {% listitem title="eat_in_ref" validation="string" %}
  {% /listitem %}
  {% listitem title="tagline" validation="string" %}
  {% /listitem %}
  {% listitem title="takeaway_service_type_ref" validation="string" %}
  {% /listitem %}
  {% listitem title="takeaway_url" validation="string" %}
  {% /listitem %}
  {% listitem title="time_of_stay" validation="integer" %}
  Default time of staying in restaurant expressed in seconds
  {% /listitem %}
  {% listitem title="time_slots" validation="integer" %}
  Time specifying available hours for booking expressed in seconds
  {% /listitem %}
  {% listitem title="visible_in_lefood" validation="undefined" %}
  {% /listitem %}
  {% listitem title="website" validation="string" %}
  {% /listitem %}
  {% /list %}
  {% /listitem %}
  {% /list %}
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "PATCH", path: "/api/v1/businesses/{id}"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/businesses/${id}`, {
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
  # Delete Business
  Delete a Business.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Delete a Business by specific business `id`. You can retrieve this `id` from ...
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "DELETE", path: "/api/v1/businesses/{id}"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/businesses/${id}`, {
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
{% codeBlock title="RESPONSE" collapsable=true %}
  ```json
  ```
{% /codeBlock %}

{% /layoutTwoCol %}
{% /section %}