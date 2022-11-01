---
title: Business External
---

## {% $markdoc.frontmatter.title %}

{% table %}
* ### **Parameters**
---
* Parameters {% align="left" %}
  {% listitem title="page" type="Optional" /%}
  {% listitem title="per_page" type="Optional" /%}
  {% listitem title="id" type="Required" /%}
*
*
  ### Example Request GET /api/v1/businesses/{id}/external_service_links
  ```bash
      {
          const res = await fetch(`${BASE_URL}/api/v1/businesses/{id}/external_service_links`, {
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
      "id": "08a80fc8-a6b6-4cf5-842c-c79173b66c54",
      "type": "external-service-links",
      "links": {
        "self": "/external-service-links/08a80fc8-a6b6-4cf5-842c-c79173b66c54"
      },
      "attributes": {
        "business-id": "0eb74ac0-c750-4eee-a467-282bdb0e23a4",
        "category": "online_reviews",
        "external-service-id": "7ea5c57d-097b-4b2d-bceb-d09af0bc4766",
        "logo": {
          "url": "https://foodetective-staging-backend-data.s3.amazonaws.com/uploads/external_service/logo/7ea5c57d-097b-4b2d-bceb-d09af0bc4766/3411e12e-e934-4e49-b987-c65be06308fe.jpeg",
          "thumb": {
            "url": "https://foodetective-staging-backend-data.s3.amazonaws.com/uploads/external_service/logo/7ea5c57d-097b-4b2d-bceb-d09af0bc4766/thumb_3411e12e-e934-4e49-b987-c65be06308fe.jpeg"
          }
        },
        "name": "Tripadvisor",
        "service-url": "https://www.tripadvisor.com"
      }
    },
    {
      "id": "e800612e-8418-47de-a11b-3bca2177bb0d",
      "type": "external-service-links",
      "links": {
        "self": "/external-service-links/e800612e-8418-47de-a11b-3bca2177bb0d"
      },
      "attributes": {
        "business-id": "0eb74ac0-c750-4eee-a467-282bdb0e23a4",
        "category": "food_waste",
        "external-service-id": "f310ff3b-7d94-45c5-b8aa-51b3be82a3ce",
        "logo": {
          "url": "https://foodetective-staging-backend-data.s3.amazonaws.com/uploads/external_service/logo/f310ff3b-7d94-45c5-b8aa-51b3be82a3ce/c8718174-cbd3-4203-9e67-fc08c48aa70a.png",
          "thumb": {
            "url": "https://foodetective-staging-backend-data.s3.amazonaws.com/uploads/external_service/logo/f310ff3b-7d94-45c5-b8aa-51b3be82a3ce/thumb_c8718174-cbd3-4203-9e67-fc08c48aa70a.png"
          }
        },
        "name": "Garbage Buddy1",
        "service-url": "https://gBuddy.com"
      }
    },
    {
      "id": "c2580630-5490-4aa7-80ad-146337a4b809",
      "type": "external-service-links",
      "links": {
        "self": "/external-service-links/c2580630-5490-4aa7-80ad-146337a4b809"
      },
      "attributes": {
        "business-id": "0eb74ac0-c750-4eee-a467-282bdb0e23a4",
        "category": "booking",
        "external-service-id": "a5057831-57e9-4a8e-b901-2c94f5fb6f94",
        "logo": {
          "url": "https://foodetective-staging-backend-data.s3.amazonaws.com/uploads/external_service/logo/a5057831-57e9-4a8e-b901-2c94f5fb6f94/22cda137-14b3-40f0-9a40-51145e0f86c8.jpeg",
          "thumb": {
            "url": "https://foodetective-staging-backend-data.s3.amazonaws.com/uploads/external_service/logo/a5057831-57e9-4a8e-b901-2c94f5fb6f94/thumb_22cda137-14b3-40f0-9a40-51145e0f86c8.jpeg"
          }
        },
        "name": "the fork",
        "service-url": "https://www.google.com"
      }
    }
  ],
  "meta": {
    "total-count": 3,
    "total-pages": 1
  }
}
  ```
*
{% /table %}