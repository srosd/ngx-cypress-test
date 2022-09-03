/// <reference types="Cypress" />

describe('Our first suite', () => {

    it('first test', () => {

        cy.visit('/');
        cy.contains('Forms').click();
        cy.contains('Form Layouts').click();
        
        // by tag name
        cy.get('input');

        // by id
        cy.get('#inputEmail1');

        // by class name
        cy.get('.input-full-width');

        // by attribute name
        cy.get('[placeholder]');

        // by attr name and value
        cy.get('[placeholder="Email"]');

        // by class value
        cy.get('[class="input-full-width size-medium shape-rectangle"]');

        // by tag name and attr name with value
        cy.get('input[placeholder="Email"]');

        // by two different attrs
        cy.get('[placeholder="Email"][fullwidth]');

        // by tag name, attr with value, id and class name
        cy.get('input[placeholder="Email"]#inputEmail1.input-full-width');

        // the most recommended way by cypress
        cy.get('[data-cy="imputEmail1"]');
    })

});