/// <reference types="cypress" />

describe('Login', () => {

    it('Visit the website', () => {
        cy.fixture("user").then(user => {
        const url_web = user.website.url_web
        cy.visit(url_web)
        cy.url().should('include', 'saucedemo.com')
});
    })

    it('Login with valid username', () => {
        cy.fixture("user").then(user => {
        const valid_username = user.user_valid.valid_username
        cy.get('#user-name').clear()
        cy.get('#user-name').type(valid_username)
})
    })

    it('Login with valid password', () => {
        cy.fixture("user").then(user => {    
        const valid_password = user.user_valid.valid_password
        cy.get('input[name="password"]').clear()
        cy.get('input[name="password"]').type(valid_password)
  
});
    })

    it('Click login button', () => {
        cy.get('input[name="login-button"]').click()
        cy.url().should('include', 'inventory.html')
        cy.get('.header_label').should('contain.text', 'Swag Labs');

});
    
    })

// /////////////////////////////    

describe('Add Item from the shopping cart', () => {

    it('Visit the website', () => {
        cy.fixture("user").then(user => {
        const url_web = user.website.url_web
        cy.visit(url_web)
        cy.url().should('include', 'saucedemo.com')
});
    })

    it('Login with valid username', () => {
        cy.fixture("user").then(user => {
        const valid_username = user.user_valid.valid_username
        cy.get('#user-name').clear()
        cy.get('#user-name').type(valid_username)
})
    })

    it('Login with valid password', () => {
        cy.fixture("user").then(user => {    
        const valid_password = user.user_valid.valid_password
        cy.get('input[name="password"]').clear()
        cy.get('input[name="password"]').type(valid_password)
  
});
    })

    it('Click login button', () => {
        cy.get('input[name="login-button"]').click()
        cy.url().should('include', 'inventory.html')
        cy.get('.header_label').should('contain.text', 'Swag Labs');

});


    it('Add item to the shopping cart', () => {
        cy.contains('Add to cart').should('have.text', 'Add to cart').click()
        cy.get('#remove-sauce-labs-backpack').should('have.text', 'Remove')
        // cy.contains('Remove').should('exist'); // ini juga bisa

})
    it('Click Shopping cart icon', () => {
        cy.get('.shopping_cart_badge').should('exist').and('not.be.empty') // berhasil menambahkan barang ke keranjang
        cy.get('.shopping_cart_link').click()
        cy.url().should('include', 'cart.html')

    })
})


////////////////////////// 

describe('Checkout Item from the shopping cart', () => {

    it('Visit the website', () => {
        cy.fixture("user").then(user => {
        const url_web = user.website.url_web
        cy.visit(url_web)
        cy.url().should('include', 'saucedemo.com')
});
    })

    it('Login with valid username', () => {
        cy.fixture("user").then(user => {
        const valid_username = user.user_valid.valid_username
        cy.get('#user-name').clear()
        cy.get('#user-name').type(valid_username)
})
    })

    it('Login with valid password', () => {
        cy.fixture("user").then(user => {    
        const valid_password = user.user_valid.valid_password
        cy.get('input[name="password"]').clear()
        cy.get('input[name="password"]').type(valid_password)
  
});
    })

    it('Click login button', () => {
        cy.get('input[name="login-button"]').click()
        cy.url().should('include', 'inventory.html')
        cy.get('.header_label').should('contain.text', 'Swag Labs');

});


    it('Add item to the shopping cart', () => {
        cy.contains('Add to cart').should('have.text', 'Add to cart').click()
        cy.get('#remove-sauce-labs-backpack').should('have.text', 'Remove')
        // cy.contains('Remove').should('exist'); // ini juga bisa

})
    it('Click Shopping cart icon', () => {
        cy.get('.shopping_cart_badge').should('exist').and('not.be.empty') // berhasil menambahkan barang ke keranjang
        cy.get('.shopping_cart_link').click()
        cy.url().should('include', 'cart.html')

    })


    it('Click checkout button', () => {
        cy.contains('Checkout').should('have.text', 'Checkout').click()
        cy.url().should('include', 'checkout-step-one.html')
        cy.get('.title').should('contain.text', 'Checkout: Your Information')

    })

    it('Fill in the first name', () => {
        cy.fixture("user").then(user => {
        const first_name = user.checkout.first_name
        cy.get('#first-name').clear()
        cy.get('#first-name').type(first_name)
    
    })
})

    it('Fill in the last name', () => {
        cy.fixture("user").then(user => {
        const last_name = user.checkout.last_name
        cy.get('#last-name').clear()
        cy.get('#last-name').type(last_name)
    })
})

    it('Fill in the zip or postal code', () => {
        cy.fixture("user").then(user => {
        const zip_postal_code = user.checkout.zip_postal_code
        cy.get('input[name="postalCode"]').clear()
        cy.get('input[name="postalCode"]').type(zip_postal_code)
    
    })
})      

    it('Click continue Button', () => {
        cy.get('input[name="continue"]').click()
        cy.url().should('include', 'checkout-step-two.html')
    })

    it('Details of all items in the shopping cart', () => {
        cy.get('.inventory_item_name').should('not.be.empty')

        cy.get('.summary_info_label').should('contain.text', 'Payment Information:')
        cy.get('.summary_value_label').should('not.be.empty')

        cy.get('.summary_info_label').should('contain.text', 'Shipping Information:')
        cy.get('.summary_value_label').should('not.be.empty')

        cy.get('.summary_info_label').should('contain.text', 'Price Total')
        cy.get('.summary_subtotal_label').should('not.be.empty')
        cy.get('.summary_tax_label').should('not.be.empty')
        cy.get('.summary_total_label').should('not.be.empty')
    })

    it('Click finish button', () => {
        cy.contains('Finish').should('have.text', 'Finish')
        cy.get('#finish').click()
        cy.url().should('include', 'checkout-complete.html')
        cy.contains('Thank you for your order!').should('have.text', 'Thank you for your order!')

    
    });
});