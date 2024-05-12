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

//ini test case login kalo error ambil dari sini
describe('Pengujian Login', () => {

    it('Visit the website', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.url().should('include', 'saucedemo.com')
});

    it('Should try to login with invalid data', () => {
    cy.fixture("login").then(login => {
    const invalid_username = login.user_invalid.invalid_username
    const invalid_password = login.user_invalid.invalid_password

    cy.get('#user-name').clear()
    cy.get('#user-name').type(invalid_username)

    cy.get('input[name="password"]').clear()
    cy.get('input[name="password"]').type(invalid_password)

    cy.get('input[name="login-button"]').click()

    cy.get('h3[data-test="error"]').should('contain.text', 'Epic sadface: Username and password do not match any user in this service');
    // cy.get('.error-message-container').should('have.text', 'Epic sadface: Username and password do not match any user in this service') // ini juga benar
});
});

it('Should try to login with valid data', () => {
    cy.fixture("login").then(login => {
    const valid_username = login.user_valid.valid_username
    const valid_password = login.user_valid.valid_password

    cy.get('#user-name').clear()
    cy.get('#user-name').type(valid_username)

    cy.get('input[name="password"]').clear()
    cy.get('input[name="password"]').type(valid_password)

    cy.get('input[name="login-button"]').click()

    cy.get('.header_label').should('contain.text', 'Swag Labs');
   
});

});
});
