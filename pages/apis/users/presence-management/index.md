---
title: Presence Management
---
{% section %}
{% layoutTwoCol %}

{% methodCopy %}
{% methodInfo %}
  # {% $markdoc.frontmatter.title %}
  Search for the online presence stats of your businesses.
{% /methodInfo %}
{% list title="Parameters" %}

  {% listitem title="data" validation="formData, object" type="Required" %}
  Form Data needed when searching for the online presence stats of your businesses.
  {% list isChild=true %}
  {% listitem title="partoo_business_ids" validation="Array[string]" %}
  Online presence for given `business id's`.
  {% /listitem %}
  {% listitem title="dimensions" validation="Array[string]" %}
  How data should be aggregated, **values:** `[day, week, month, year]`
  {% /listitem %}

  {% /list %}
  {% /listitem %}


{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "GET", path: "/api/v1/users/me"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
  {
    const res = await fetch(`${BASE_URL}/api/v1/users/me`, {
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
  {
    "data": [
      {
        "date": "2021-09-06",
        "business_id": "636120f0588c2e6ef800d072",
        "queries_direct": 0,
        "queries_indirect": 0,
        "views_maps": 0,
        "views_search": 0,
        "actions_website": 0,
        "actions_phone": 0,
        "actions_driving_directions": 0,
        "bucket": "week"
      }
    ]
  }
  ```
{% /codeBlock %}

{% /layoutTwoCol %}
{% /section %}
