# Fliki Enterprise API Documentation
Create video, audio, and design content with the power of AI using Fliki's API.

## Pricing
API is bundled with the [Enterprise Plan](https://fliki.ai/enterprise).

## API key
- [Book a demo](https://fliki.ai/enterprise) with us for onboarding.
- Access your API key from [Accounts → API](https://app.fliki.ai/account/api) section.

## API endpoints

### Generate (using template)

Generate using file marked as template.

```bash
curl \
  -H "Authorization: Bearer <API KEY>" \
  -H "Content-Type: application/json" \
  -d '{"fileId": "...", "webhook": "https://...", "scenes": [...]}' \
  -X POST https://api.fliki.ai/v1/generate/template
```

- Returns new File ID
- Upon completion, you'll receive webhook with the status and download URL.

### Generate status

> Note: Must be used only during development. In production, you must utilize webhook to receive completion callback.

Check status for generate requests and download generated file
```bash
curl \
  -H "Authorization: Bearer <API KEY>" \
  -H "Content-Type: application/json" \
  -G -d "fileId=..." \
  -X GET https://api.fliki.ai/v1/generate/status
```

- Returns status and download URL.
- Warning: you must implement [exponential backoff](https://en.wikipedia.org/wiki/Exponential_backoff) when checking for status otherwise it'll lead to rate limit error and all consecutive API calls will fail.

## Note
- Input data field `text` across all applicable endpoint is limited to 1500 characters.
- The file generated are hosted on Fliki's storage server and is deleted automatically after three hours. We expect you to copy it to your own storage server for long term availability.
- The API service is in early access only. The endpoints and other workings of API is subjected to change without notice.

## Contact
Share your feedback, feature requests and bug reports via email [support@fliki.ai](mailto:support@fliki.ai) or via live chat available on [app.fliki.ai](https://app.fliki.ai).

## Copyright Notice

Copyright © 2021 - 2024, Nine Thirty Five LLC.

All rights reserved.
