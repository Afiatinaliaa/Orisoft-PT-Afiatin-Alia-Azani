describe ("Shop Menu", function() {
    beforeEach(()=>{
        cy.viewport('macbook-15')
    })
    context('Positive Test Suites', function(){
        it ('TCP01-SM-Assert URL', function(){
            cy.visit('https://rahulshettyacademy.com/angularpractice/')
            cy.url().should('contain', 'rahulshettya')
        })
        it ('TCP02-SM-Change Quantity', function(){
            cy.visit('https://rahulshettyacademy.com/angularpractice/')
            cy.contains('Shop').click()
            cy.get(':nth-child(1) > .card > .card-footer > .btn').click()
            cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click()
            cy.get('#exampleInputEmail1').clear()
            cy.get('#exampleInputEmail1').type('100')
            cy.contains('100').should('be.visible')
        })
        it ('TCP04-SM-Checkout Single Product', function(){
            cy.get(':nth-child(3) > :nth-child(5) > .btn').click()
            cy.get('#country').type('Indonesia')
            cy.wait(7000)
            cy.contains('Indonesia').click()
            cy.get('label > a').click()
            cy.get('.nsm-dialog-animation-fade > .btn').click()
            cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click()
            cy.get('form.ng-untouched > .btn').click()
            cy.contains('Success! Thank you! Your order will be delivered in next few weeks :-).').should('be.visible')
        })
        it ('TCP05-SM-Checkout Multiple Product', function(){
            cy.get('.container > .navbar-brand').click()
            cy.contains('Shop').click()
            cy.get(':nth-child(1) > .card > .card-footer > .btn').click()
            cy.get(':nth-child(2) > .card > .card-footer > .btn').click()
            cy.get(':nth-child(3) > .card > .card-footer > .btn').click()
            cy.get(':nth-child(4) > .card > .card-footer > .btn').click()
            cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click()
            cy.contains('Checkout').click()
            cy.get('#country').type('Indonesia')
            cy.wait(7000)
            cy.contains('Indonesia').click()
            cy.get('.checkbox').click()
            cy.get('form.ng-untouched > .btn').click()
            cy.contains('Success! Thank you! Your order will be delivered in next few weeks :-).').should('be.visible')
        })
    })
    context('Negative Test Suites', function(){
        it ('TCN01-SM-Back to Protocommerce Home', function(){
            cy.get('.container > .navbar-brand').click()
            cy.get('.jumbotron').should('be.visible')
        })
        it ('TCN02-SM-Continue Shopping (Single Product)', function(){
            cy.contains('Shop').click()
            cy.get(':nth-child(1) > .card > .card-footer > .btn').click()
            cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click()
            cy.get(':nth-child(4) > .btn').click()
        })
        it ('TCN03-SM-Continue Shopping (Multiple Product)', function(){
            cy.contains('Shop').click()
            cy.get(':nth-child(1) > .card > .card-footer > .btn').click()
            cy.get(':nth-child(2) > .card > .card-footer > .btn').click()
            cy.get(':nth-child(3) > .card > .card-footer > .btn').click()
            cy.get(':nth-child(4) > .card > .card-footer > .btn').click()
            cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click()
            cy.get(':nth-child(4) > .btn').click()
            cy.get('.active > .d-block').should('be.visible')
        })
        it ('TCN04-SM-Remove Single Product', function(){
            cy.contains('Shop').click()
            cy.get(':nth-child(1) > .card > .card-footer > .btn').click()
            cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click()
            cy.get(':nth-child(1) > :nth-child(5) > .btn').click()
            cy.get('strong').should('be.visible')
        })
        it ('TCN05-SM-Remove Multiple Product', function(){
            cy.contains('Shop').click()
            cy.get(':nth-child(1) > .card > .card-footer > .btn').click()
            cy.get(':nth-child(2) > .card > .card-footer > .btn').click()
            cy.get(':nth-child(3) > .card > .card-footer > .btn').click()
            cy.get(':nth-child(4) > .card > .card-footer > .btn').click()
            cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click()
            cy.get(':nth-child(1) > :nth-child(5) > .btn').click()
            cy.get(':nth-child(2) > :nth-child(5) > .btn').click()
            cy.get(':nth-child(1) > :nth-child(5) > .btn').click()
            cy.get(':nth-child(1) > :nth-child(5) > .btn').click()
            cy.get('.text-right > h3').should('be.visible')
        })
    }) 
})