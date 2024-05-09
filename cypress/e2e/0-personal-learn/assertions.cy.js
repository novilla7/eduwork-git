/// <reference types="cypress" />

//contoh eduwork
// describe('My First Test', () => {
//     it('Visits the Kitchen Sink', () => {
//         cy.visit('https://example.cypress.io')
//         cy.get('h1').contains('Kitchen Sink')
//         cy.contains('get').click()
//         cy.url().should('include', '/commands/querying')
//     });
// });


describe('My First Test', () => {
    it('clicking "type" show the right headings', () => {
        cy.visit('https://example.cypress.io', {timeout: 10000});

        // cy.pause(); // tidak dijalankan karena jika dijalankan akan berhenti dan tidak menjalankan script kebawah atau lanjutannya
        
        cy.contains('type').click();

        // Should be on a new URL which includes '/commands/actions'
        cy.url().should('include', '/commands/actions');

        // Get an input, type into it and verify that the value has been updated
        cy.get('.action-email').should('be.visible')
        .type('fake@email.com')
        .should('have.value', 'fake@email.com')
    });
});