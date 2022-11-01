---
title: Businesses Tables
---

## {% $markdoc.frontmatter.title %}

{% table %}
* ### **Parameters**
---
* 
   {% listitem %}
    [type] **Required**
   {% /listitem %}
   {% listitem %}
    [name] **Required**
   {% /listitem %}
   {% listitem %}
    [city] **Required**
   {% /listitem %}
   {% listitem %}
    [country_code] **Required**
   {% /listitem %}
   {% listitem %}
    [post_code] **Required**
   {% /listitem %}
   {% listitem %}
    [street] **Required**
   {% /listitem %}
   {% listitem %}
    [street_number] **Required**
   {% /listitem %}
   {% listitem %}
    [address_line]Optional
   {% /listitem %}
   {% listitem %}
    [notes]Optional 
   {% /listitem %}
   {% listitem %}
    [region_code]Optional
   {% /listitem %}
   {% listitem %}
     [order][data][type]Optional
   {% /listitem %}
   {% listitem %}
    [order][data][id]Optional
   {% /listitem %}
   {% listitem %}
    [region_code]Optional
   {% /listitem %}
*
*
  ### Example Request GET /api/v1/businesses/{id}/tables
  ```bash
      {
          const res = await fetch(`${BASE_URL}/api/v1/businesses/{id}/tables`, {
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
         "id": "d13fc44c-7757-42f7-b872-f187fad12d10",
         "type": "tables",
         "links": {
           "self": "/tables/d13fc44c-7757-42f7-b872-f187fad12d10"
         },
         "attributes": {
           "number": "1",
           "number-of-seats": 2
         },
         "relationships": {
           "business": {
             "links": {
               "self": "/tables/d13fc44c-7757-42f7-b872-f187fad12d10/relationships/business",
               "related": "/tables/d13fc44c-7757-42f7-b872-f187fad12d10/business"
             }
           }
         }
       }
     ],
     "meta": {
       "total-count": 1,
       "total-pages": 1
     }
}
  ```
*
{% /table %}
