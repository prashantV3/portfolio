# Design Document

## Overview

This design outlines the conversion of the Next.js portfolio site from a hybrid application to a fully static site for GitHub Pages deployment. The approach focuses on removing server-side dependencies, converting data fetching to client-side, and configuring the build system for static export.

## Architecture

### Current Architecture
- Next.js hybrid app with SSG (Static Site Generation) and API routes
- Server-side data fetching using getStaticProps/getStaticPaths
- API route for OpenAI integration (/api/openai)
- Sanity CMS integration with build-time data fetching
- PWA configuration for production builds

### Target Architecture
- Fully static Next.js site with client-side data fetching
- No server-side API routes
- Client-side Sanity CMS data fetching
- Static export configuration with GitHub Pages compatibility
- Removed ChatAI component (requires server-side API)

## Components and Interfaces

### 1. Configuration Changes

#### next.config.js
```javascript
const nextConfig = {
  output: 'export',  // Enable static export
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,  // Disable image optimization for static export
    domains: ["cdn.sanity.io", "zomeru.com", "raw.githubusercontent.com"],
  },
  compiler: {
    styledComponents: true,
  },
  // Add basePath and assetPrefix if not deploying to username.github.io
  // basePath: '/repository-name',
  // assetPrefix: '/repository-name/',
  async redirects() {
    // Existing redirects remain unchanged
  },
};

// Remove PWA wrapper for static export
module.exports = nextConfig;
```

#### package.json
- Remove `openai` dependency
- Keep existing scripts (build command will automatically export with output: 'export')

### 2. Blog Pages Refactoring

#### pages/blog/index.tsx
**Changes:**
- Remove `getStaticProps` export
- Add client-side data fetching in `useEffect`
- Add loading and error states
- Maintain existing UI components

**Data Flow:**
```
Component Mount → useEffect triggers → Fetch from Sanity API → Update state → Render
```

**State Management:**
```typescript
const [posts, setPosts] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
```

#### pages/blog/[slug].tsx
**Changes:**
- Remove `getStaticProps` and `getStaticPaths` exports
- Use Next.js router to get slug from URL
- Add client-side data fetching in `useEffect`
- Add loading and error states
- Handle 404 cases client-side

**Data Flow:**
```
Component Mount → Get slug from router → Fetch post data → Update state → Render
```

### 3. Component Removal

#### ChatAI Component
- Remove from pages/index.tsx imports
- Remove from homepage render
- Keep component file for reference (can be deleted later)
- Remove from src/components/index.ts exports

### 4. API Routes
- Delete pages/api directory (if it exists)
- No replacement needed as functionality is removed

## Data Models

### Blog Post Data Structure
```typescript
interface BlogPost {
  title: string;
  slug: {
    current: string;
  };
  mainImage: any;  // Sanity image object
  body: any[];     // Sanity block content
  _createdAt: string;
  _updatedAt: string;
}
```

### Sanity API Response
```typescript
interface SanityResponse {
  result: BlogPost[];
}
```

## Error Handling

### Client-Side Fetch Errors
1. **Network Errors**: Display user-friendly message "Unable to load content. Please check your connection."
2. **API Errors**: Display "Content temporarily unavailable. Please try again later."
3. **404 Errors**: Redirect to custom 404 page or display "Post not found" message
4. **Empty Results**: Display "No posts available yet"

### Build-Time Considerations
- Ensure environment variables are available during build
- Handle missing Sanity credentials gracefully
- Validate all static assets are properly referenced

## Testing Strategy

### Manual Testing Checklist
1. **Local Build Test**
   - Run `npm run build` or `yarn build`
   - Verify `out` directory is created
   - Check for build errors or warnings

2. **Local Static Server Test**
   - Serve the `out` directory using a static server (e.g., `npx serve out`)
   - Navigate to all pages
   - Verify blog posts load correctly
   - Check that images display properly
   - Test all navigation links
   - Verify external redirects work

3. **GitHub Pages Deployment Test**
   - Push to main branch
   - Monitor GitHub Actions workflow
   - Verify deployment succeeds
   - Test live site functionality

### Key Test Cases
- Homepage loads without ChatAI component
- Blog index page fetches and displays posts
- Individual blog posts load with correct content
- 404 page displays for invalid routes
- Images load from Sanity CDN
- Theme toggle works correctly
- All social media redirects function
- Mobile responsiveness maintained

## Implementation Notes

### Sanity API Access
- API calls will use public Sanity API endpoint
- No authentication required for public content
- Format: `https://{projectId}.api.sanity.io/v1/data/query/production?query={encodedQuery}`
- Environment variable: `NEXT_PUBLIC_SANITY_PROJECT_ID`

### GitHub Actions Workflow
- Remove `yarn next export` step (automatic with output: 'export')
- Build command produces `out` directory directly
- Upload `out` directory as artifact
- Deploy artifact to GitHub Pages

### Base Path Configuration
- If deploying to `username.github.io/repo-name`, uncomment basePath and assetPrefix
- If deploying to `username.github.io`, no basePath needed
- This will be determined based on repository name

### PWA Configuration
- Remove `next-pwa` wrapper from config
- PWA features not compatible with static export
- Service worker will not be generated

## Migration Path

1. Update next.config.js for static export
2. Remove ChatAI component from homepage
3. Refactor blog index page for client-side fetching
4. Refactor blog slug page for client-side fetching
5. Update GitHub Actions workflow
6. Remove openai dependency
7. Test local build and serve
8. Deploy to GitHub Pages
9. Verify live deployment

## Rollback Plan

If issues arise:
1. Revert next.config.js changes
2. Restore getStaticProps/getStaticPaths
3. Restore ChatAI component
4. Restore API routes
5. Redeploy to original hosting platform
