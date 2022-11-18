---
title: Reviews
---
{% section %}
{% layoutTwoCol %}

{% methodCopy %}
{% methodInfo %}
  # {% $markdoc.frontmatter.title %}
  Returns latest published reviews.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="include" validation="query string" %}
  Include associations (delimited with comma). Available associations: user, business, pictures, products.
  {% /listitem %}
  {% listitem title="sort" validation="query string" %}
  Sort ascending or descending order.
  {% /listitem %}
  {% listitem title="page" validation="query integer" %}
  Page offset to fetch.
  {% /listitem %}
  {% listitem title="per_page" validation="query integer" %}
  Number of results to return per page.
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "GET", path: "/api/v1/reviews"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/reviews`, {
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
  # Review by id
  Return a Review.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Return a Delivery by specific `id`.
  {% /listitem %}
  {% listitem title="include" validation="query string" %}
  Include associations (delimited with comma). Available associations: user, business, pictures, products.
  {% /listitem %}
  {% listitem title="language" validation="query string" %}
  Return results of Business by language **ISO 639‑1** code.
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "GET", path: "/api/v1/reviews/{id}"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/reviews/${id}`, {
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
  # Request Object
  The required Request Object used for **CRUD**. The only difference is with [Create Review](#create-review) no review `id` needs to be provided.
{% /methodInfo %}
{% /methodCopy %}

{% codeBlock title="REQUEST OBJECT" collapsable=true %}
  ```json
  {
    "data": {
      "id": "62a05bd2-2f0e-4bac-8f8b-63947f4df16f",
      "type": "reviews",
      "attributes": {
        "atmosphere_review": "",
        "atmosphere_review_feedback": "",
        "cleanliness_review": "",
        "cleanliness_review_feedback": "",
        "comfort_score": "",
        "concept_review": "",
        "concept_review_feedback": "",
        "cooking_technique_score": "",
        "decoration_score": "",
        "dishes_score": "",
        "experience_score": "",
        "food_review": "",
        "food_review_feedback": "",
        "kind_of_service": "takeaway",
        "kindness_score": "",
        "newness_score": "",
        "perfect_for": [""],
        "place_score": "",
        "presentation_of_dishes_score": "",
        "presentation_score": "",
        "price_range": "",
        "pricing_review": "",
        "pricing_review_feedback": "",
        "professionalism_score": "",
        "quality_of_products_score": "",
        "quality_to_price_score": "",
        "rapidity_score": "",
        "service_review": "",
        "service_review_feedback": "",
        "state": "",
        "sonority": "quiet",
        "summary": "",
        "table_style_score": "",
        "tables_score": "",
        "taste_score": "",
        "title": "",
        "visit_for": "",
      }
    }
  }
  ```
{% /codeBlock %}

{% /layoutTwoCol %}
{% /section %}

- - -

{% section %}
{% layoutTwoCol %}

{% methodCopy %}
{% methodInfo %}
  # Create Review
  Create a Review.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="data" validation="formData, object" type="Required" %}
  Form Data needed when creating a new Review.
  {% list isChild=true %}
  {% listitem title="type" validation="string" type="Required" %}
  Provide Review `type`. Current selection is only **reviews**.
  {% /listitem %}

  {% listitem title="attributes" validation="formData, object" %}
  Attributes object.
  {% list isChild=true %}
  {% listitem title="atmosphere_review" validation="string" %}
  {% /listitem %}
  {% listitem title="atmosphere_review_feedback" validation="string" %}
  {% /listitem %}
  {% listitem title="cleanliness_review" validation="string" %}
  {% /listitem %}
  {% listitem title="cleanliness_review_feedback" validation="string" %}
  {% /listitem %}
  {% listitem title="comfort_score" validation="string" %}
  {% /listitem %}
  {% listitem title="concept_review" validation="string" %}
  {% /listitem %}
  {% listitem title="concept_review_feedback" validation="string" %}
  {% /listitem %}
  {% listitem title="cooking_technique_score" validation="string" %}
  {% /listitem %}
  {% listitem title="decoration_score" validation="string" %}
  {% /listitem %}
  {% listitem title="dishes_score" validation="string" %}
  {% /listitem %}
  {% listitem title="experience_score" validation="string" %}
  {% /listitem %}
  {% listitem title="food_review" validation="string" %}
  {% /listitem %}
  {% listitem title="food_review_feedback" validation="string" %}
  {% /listitem %}
  {% listitem title="kind_of_service" validation="string" %}
  Available values: **eat_in**, **takeaway**, **delivery**.
  {% /listitem %}
  {% listitem title="kindness_score" validation="string" %}
  {% /listitem %}
  {% listitem title="newness_score" validation="string" %}
  {% /listitem %}
  {% listitem title="perfect_for" validation="string[]" %}
  {% /listitem %}
  {% listitem title="place_score" validation="string" %}
  {% /listitem %}
  {% listitem title="presentation_of_dishes_score" validation="string" %}
  {% /listitem %}
  {% listitem title="presentation_score" validation="string" %}
  {% /listitem %}
  {% listitem title="price_range" validation="string" %}
  {% /listitem %}
  {% listitem title="pricing_review" validation="string" %}
  {% /listitem %}
  {% listitem title="pricing_review_feedback" validation="string" %}
  {% /listitem %}
  {% listitem title="professionalism_score" validation="string" %}
  {% /listitem %}
  {% listitem title="quality_of_products_score" validation="string" %}
  {% /listitem %}
  {% listitem title="quality_to_price_score" validation="string" %}
  {% /listitem %}
  {% listitem title="rapidity_score" validation="string" %}
  {% /listitem %}
  {% listitem title="service_review" validation="string" %}
  {% /listitem %}
  {% listitem title="service_review_feedback" validation="string" %}
  {% /listitem %}
  {% listitem title="state" validation="string" %}
  {% /listitem %}
  {% listitem title="sonority" validation="string" %}
  Available values: **quiet**, **moderate**, **loud**.
  {% /listitem %}
  {% listitem title="summary" validation="string" %}
  {% /listitem %}
  {% listitem title="table_style_score" validation="string" %}
  {% /listitem %}
  {% listitem title="tables_score" validation="string" %}
  {% /listitem %}
  {% listitem title="taste_score" validation="string" %}
  {% /listitem %}
  {% listitem title="title" validation="string" %}
  {% /listitem %}
  {% listitem title="visit_for" validation="string" %}
  {% /listitem %}
  {% /list %}
  {% /listitem %}
  
  {% listitem title="relationships" validation="formData, object" %}
  Relationships object with **`business`** object.
  {% list isChild=true %}
  {% listitem title="business" validation="formData, object" %}
  Add a Business relationships link.
  {% list isChild=true %}
  {% listitem title="id" validation="string" %}
  Related Business `id`.
  {% /listitem %}
  {% listitem title="type" validation="string" %}
  Business `type`; **business**.
  {% /listitem %}
  {% /list %}
  {% /listitem %}
  {% /list %}
  {% /listitem %}
  
  {% /list %}
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "POST", path: "/api/v1/reviews"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/reviews`, {
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
  # Update Review
  Update a Review
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Update a Review by specific `id`.
  {% /listitem %}

  {% listitem title="data" validation="formData, object" type="Required" %}
  Form Data needed when updating a Review.
  {% list isChild=true %}
  {% listitem title="id" validation="string" type="Required" %}
  Provide Review `id`.
  {% /listitem %}
  {% listitem title="type" validation="string" type="Required" %}
  Provide Review `type`. Current selection is only **reviews**.
  {% /listitem %}

  {% listitem title="attributes" validation="formData, object" %}
  Attributes object.
  {% list isChild=true %}
  {% listitem title="atmosphere_review" validation="string" %}
  {% /listitem %}
  {% listitem title="atmosphere_review_feedback" validation="string" %}
  {% /listitem %}
  {% listitem title="cleanliness_review" validation="string" %}
  {% /listitem %}
  {% listitem title="cleanliness_review_feedback" validation="string" %}
  {% /listitem %}
  {% listitem title="comfort_score" validation="string" %}
  {% /listitem %}
  {% listitem title="concept_review" validation="string" %}
  {% /listitem %}
  {% listitem title="concept_review_feedback" validation="string" %}
  {% /listitem %}
  {% listitem title="cooking_technique_score" validation="string" %}
  {% /listitem %}
  {% listitem title="decoration_score" validation="string" %}
  {% /listitem %}
  {% listitem title="dishes_score" validation="string" %}
  {% /listitem %}
  {% listitem title="experience_score" validation="string" %}
  {% /listitem %}
  {% listitem title="food_review" validation="string" %}
  {% /listitem %}
  {% listitem title="food_review_feedback" validation="string" %}
  {% /listitem %}
  {% listitem title="kind_of_service" validation="string" %}
  {% /listitem %}
  {% listitem title="kindness_score" validation="string" %}
  {% /listitem %}
  {% listitem title="newness_score" validation="string" %}
  {% /listitem %}
  {% listitem title="perfect_for" validation="string[]" %}
  {% /listitem %}
  {% listitem title="place_score" validation="string" %}
  {% /listitem %}
  {% listitem title="presentation_of_dishes_score" validation="string" %}
  {% /listitem %}
  {% listitem title="presentation_score" validation="string" %}
  {% /listitem %}
  {% listitem title="price_range" validation="string" %}
  {% /listitem %}
  {% listitem title="pricing_review" validation="string" %}
  {% /listitem %}
  {% listitem title="pricing_review_feedback" validation="string" %}
  {% /listitem %}
  {% listitem title="professionalism_score" validation="string" %}
  {% /listitem %}
  {% listitem title="quality_of_products_score" validation="string" %}
  {% /listitem %}
  {% listitem title="quality_to_price_score" validation="string" %}
  {% /listitem %}
  {% listitem title="rapidity_score" validation="string" %}
  {% /listitem %}
  {% listitem title="service_review" validation="string" %}
  {% /listitem %}
  {% listitem title="service_review_feedback" validation="string" %}
  {% /listitem %}
  {% listitem title="state" validation="string" %}
  {% /listitem %}
  {% listitem title="sonority" validation="string" %}
  Available values: **quiet**, **moderate**, **loud**.
  {% /listitem %}
  {% listitem title="summary" validation="string" %}
  {% /listitem %}
  {% listitem title="table_style_score" validation="string" %}
  {% /listitem %}
  {% listitem title="tables_score" validation="string" %}
  {% /listitem %}
  {% listitem title="taste_score" validation="string" %}
  {% /listitem %}
  {% listitem title="title" validation="string" %}
  {% /listitem %}
  {% listitem title="visit_for" validation="string" %}
  {% /listitem %}
  {% /list %}
  {% /listitem %}
  
  {% /list %}
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "PATCH", path: "/api/v1/reviews/{id}"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/reviews/${id}`, {
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
  # Delete Review
  Delete a Review.
{% /methodInfo %}
{% list title="Parameters" %}
  {% listitem title="id" validation="path integer" type="Required" %}
  Delete a Review by specific `id`.
  {% /listitem %}
{% /list %}
{% /methodCopy %}

{% codeBlock request={method: "DELETE", path: "/api/v1/reviews/{id}"} %}
{% tabs %}
  {% tab label="js"%}
  ```js
    {
      const res = await fetch(`${BASE_URL}/api/v1/reviews/${id}`, {
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