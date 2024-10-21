import { generateUser } from '../support/generateUser';

beforeEach(() => {
  cy.visit('/');
  cy.intercept('POST', '/signup').as('signupRequest');
});

describe('Sign Up page', () => {
  let user;

  it('should register new account', () => {
    user = generateUser();
    
    cy.get('#signin2').click();
    cy.get('#signInModalLabel').should('be.visible');
    cy.get('#sign-username').type(user.username);
    cy.get('#sign-password').type(user.password);
    cy.contains('button', 'Sign up')
      .should('be.visible')
      .click();
    cy.checkSignupRequest();
  });
});
