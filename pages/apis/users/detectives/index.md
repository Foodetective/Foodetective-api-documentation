---
title: Users
---
{% section %}
{% layoutTwoCol %}

{% methodCopy %}
{% methodInfo %}
  # Detectives
  Return random users that are accepted food detectives with at least 1 review, but when there are not enough records - add to them also these without any reviews.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="include" validation="query string" %}
  Include associations (delimited with comma). Available associations: specializations
  {% /listitem %}

  {% listitem title="filter" validation="formData, object" %}
  Form Data needed when filtering.
  {% list isChild=true %}
  {% listitem title="city" validation="string" %}
  User city.
  {% /listitem %}
  {% listitem title="exclude_cities" validation="string[]" %}
  Cities to exclude.
  {% /listitem %}
  {% /list %}
  {% /listitem %}

  {% listitem title="page" validation="query integer" %}
  Page offset to fetch.
  {% /listitem %}
  {% listitem title="per_page" validation="query integer" %}
  Number of results to return per page.
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "GET", path: "/api/v1/users/detectives"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/users/detectives`, {
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
  # Top Detectives
  Return all accepted food detectives sorted by published_reviews_count in descending order.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="include" validation="query string" %}
  Include associations (delimited with comma). Available associations: specializations
  {% /listitem %}

  {% listitem title="filter" validation="formData, object" %}
  Form Data needed when filtering.
  {% list isChild=true %}
  {% listitem title="city" validation="string" %}
  User city.
  {% /listitem %}
  {% listitem title="exclude_cities" validation="string[]" %}
  Cities to exclude.
  {% /listitem %}
  {% /list %}
  {% /listitem %}

  {% listitem title="page" validation="query integer" %}
  Page offset to fetch.
  {% /listitem %}
  {% listitem title="per_page" validation="query integer" %}
  Number of results to return per page.
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "GET", path: "/api/v1/users/detectives/top"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/users/detectives/top`, {
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
