/// <reference types="cypress" />


//contoh eduwork
// describe('Browser actions', () => {

//     it('Should load books website', () => {
//         cy.visit('https://books.toscrape.com/index.html', { timeout: 10000 })
//         cy.url().should('include', 'index.html')
// });

//     it('Should click on Travel Category', () => {
//         cy.get('a').contains('Travel').click()
//         cy.get('h1').should('have.text', 'Travel')

//  });
// });


describe('Working with inputs', () => {

    it('Visit the website', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include', 'login.html')
});

    it('Should fill username', () => {
        cy.get('#user_login').clear()
        cy.get('#user_login').type('username').should('have.value', 'username')
});

    it('Should fill password', () => {
        cy.get('input[name="user_password"]').clear()
        cy.get('input[name="user_password"]').type('password').should('have.value', 'password')
});

    it('Should checklist', () => {
        cy.get('#user_remember_me').check()
        cy.get('#user_remember_me').should('be.checked')
})
    
});