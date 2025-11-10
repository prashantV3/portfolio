# Implementation Plan

- [x] 1. Configure Next.js for static export


  - Update next.config.js to add output: 'export' and images.unoptimized: true
  - Remove next-pwa wrapper from config export
  - Add commented basePath and assetPrefix configuration for reference
  - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5_



- [ ] 2. Remove ChatAI component and OpenAI dependencies
  - Remove ChatAI import and usage from pages/index.tsx
  - Remove ChatAI export from src/components/index.ts
  - Remove openai dependency from package.json
  - _Requirements: 1.2, 1.3, 1.4_

- [ ] 3. Refactor blog index page for client-side data fetching
  - Remove getStaticProps from pages/blog/index.tsx
  - Add useState hooks for posts, loading, and error states
  - Implement useEffect to fetch blog posts from Sanity API
  - Add loading indicator UI
  - Add error handling UI
  - Handle empty posts case
  - _Requirements: 2.1, 2.3, 2.4, 2.5_

- [ ] 4. Refactor blog slug page for client-side data fetching
  - Remove getStaticProps and getStaticPaths from pages/blog/[slug].tsx
  - Add useRouter to get slug from URL parameters
  - Add useState hooks for post data, loading, and error states
  - Implement useEffect to fetch individual post from Sanity API
  - Add loading indicator UI


  - Add error handling and 404 handling
  - _Requirements: 2.2, 2.3, 2.4, 2.5, 5.1, 5.2_

- [x] 5. Update GitHub Actions workflow



  - Remove "yarn next export" step from .github/workflows/main.yml
  - Verify "out" directory is uploaded as artifact
  - Ensure environment variables are properly configured
  - _Requirements: 4.1, 4.2, 4.3, 4.4_

- [ ] 6. Clean up unused files and dependencies
  - Delete pages/api directory if it exists
  - Verify all internal links use Next.js Link component
  - _Requirements: 1.1, 5.3_

- [ ]* 7. Test static build locally
  - Run build command to generate static files
  - Serve the out directory using a local static server
  - Verify all pages load correctly
  - Test blog post navigation and data loading
  - Check for console errors
  - _Requirements: 6.1, 6.2, 6.3, 6.4_
