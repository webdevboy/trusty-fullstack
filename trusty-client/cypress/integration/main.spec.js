
describe('main', () => {
  it('should enter all fields and update user', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-cy-id=firstname-input] input').clear().type('FIRST NAME');
    cy.get('[data-cy-id=lastname-input] input').clear().type('LAST NAME');
    cy.get('[data-cy-id=email-input] input').clear().type('EMAIL@CYPRESS.TEST');
    cy.get('[data-cy-id=phone-input] input').clear().type('11111111');
    cy.get('[data-cy-id=sumbit-btn]').click();
    cy.get('[data-cy-id=success-updated]', { timeout: 5000 }).should('be.visible');
  });
});
