---
title: Business Invoice
---
{% section %}
{% layoutTwoCol %}

{% methodCopy %}
{% methodInfo %}
  # {% $markdoc.frontmatter.title %}
  Return all invoices for specific business.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Return all invoices by the specific business `id`. You can retrieve this `id` from ...
  {% /listitem %}
  {% listitem title="sort" validation="query string" %}
  Sort ascending or descending order.
  {% /listitem %}
  {% listitem title="status" validation="query string" %}
  Return invoices by a specific status, possible statuses are the following: **draft**, **open**, **paid**, **void** or **uncollectible**.
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "GET", path: "/api/v1/businesses/{id}/invoices"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/businesses/${id}/invoices`, {
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
    {
    "data": [
      {
        "id": "49694fce-7c55-493c-a4c0-a44bd32dc9e6",
        "type": "invoices",
        "links": {
          "self": "/invoices/49694fce-7c55-493c-a4c0-a44bd32dc9e6"
        },
        "attributes": {
          "amount-cents": 13500,
          "currency": "eur",
          "created-at": "2021-08-27T13:02:50.686Z",
          "pdf-url": "https://pay.stripe.com/invoice/acct_1DQhJVBtvCfXmRIt/test_YWNjdF8xRFFoSlZCdHZDZlhtUkl0LGludnN0X0s3SktHQ1U3RkVuWE5ETTlPd0E5RjdFUERVWXZqc3ksNTc3NTg1NTg0200s5ODFr70/pdf?s=ap",
          "status": "uncollectible",
          "stripe-id": "in_1JT4hqBtvCfXmRItuFsKd2oA"
        }
      },
      {
        "id": "b3550eec-90c6-4c26-82b1-bc19231b0ff6",
        "type": "invoices",
        "links": {
          "self": "/invoices/b3550eec-90c6-4c26-82b1-bc19231b0ff6"
        },
        "attributes": {
          "amount-cents": 118680,
          "currency": "eur",
          "created-at": "2021-09-01T10:09:31.650Z",
          "pdf-url": "https://pay.stripe.com/invoice/acct_1DQhJVBtvCfXmRIt/test_YWNjdF8xRFFoSlZCdHZDZlhtUkl0LGludnN0X0s5OGZYYzRnakxmdjF1VjR2TldSeEtvS3oxMExwTWgsNTc3NTg1NTg020067WeU0Z6/pdf?s=ap",
          "status": "uncollectible",
          "stripe-id": "in_1JUqNrBtvCfXmRItlbxHPPT6"
        }
      },
      {
        "id": "561c733e-4bc5-4d88-a685-f3b1246c28d5",
        "type": "invoices",
        "links": {
          "self": "/invoices/561c733e-4bc5-4d88-a685-f3b1246c28d5"
        },
        "attributes": {
          "amount-cents": 200,
          "currency": "eur",
          "created-at": "2021-11-27T16:22:50.560Z",
          "pdf-url": "https://pay.stripe.com/invoice/acct_1DQhJVBtvCfXmRIt/test_YWNjdF8xRFFoSlZCdHZDZlhtUkl0LF9LZnBLWFZEV3lNd2pPUWFObFhRTFBmWDZQRUxzQ1kwLDU3NzU4NTU50200gZLJDyBw/pdf?s=ap",
          "status": "uncollectible",
          "stripe-id": "in_1K0TfqBtvCfXmRIthgull4mR"
        }
      },
      {
        "id": "0f6c5c74-3030-441e-b162-8c581888838a",
        "type": "invoices",
        "links": {
          "self": "/invoices/0f6c5c74-3030-441e-b162-8c581888838a"
        },
        "attributes": {
          "amount-cents": 10700,
          "currency": "eur",
          "created-at": "2021-10-05T08:11:28.602Z",
          "pdf-url": "https://pay.stripe.com/invoice/acct_1DQhJVBtvCfXmRIt/test_YWNjdF8xRFFoSlZCdHZDZlhtUkl0LF9LTHFSb0NFcG5XYUlNZ2pUSkdGbDNqUDhaaEJPZXJDLDU3NzU4NTU50200vHtHkoVX/pdf?s=ap",
          "status": "uncollectible",
          "stripe-id": "in_1Jh8kGBtvCfXmRItPS8ICXDa"
        }
      },
      {
        "id": "9f4504e0-50d2-42d0-8bed-f2cfb62d7a93",
        "type": "invoices",
        "links": {
          "self": "/invoices/9f4504e0-50d2-42d0-8bed-f2cfb62d7a93"
        },
        "attributes": {
          "amount-cents": null,
          "currency": null,
          "created-at": "2021-12-08T10:01:52.586Z",
          "pdf-url": "https://pay.stripe.com/invoice/acct_1DQhJVBtvCfXmRIt/test_YWNjdF8xRFFoSlZCdHZDZlhtUkl0LF9LanFmVVVtUjdxeEEwTGM4Y1VZUDJkRU5nMlZKaGpMLDU3NzU4NTYw0200NIFtzDdq/pdf?s=ap",
          "status": "draft",
          "stripe-id": "in_1K4MyBBtvCfXmRIth6Ga3jlr"
        }
      }
    ]
  }
  ```
{% /codeBlock %}

{% /layoutTwoCol %}
{% /section %}
