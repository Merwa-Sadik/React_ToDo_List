# Testing Guide

## Jest Unit Tests

### Running Tests
```bash
# Run tests in watch mode
npm test

# Run tests with coverage
npm run test:coverage
```

### Test Files
- `src/components/JobCard.test.js` - Tests for JobCard component
- `src/components/JobListingDashboard.test.js` - Tests for dashboard component
- `src/services/api.test.js` - Tests for bookmark API functions

### What's Tested
- JobCard rendering with job details
- Bookmark button display and functionality
- Bookmark toggle behavior
- Job listing display
- No jobs found scenario
- Error handling
- API calls for bookmark operations

## Cypress E2E Tests

### Installing Cypress
If Cypress installation fails, try:
```bash
# Clear npm cache
npm cache clean --force

# Install Cypress with legacy peer deps
npm install --save-dev cypress --legacy-peer-deps

# Or install globally
npm install -g cypress
```

### Running Cypress Tests
```bash
# Open Cypress Test Runner (interactive)
npm run cypress:open

# Run Cypress tests in headless mode
npm run cypress:run
```

### Test Files
- `cypress/e2e/bookmark.cy.js` - E2E tests for bookmark functionality
- `cypress/e2e/auth.cy.js` - E2E tests for authentication

### What's Tested
- User signup with role "user"
- User signin/logout
- Bookmark toggle on job cards
- Bookmark persistence after reload
- Authentication requirement for bookmarks
- Error handling for invalid credentials

## Test Coverage
The tests cover:
- ✅ Component rendering
- ✅ User interactions
- ✅ API integration
- ✅ Authentication flow
- ✅ Bookmark functionality
- ✅ Error scenarios
- ✅ Edge cases (no jobs, failed requests)

## Notes
- Make sure the app is running on `http://localhost:3000` before running Cypress tests
- Update test credentials in Cypress tests to match your test account
- Jest tests run in isolation and don't require the app to be running
