// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('checkSignupRequest', () => {
  cy.wait('@signupRequest', { timeout: 10000 }).then((interception) => {
    expect(interception.request.url).to.eq('https://api.demoblaze.com/signup');
    expect(interception.response.statusCode).to.eq(200);
  });
});

Cypress.Commands.add('registerUser', (user) => {
  cy.intercept('POST', 'https://api.demoblaze.com/signup').as('signupRequest');
  cy.get('#signin2').click();
  cy.get('#sign-username').type(user.username);
  cy.get('#sign-password').type(user.password);
  cy.contains('button', 'Sign up').click();
  cy.wait('@signupRequest').then((interception) => {
    expect(interception.response.statusCode).to.eq(200);
  });
});