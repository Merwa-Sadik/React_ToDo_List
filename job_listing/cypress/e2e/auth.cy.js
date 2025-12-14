describe('Authentication Flow', () => {
  it('should signup new user with role "user"', () => {
    cy.visit('/signup');
    
    cy.get('input[name="name"]').type('Test User');
    cy.get('input[name="email"]').type('testuser@example.com');
    cy.get('input[name="password"]').type('password123');
    cy.get('input[name="confirmPassword"]').type('password123');
    cy.get('button[type="submit"]').click();
    
    cy.url().should('include', '/verify-email');
  });

  it('should signin existing user', () => {
    cy.visit('/signin');
    
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="password"]').type('password123');
    cy.get('button[type="submit"]').click();
    
    cy.url().should('eq', 'http://localhost:3000/');
  });

  it('should show error for invalid credentials', () => {
    cy.visit('/signin');
    
    cy.get('input[name="email"]').type('wrong@example.com');
    cy.get('input[name="password"]').type('wrongpassword');
    cy.get('button[type="submit"]').click();
    
    cy.contains(/failed/i).should('exist');
  });

  it('should logout user', () => {
    cy.visit('/signin');
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="password"]').type('password123');
    cy.get('button[type="submit"]').click();
    
    cy.contains('Logout').click();
    cy.url().should('include', '/signin');
  });
});
