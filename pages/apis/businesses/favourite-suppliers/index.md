---
title: Business Favourite Suppliers
---

## {% $markdoc.frontmatter.title %}

### GET /api/v1/businesses/{id}/favorite_suppliers
{% table %}
---
* Parameters {% align="left" %}
  {% listitem title="page" type="Optional" /%}
  {% listitem title="per_page" type="Optional" /%}
  {% listitem title="id" type="Required" /%}
* Example {% align="left" %}
  ```bash
      {
          const res = await fetch(`${BASE_URL}/api/v1/businesses/{id}/favorite_suppliers`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
                }});
          const data = await res.json();
    }
  ```
  ### Response
  ```bash
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
{% /table %}