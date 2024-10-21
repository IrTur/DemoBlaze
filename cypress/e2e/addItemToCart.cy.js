beforeEach(() => {
  cy.visit('/');
});

describe('Add to Cart', () => {
  let user;

  it('should add item to cart', () => {
    cy.contains('a', 'Samsung galaxy s6').click();
    cy.contains('Add to cart').click();
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.contains('Product added');
    });
    cy.wait(1000);
    cy.get('#cartur').click();
    cy.get('#tbodyid').should('contain', 'Samsung galaxy s6');;
  });
});