# Premiere Valet Services — Website

The public website for [Premiere Valet Services, Inc.](https://premierevaletparking.com), a Southern California valet parking company. It's a React single-page app built with Create React App.

## Getting started

Requires Node 24 (see `.nvmrc`).

```sh
nvm use
npm install
npm start
```

The site runs at http://localhost:3000.

> **Heads up:** the quote and employment forms post to the live server (`https://pvs-server.herokuapp.com`, set in `src/auth.js`) even when running locally, so submitting them sends real emails. To test against a local server, switch the `baseURL` in `src/auth.js` to `http://localhost:3001/`.

## Scripts

| Command                | What it does                             |
| ---------------------- | ---------------------------------------- |
| `npm start`            | Dev server with hot reload               |
| `npm run build`        | Production build into `build/`           |
| `npm test`             | Runs tests                               |
| `npm run lint`         | ESLint                                   |
| `npm run format`       | Formats everything with Prettier         |
| `npm run format:check` | Checks formatting without changing files |

## Project structure

```
public/
  index.html          Page shell, default meta tags, fonts and CSS from CDNs
  .htaccess           Apache config: HTTPS redirect, SPA routing, caching
  service-worker.js   Removes the service worker older builds installed
src/
  App.js              All routes
  auth.js             API client for form submissions
  analytics.js        Google Analytics 4 setup and event helper
  components/         One component per page, plus Navbar/Footer
    common/MetaData   Per-page <title> and meta tags (react-helmet)
  css/                One stylesheet per page, imported through App.css
  images/             Site photos and logos
```

UI comes from Semantic UI React and React Bootstrap. Shared colors, spacing and widths are CSS variables in `src/App.css`.

## Pages

- **Main pages:** Home, About, Services, Insurance, Testimonials, Staff, Contact, Employment (`/employment`), Request a Quote (`/quote`) and its confirmation page.
- **City pages:** `/losangeles`, `/malibu`, `/newportbeach`, etc. These all render the same `City` component with a different `city` prop. To add one, add a `<Route>` in `App.js`.
- **Legacy redirects:** URLs from the old static site (e.g. `/malibu_valet_parking.html`) redirect to the matching city page so old links and search results still work.

## Forms

The quote and employment forms send their data to the PVS server (`/email/quote` and `/email/work`), which emails it to the office. The server is a separate project.

## Analytics

Google Analytics 4 (measurement ID `G-9M7N51GPH9`) loads only in production builds, so local development doesn't send data. Page views, including route changes, are tracked automatically by GA4's enhanced measurement. Custom events:

| Event             | Fired when                        | Parameters   |
| ----------------- | --------------------------------- | ------------ |
| `generate_lead`   | A quote request is sent           | `event_type` |
| `job_application` | An employment application is sent | `location`   |

Use `trackEvent(name, params)` from `src/analytics.js` to add more.

## Deploying

1. `npm run build`
2. Upload the **contents** of `build/` to the web root on the host, replacing the old files.

`public/.htaccess` is copied into the build. It forces HTTPS, sends every route to `index.html` so links like `/malibu` work on refresh, and makes browsers check for a new `index.html` on each visit so deploys show up right away. Keep the EnforceSSL blocks at the top as they are; the hosting control panel manages them.

## Images

Images live in `src/images/` and are named `<page>-<description>.jpg` (e.g. `home-hero.jpg`, `staff-joel-ocampo.jpg`), so the filename shows where each one appears.

**To replace a photo**, resize it first, then save it over the existing file with the same name. No code changes are needed.

| Type                                 | Width  | Format                  |
| ------------------------------------ | ------ | ----------------------- |
| Full-width page headers              | 2400px | JPEG                    |
| Mobile-only headers (`*-mobile.jpg`) | 1200px | JPEG                    |
| Photos within a page                 | 1600px | JPEG                    |
| Staff headshots                      | 800px  | JPEG                    |
| Logos                                | —      | PNG (keep transparency) |

On a Mac: open the photo in Preview, choose **Tools → Adjust Size**, set the width, then **File → Export** as JPEG with quality around 80%. Photos straight from a phone are often 3–5 MB; after resizing, aim for under about 1 MB.

The image shown when the site is shared on social media is `public/share-logo.png`.
