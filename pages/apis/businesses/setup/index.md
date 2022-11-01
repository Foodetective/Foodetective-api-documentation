---
title: Businesses Setup
---

## {% $markdoc.frontmatter.title %}

### GET /api/v1/businesses/{id}/setup_intent
{% table %}
---
* Parameters {% align="left" %}
  {% listitem title="purpose" type="Required" /%}
  {% listitem title="id" type="Required" /%}
* Example {% align="left" %}
  ```bash
      {
          const res = await fetch(`${BASE_URL}/api/v1/businesses/{id}/setup_intent`, {
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
  "url": "/api/v1/businesses/{id}/setup_intent",
  "method": "GET",
  "data": {
    "id": "2022-10-31 11:30:20 UTC",
    "type": "setup_intents",
    "attributes": {
      "id": "seti_1LywC8BtvCfXmRItaxcIH3l0",
      "object": "setup_intent",
      "application": null,
      "cancellation_reason": null,
      "client_secret": "seti_1LywC8BtvCfXmRItaxcIH3l0_secret_MiMwp6luzicy9mnOR7gxUuEzyqDDj0K",
      "created": 1667215820,
      "customer": null,
      "description": null,
      "flow_directions": null,
      "last_setup_error": null,
      "latest_attempt": null,
      "livemode": false,
      "mandate": null,
      "metadata": {},
      "next_action": null,
      "on_behalf_of": null,
      "payment_method": null,
      "payment_method_options": {
        "card": {
          "mandate_options": null,
          "network": null,
          "request_three_d_secure": "automatic"
        }
      },
      "payment_method_types": ["card"],
      "single_use_mandate": null,
      "status": "requires_payment_method",
      "usage": "off_session"
    }
  }
}
```
{% /table %}