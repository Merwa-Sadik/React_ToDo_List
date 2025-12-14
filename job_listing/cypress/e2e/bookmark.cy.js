describe('Bookmark Functionality', () => {
  beforeEach(() => {
    cy.visit('/signin');
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="password"]').type('password123');
    cy.get('button[type="submit"]').click();
    cy.url().should('eq', 'http://localhost:3000/');
  });

  it('should display bookmark button on job cards', () => {
    cy.get('[data-testid="bookmark-button"]').should('exist');
  });

  it('should toggle bookmark when clicking bookmark button', () => {
    cy.get('[data-testid="bookmark-button"]').first().within(() => {
      cy.contains('Bookmark').should('exist');
    });

    cy.get('[data-testid="bookmark-button"]').first().click();

    cy.get('[data-testid="bookmark-button"]').first().within(() => {
      cy.contains('Bookmarked').should('exist');
    });
  });

  it('should unbookmark when clicking bookmarked job', () => {
    cy.get('[data-testid="bookmark-button"]').first().click();
    cy.get('[data-testid="bookmark-button"]').first().within(() => {
      cy.contains('Bookmarked').should('exist');
    });

    cy.get('[data-testid="bookmark-button"]').first().click();
    cy.get('[data-testid="bookmark-button"]').first().within(() => {
      cy.contains('Bookmark').should('exist');
    });
  });

  it('should persist bookmarks after page reload', () => {
    cy.get('[data-testid="bookmark-button"]').first().click();
    cy.reload();
    cy.get('[data-testid="bookmark-button"]').first().within(() => {
      cy.contains('Bookmarked').should('exist');
    });
  });

  it('should not allow bookmark toggle without clicking the button', () => {
    cy.get('[data-testid="bookmark-button"]').first().within(() => {
      cy.contains('Bookmark').should('exist');
    });
    
    cy.get('.cursor-pointer').first().click();
    cy.contains('Back to Listings').should('exist');
  });
});

describe('Authentication for Bookmark', () => {
  it('should redirect to signin when not authenticated', () => {
    cy.visit('/');
    cy.url().should('include', '/signin');
  });

  it('should allow bookmark only when authenticated', () => {
    cy.visit('/signin');
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="password"]').type('password123');
    cy.get('button[type="submit"]').click();
    
    cy.url().should('eq', 'http://localhost:3000/');
    cy.get('[data-testid="bookmark-button"]').should('exist');
  });
});
