---
title: Businesses Reviews
---

## {% $markdoc.frontmatter.title %}

### GET /api/v1/businesses/{id}/reviews
{% table %}
---
* Parameters {% align="left" %}
  {% listitem title="sort" type="Optional" /%}
  {% listitem title="page" type="Optional" /%}
  {% listitem title="per_page" type="Optional" /%}
  {% listitem title="id" type="Required" /%}
* Example {% align="left" %}
  ```bash
      {
          const res = await fetch(`${BASE_URL}/api/v1/businesses/{id}/reviews`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
                }});
          const data = await res.json();
    }
  ```
  Response
  ```bash
  {
    "data": [
      {
        "id": "64b1f6c9-8cfb-4c53-9dca-ea1aec6460de",
        "type": "reviews",
        "links": {
          "self": "/reviews/64b1f6c9-8cfb-4c53-9dca-ea1aec6460de"
        },
        "attributes": {
          "atmosphere-review": "The best one!",
          "atmosphere-review-feedback": null,
          "atmosphere-review-score": "6.0",
          "author-name": "Lukasz",
          "business-city": "Paris",
          "business-main-photo": {
            "url": "https://foodetective-staging-backend-data.s3.amazonaws.com/uploads/picture/photo/846219ae-bf08-4ba8-b726-b557c3128ae9/8bd57a06-0be5-4527-b4f5-8468ec8255f5.jpeg",
            "desktop": {
              "url": "https://foodetective-staging-backend-data.s3.amazonaws.com/uploads/picture/photo/846219ae-bf08-4ba8-b726-b557c3128ae9/desktop_8bd57a06-0be5-4527-b4f5-8468ec8255f5.jpeg"
            },
            "tablet": {
              "url": "https://foodetective-staging-backend-data.s3.amazonaws.com/uploads/picture/photo/846219ae-bf08-4ba8-b726-b557c3128ae9/tablet_8bd57a06-0be5-4527-b4f5-8468ec8255f5.jpeg"
            },
            "thumb": {
              "url": "https://foodetective-staging-backend-data.s3.amazonaws.com/uploads/picture/photo/846219ae-bf08-4ba8-b726-b557c3128ae9/thumb_8bd57a06-0be5-4527-b4f5-8468ec8255f5.jpeg"
            }
          },
          "business-name": "Le Cinq",
          "cleanliness-review": "Unbelivebly clean!",
          "cleanliness-review-feedback": null,
          "cleanliness-review-score": "6.0",
          "comfort-score": 6,
          "concept-review": "I like it",
          "concept-review-feedback": null,
          "concept-review-score": "6.0",
          "cooking-technique-score": 7,
          "created-at": "2021-06-02T13:15:04.785Z",
          "decoration-score": 6,
          "detected-language": "en",
          "dishes-score": 6,
          "experience-score": 6,
          "final-score": "7.6",
          "food-review": "Great food, all perfect!",
          "food-review-feedback": "Awesome",
          "food-review-score": "8.8",
          "kind-of-service": null,
          "kindness-score": 10,
          "newness-score": 6,
          "perfect-for": [],
          "place-score": 6,
          "presentation-of-dishes-score": 10,
          "presentation-score": 6,
          "price-range": 4,
          "pricing-review": "It's expensive!",
          "pricing-review-feedback": null,
          "pricing-review-score": "6.0",
          "professionalism-score": 10,
          "quality-of-products-score": 9,
          "quality-to-price-score": 6,
          "rapidity-score": 8,
          "service-review": "Best one",
          "service-review-feedback": null,
          "service-review-score": "9.3",
          "slug": "le-cinqs-2-great-place-but-expensive",
          "sonority": null,
          "state": "published",
          "summary": "I recomend it",
          "table-style-score": 6,
          "tables-score": 6,
          "taste-score": 9,
          "title": "Great place, but expensive",
          "visit-for": null
        },
        "relationships": {
          "user": {
            "links": {
              "self": "/reviews/64b1f6c9-8cfb-4c53-9dca-ea1aec6460de/relationships/user",
              "related": "/reviews/64b1f6c9-8cfb-4c53-9dca-ea1aec6460de/user"
            }
          },
          "business": {
            "links": {
              "self": "/reviews/64b1f6c9-8cfb-4c53-9dca-ea1aec6460de/relationships/business",
              "related": "/reviews/64b1f6c9-8cfb-4c53-9dca-ea1aec6460de/business"
            }
          },
          "pictures": {
            "links": {
              "self": "/reviews/64b1f6c9-8cfb-4c53-9dca-ea1aec6460de/relationships/pictures",
              "related": "/reviews/64b1f6c9-8cfb-4c53-9dca-ea1aec6460de/pictures"
            }
          },
          "products": {
            "links": {
              "self": "/reviews/64b1f6c9-8cfb-4c53-9dca-ea1aec6460de/relationships/products",
              "related": "/reviews/64b1f6c9-8cfb-4c53-9dca-ea1aec6460de/products"
            }
          }
        }
      },
    ],
    "meta": {
      "total-count": 3,
      "total-pages": 1
    }
  }
```
{% /table %}
