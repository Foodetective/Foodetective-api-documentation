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
  # Create Business
  Create a business record for current user.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="data[type]" validation="formData string" %}
  Provide Business `type`. Current selection is only **businesses**.
  {% /listitem %}
  {% listitem title="data[attributes][average_delivery_time]" validation="formData integer" %}
  {% /listitem %}
  {% listitem title="data[attributes][bill_url]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][bio]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][breakfast_service]" validation="formData undefined" %}
  {% /listitem %}
  {% listitem title="data[attributes][brunch_service]" validation="formData undefined" %}
  {% /listitem %}
  {% listitem title="data[attributes][cafe_service]" validation="formData undefined" %}
  {% /listitem %}
  {% listitem title="data[attributes][can_pay_with_cards]" validation="formData undefined" %}
  {% /listitem %}
  {% listitem title="data[attributes][can_pay_with_cash]" validation="formData undefined" %}
  {% /listitem %}
  {% listitem title="data[attributes][can_pay_with_mobile]" validation="formData undefined" %}
  {% /listitem %}
  {% listitem title="data[attributes][city]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][country_code]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][currency]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][delivery_charge_ref]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][delivery_price_participation_ratio]" validation="formData double" %}
  {% /listitem %}
  {% listitem title="data[attributes][delivery_service_type_ref]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][delivery_url]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][dinner_service]" validation="formData undefined" %}
  {% /listitem %}
  {% listitem title="data[attributes][email]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][facebook]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][youtube]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][groups_list]" validation="formData string" %}
  Slugs of groups delimeted by comma.
  {% /listitem %}
  {% listitem title="data[attributes][has_catering]" validation="formData undefined" %}
  {% /listitem %}
  {% listitem title="data[attributes][has_join_the_queue]" validation="formData undefined" %}
  {% /listitem %}
  {% listitem title="data[attributes][has_private_events]" validation="formData undefined" %}
  {% /listitem %}
  {% listitem title="data[attributes][has_reservations]" validation="formData undefined" %}
  {% /listitem %}
  {% listitem title="data[attributes][instagram]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][live_info]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][logo]" validation="formData file" %}
  {% /listitem %}
  {% listitem title="data[attributes][lunch_service]" validation="formData undefined" %}
  {% /listitem %}
  {% listitem title="data[attributes][max_reservation_size]" validation="formData integer" %}
  {% /listitem %}
  {% listitem title="data[attributes][min_amount_for_delivery_cents]" validation="formData integer" %}
  {% /listitem %}
  {% listitem title="data[attributes][min_time_before_reservation]" validation="formData integer" %}
  Minimum time before creating a reservation expressed in seconds
  {% /listitem %}
  {% listitem title="data[attributes][name]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][online_booking_url]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][owner_role]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][phone]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][phone_country_code]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][phone_country_prefix]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][post_code]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][price_per_person]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][region_code]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][secret_code]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][snack_service]" validation="formData undefined" %}
  {% /listitem %}
  {% listitem title="data[attributes][state]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][street]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][street_number]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][stripe_currency]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][stripe_payment_ref]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][eat_in_ref]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][tagline]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][takeaway_service_type_ref]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][takeaway_url]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][time_of_stay]" validation="formData integer" %}
  Default time of staying in restaurant expressed in seconds
  {% /listitem %}
  {% listitem title="data[attributes][time_slots]" validation="formData integer" %}
  Time specifying available hours for booking expressed in seconds
  {% /listitem %}
  {% listitem title="data[attributes][visible_in_lefood]" validation="formData undefined" %}
  {% /listitem %}
  {% listitem title="data[attributes][website]" validation="formData string" %}
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
  # Update Business
  Update a Business
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Update a Business by specific business `id`. You can retrieve this `id` from ...
  {% /listitem %}
  {% listitem title="data[id]" validation="formData string" type="Required" %}
  Provide Business `id`.
  {% /listitem %}
  {% listitem title="data[type]" validation="formData string" %}
  Provide Business `type`. Current selection is only **businesses**.
  {% /listitem %}
  {% listitem title="data[attributes][allow_pickup]" validation="formData undefined" %}
  {% /listitem %}
  {% listitem title="data[attributes][auto_accept_orders]" validation="formData undefined" %}
  {% /listitem %}
  {% listitem title="data[attributes][auto_accept_booking]" validation="formData undefined" %}
  {% /listitem %}
  {% listitem title="data[attributes][order_business_web_notifications_enabled]" validation="formData undefined" %}
  {% /listitem %}
  {% listitem title="data[attributes][reservation_business_web_notifications_enabled]" validation="formData undefined" %}
  {% /listitem %}
  {% listitem title="data[attributes][orkestro_delivery_confirmation_enabled]" validation="formData undefined" %}
  {% /listitem %}
  {% listitem title="data[attributes][available_in_lefood]" validation="formData undefined" %}
  {% /listitem %}
  {% listitem title="data[attributes][average_delivery_time]" validation="formData integer" %}
  {% /listitem %}
  {% listitem title="data[attributes][average_waiting_time]" validation="formData integer" %}
  {% /listitem %}
  {% listitem title="data[attributes][bill_url]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][bio]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][breakfast_service]" validation="formData undefined" %}
  {% /listitem %}
  {% listitem title="data[attributes][brunch_service]" validation="formData undefined" %}
  {% /listitem %}
  {% listitem title="data[attributes][cafe_service]" validation="formData undefined" %}
  {% /listitem %}
  {% listitem title="data[attributes][can_pay_with_cards]" validation="formData undefined" %}
  {% /listitem %}
  {% listitem title="data[attributes][can_pay_with_cash]" validation="formData undefined" %}
  {% /listitem %}
  {% listitem title="data[attributes][can_pay_with_mobile]" validation="formData undefined" %}
  {% /listitem %}
  {% listitem title="data[attributes][city]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][country_code]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][currency]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][delivery_charge_ref]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][delivery_price_participation_ratio]" validation="formData double" %}
  {% /listitem %}
  {% listitem title="data[attributes][delivery_service_type_ref]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][delivery_url]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][dinner_service]" validation="formData undefined" %}
  {% /listitem %}
  {% listitem title="data[attributes][email]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][facebook]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][youtube]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][groups_list]" validation="formData string" %}
  Slugs of groups delimeted by comma.
  {% /listitem %}
  {% listitem title="data[attributes][has_catering]" validation="formData undefined" %}
  {% /listitem %}
  {% listitem title="data[attributes][has_join_the_queue]" validation="formData undefined" %}
  {% /listitem %}
  {% listitem title="data[attributes][has_private_events]" validation="formData undefined" %}
  {% /listitem %}
  {% listitem title="data[attributes][has_reservations]" validation="formData undefined" %}
  {% /listitem %}
  {% listitem title="data[attributes][instagram]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][live_info]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][logo]" validation="formData file" %}
  {% /listitem %}
  {% listitem title="data[attributes][lunch_service]" validation="formData undefined" %}
  {% /listitem %}
  {% listitem title="data[attributes][max_reservation_size]" validation="formData integer" %}
  {% /listitem %}
  {% listitem title="data[attributes][min_amount_for_delivery_cents]" validation="formData integer" %}
  {% /listitem %}
  {% listitem title="data[attributes][min_time_before_reservation]" validation="formData integer" %}
  Minimum time before creating a reservation expressed in seconds
  {% /listitem %}
  {% listitem title="data[attributes][name]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][online_booking_url]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][owner_role]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][phone]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][phone_country_code]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][phone_country_prefix]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][post_code]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][price_per_person]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][region_code]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][secret_code]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][snack_service]" validation="formData undefined" %}
  {% /listitem %}
  {% listitem title="data[attributes][state]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][street]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][street_number]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][stripe_currency]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][stripe_payment_ref]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][eat_in_ref]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][tagline]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][takeaway_service_type_ref]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][takeaway_url]" validation="formData string" %}
  {% /listitem %}
  {% listitem title="data[attributes][time_of_stay]" validation="formData integer" %}
  Default time of staying in restaurant expressed in seconds
  {% /listitem %}
  {% listitem title="data[attributes][time_slots]" validation="formData integer" %}
  Time specifying available hours for booking expressed in seconds
  {% /listitem %}
  {% listitem title="data[attributes][visible_in_lefood]" validation="formData undefined" %}
  {% /listitem %}
  {% listitem title="data[attributes][website]" validation="formData string" %}
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
{% codeBlock title="RESPONSE" %}
  ```json
  ```
{% /codeBlock %}

{% /layoutTwoCol %}
{% /section %}