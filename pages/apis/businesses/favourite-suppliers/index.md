---
title: Business Favourite Suppliers
---
{% section %}
{% layoutTwoCol %}

{% methodCopy %}
{% methodInfo %}
  # {% $markdoc.frontmatter.title %}
  Return favorite suppliers for specific business.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Return favorite suppliers by the specific business `id`. You can retrieve this `id` from ...
  {% /listitem %}
  {% listitem title="page" validation="query integer" %}	
  Page offset to fetch.
  {% /listitem %}
  {% listitem title="per_page" validation="query integer" %}
  Number of results to return per page.
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "GET", path: "/api/v1/businesses/{id}/favorite_suppliers"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/businesses/${id}/favorite_suppliers`, {
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
        "id": "67df0724-eef7-4252-a468-e145a5324f0d",
        "type": "suppliers",
        "links": {
          "self": "/suppliers/67df0724-eef7-4252-a468-e145a5324f0d"
        },
        "attributes": {
          "name": "barilla",
          "average-delivery": null,
          "logo": {
            "url": "https://foodetective-staging-backend-data.s3.amazonaws.com/uploads/supplier/logo/67df0724-eef7-4252-a468-e145a5324f0d/2d88b1f0-a19b-4190-8b39-bac843e363b3.png"
          },
          "description": null,
          "email": null,
          "invoice-emails": ["test@test.com"],
          "phone": null,
          "cities": [],
          "country-codes": [],
          "categories": ["Pasta"],
          "favorite-id": "b34b42ad-19d7-4a60-8a89-37676a31d607"
        }
      },
      {
        "id": "75386891-4c46-476f-85e5-5981235b3eb3",
        "type": "suppliers",
        "links": {
          "self": "/suppliers/75386891-4c46-476f-85e5-5981235b3eb3"
        },
        "attributes": {
          "name": "Lovato Long Supplier Name",
          "average-delivery": null,
          "logo": {
            "url": "https://foodetective-staging-backend-data.s3.amazonaws.com/uploads/supplier/logo/75386891-4c46-476f-85e5-5981235b3eb3/54e61465-f620-480a-99f4-3a23c58096b9.png"
          },
          "description": "Very big FMCG supplier",
          "email": null,
          "invoice-emails": ["maxence@foodetective.co"],
          "phone": null,
          "cities": [],
          "country-codes": [],
          "categories": ["beer", "fruits and veggies", "Beverages"],
          "favorite-id": "efb81f91-0f6b-4124-8814-078a9eabc07e"
        }
      }
    ],
    "meta": {
      "total-count": 2,
      "total-pages": 1
    }
  }
  ```
{% /codeBlock %}  

{% /layoutTwoCol %}
{% /section %}