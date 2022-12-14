---
title: Intelligence Notifications
---
{% section %}
{% layoutTwoCol %}

{% methodCopy %}
{% methodInfo %}
  # {% $markdoc.frontmatter.title %}
  Returns notifications for given Business.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="business_uuid" validation="query string" %}
  Related Business UUID.
  {% /listitem %}
  {% listitem title="sort" validation="query string" %}
  Sort ascending or descending order.
  {% /listitem %}
  {% listitem title="filter[notification_type]" validation="query string" %}
  Notification type options are; **tips** and **promotion**.
  {% /listitem %}
  {% listitem title="filter[country_codes]" validation="query string[]" %}
  Provide a Array of Country codes that formated with **ISO Alpha-2**.
  {% /listitem %}
  {% listitem title="page" validation="query integer" %}
  Page offset to fetch.
  {% /listitem %}
  {% listitem title="per_page" validation="query integer" %}
  Number of results to return per page.
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "GET", path: "/api/v1/intelligence_notifications"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
  {
    const res = await fetch(`${BASE_URL}/api/v1/intelligence_notifications`, {
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
        "id": "adc1d4b2-0be4-417d-87c7-07cb7417ffb4",
        "type": "intelligence-notifications",
        "links": {
          "self": "/intelligence-notifications/adc1d4b2-0be4-417d-87c7-07cb7417ffb4"
        },
        "attributes": {
          "notification-type": "promotion",
          "title": "New partner",
          "subtitle": "Let's fight food waste together",
          "description": "Foodetective is partnering up with Too Good To Go to fight foodwaste globally. Let's help reducing foodwast by offering your client the possibility to order food which is about to expire at a cheaper rate.",
          "logo": {
            "url": "https://foodetective-staging-backend-data.s3.amazonaws.com/uploads/intelligence_notification/logo/adc1d4b2-0be4-417d-87c7-07cb7417ffb4/70fe48b7-0175-4b45-9792-abbaa6732d39.png"
          },
          "country-codes": [],
          "redirection-text": "Try Too Good To Go now!",
          "redirection-url": "https://toogoodtogo.com/en-us",
          "video-url": "https://www.youtube.com/watch?v=BMjc5mPVTbY"
        }
      }
    ],
    "meta": {
      "total-count": 9,
      "total-pages": 3
    }
  }
  ```
{% /codeBlock %}

{% /layoutTwoCol %}
{% /section %}
