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


describe('Login', () => {

    it('Visit the website', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.url().should('include', 'saucedemo.com')
});

    it('login with valid data', () => {
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

describe('Add Item from the shopping cart', () => {

    it('add item to the shopping cart', () => {
        cy.contains('Add to cart').should('have.text', 'Add to cart').click()
        cy.get('#remove-sauce-labs-backpack').should('have.text', 'Remove')
        // cy.contains('Remove').should('exist'); // ini juga bisa

        cy.get('.shopping_cart_badge').should('exist').and('not.be.empty') // berhasil menambahkan barang ke keranjang
        cy.get('.shopping_cart_link').click()

    })
})

describe('Remove Item from the shopping cart', () =>{
    it('remove items from shopping cart', () => {
        // cy.contains('Remove').should('have.text', 'Remove').click()
        cy.get('#remove-sauce-labs-backpack').contains('Remove')
        cy.get('#remove-sauce-labs-backpack').click()
        cy.get('.removed_cart_item').should('exist')
    })





})

