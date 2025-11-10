# Requirements Document

## Introduction

This feature converts the Next.js portfolio site from a hybrid server-side/static application to a fully static site suitable for GitHub Pages deployment. The conversion involves removing all server-side features including API routes, SSR/ISR data fetching, and configuring the application for static export with proper base path handling.

## Glossary

- **Portfolio Site**: The Next.js-based personal portfolio website
- **Static Export**: Next.js build output that generates only static HTML/CSS/JS files
- **GitHub Pages**: GitHub's static site hosting service
- **API Route**: Server-side endpoint in Next.js (pages/api directory)
- **SSG**: Static Site Generation - pre-rendering pages at build time
- **ISR**: Incremental Static Regeneration - updating static pages after build
- **Base Path**: URL prefix for sites not hosted at root domain
- **Sanity CMS**: Headless CMS used for blog content
- **ChatAI Component**: Interactive component using OpenAI API

## Requirements

### Requirement 1

**User Story:** As a developer, I want to remove all server-side API routes, so that the site can be deployed as a fully static site on GitHub Pages

#### Acceptance Criteria

1. WHEN the Portfolio Site is built, THE Portfolio Site SHALL NOT include any files in the pages/api directory
2. THE Portfolio Site SHALL remove the ChatAI Component from the homepage
3. THE Portfolio Site SHALL remove all references to the OpenAI API endpoint
4. THE Portfolio Site SHALL remove the openai dependency from package.json

### Requirement 2

**User Story:** As a developer, I want to convert SSG data fetching to client-side fetching, so that blog content loads dynamically without server-side rendering

#### Acceptance Criteria

1. THE Portfolio Site SHALL remove getStaticProps from pages/blog/index.tsx
2. THE Portfolio Site SHALL remove getStaticProps and getStaticPaths from pages/blog/[slug].tsx
3. THE Portfolio Site SHALL fetch Sanity CMS data using client-side fetch calls in useEffect hooks
4. THE Portfolio Site SHALL display loading states while fetching blog data
5. THE Portfolio Site SHALL handle fetch errors gracefully with user-friendly error messages

### Requirement 3

**User Story:** As a developer, I want to configure Next.js for static export, so that the build process generates only static files

#### Acceptance Criteria

1. THE Portfolio Site SHALL add output: 'export' to next.config.js
2. THE Portfolio Site SHALL disable image optimization by setting unoptimized: true in next.config.js
3. THE Portfolio Site SHALL remove ISR revalidate options from all pages
4. WHERE the repository name is not username.github.io, THE Portfolio Site SHALL configure basePath in next.config.js
5. WHERE the repository name is not username.github.io, THE Portfolio Site SHALL configure assetPrefix in next.config.js

### Requirement 4

**User Story:** As a developer, I want to update the GitHub Actions workflow, so that the site builds and deploys correctly to GitHub Pages

#### Acceptance Criteria

1. THE Portfolio Site SHALL remove the "yarn next export" command from the workflow
2. THE Portfolio Site SHALL configure the workflow to upload the "out" directory after build
3. THE Portfolio Site SHALL ensure all required environment variables are available during build
4. THE Portfolio Site SHALL verify the workflow has correct permissions for GitHub Pages deployment

### Requirement 5

**User Story:** As a developer, I want to handle dynamic routes properly, so that blog post pages work correctly in static export

#### Acceptance Criteria

1. THE Portfolio Site SHALL generate all blog post pages at build time using client-side data fetching
2. WHERE a blog post slug does not exist, THE Portfolio Site SHALL redirect to a 404 page
3. THE Portfolio Site SHALL ensure all internal links use Next.js Link component for proper navigation
4. THE Portfolio Site SHALL ensure external redirects in next.config.js continue to work

### Requirement 6

**User Story:** As a developer, I want to verify the static build works locally, so that I can test before deploying to GitHub Pages

#### Acceptance Criteria

1. THE Portfolio Site SHALL build successfully with "next build" command
2. THE Portfolio Site SHALL generate an "out" directory containing all static files
3. THE Portfolio Site SHALL serve correctly using a local static file server
4. THE Portfolio Site SHALL display all pages without console errors
