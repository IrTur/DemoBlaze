import { generateUser } from '../support/generateUser';

describe('Login page', () => {
  let user;

  before(() => {
    user = generateUser();
    cy.visit('/');
    cy.registerUser(user);
  });

  it('should log in with the registered account', () => {
    cy.get('#login2').click();
    cy.get('#loginusername')
      .type(user.username)
      .should('have.value', user.username);
    cy.get('#loginpassword')
      .type(user.password)
      .should('have.value', user.password);
    cy.contains('button', 'Log in').click();
    cy.get('#nameofuser')
      .should('contain', `Welcome ${user.username}`);
  });
});