# Website

This website is built using [Docusaurus 3](https://docusaurus.io), a modern static website generator.

## Installation

```console
yarn install
```

## Analytics Tracking

This template includes [Umami](https://umami.is) analytics integration. To enable tracking:

1. Create a `.env` file in the project root
2. Add your Umami credentials:
```bash
UMAMI_WEB_ID=your_website_id
UMAMI_WEB_DOMAIN=your_umami_instance_domain
```
3. The tracking script will automatically be included in production builds

## Local Development

```console
yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

**Required for Production:**
- Ensure Umami environment variables are set in your hosting platform
- Verify the [umami plugin configuration](docusaurus.config.js) matches your instance settings

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
