Cypress.Commands.add('getByName', (selector, index) => {
    cy.get(`[name="${selector}"]`);
  })

Cypress.Commands.add('getByIndex', (selector, index) => {
    cy.get(selector).eq(index);
  })