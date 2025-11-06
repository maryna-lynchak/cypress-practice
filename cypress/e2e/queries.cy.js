/// <reference types="cypress" />

describe('Search elements queries', () => {
    beforeEach (() => {
        cy.visit('/')
      
    })

    it('cy.get()', () => { 
        cy.get('h1');
        cy.get('img');
    })

    it('cy.contains()', () => {
        cy.contains('Sign In');
        cy.contains('Do more!');
        cy.contains('Guest log in');
        cy.contains('Log fuel expenses');
    })

    it('cy.contains()', () => {
        cy.contains('Sign In');
        cy.contains('Do more!');
        cy.contains('Guest log in');
        cy.contains('Log fuel expenses');
    })

     it('find()', () => {
        cy.get('header').find('button');
        cy.get('footer');

    })

    it('children()', () => {
        cy.get('header').find('button');
        cy.get('nav').children('button');
    })

    it('parent()', () => {
        cy.get('.header_signin').parents('header');
        cy.get('.btn-primary').parents('body');
        
    })

    it('within()', () => {
        cy.get('button');
        cy.contains('Sign up').click();
        cy.get('button');
        cy.get('div.modal-content').within(() => {
            cy.get('button');
            cy.root().parent();
        })
        cy.get('.modal-content .btn-primary')
    })

       describe('Multiple elements', () => {

        it('first, last, eq', () => {
            cy.get('.socials_link').first();
            cy.get('.socials_link').last();
            cy.get('.socials_link').eq(2);
            cy.get('.socials_link').eq(-2);
        })
    })


})