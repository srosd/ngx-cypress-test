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

    it('second test', () => {
        cy.visit('/');
        cy.contains('Forms').click();
        cy.contains('Form Layouts').click();

        cy.get('[data-cy="signInButton"]');

        cy.contains('Sign in');

        cy.contains('[status="warning"]', 'Sign in')

        cy.get('#inputEmail3')
            .parents('form')
            .find('button')
            .should('contain', 'Sign in')
            .parents('form')
            .find('nb-checkbox')
            .click();

        cy.contains('nb-card', 'Horizontal form').find('[type="email"]')
    });

    it.only('then and wrap methods', () => {
        cy.visit('/');
        cy.contains('Forms').click();
        cy.contains('Form Layouts').click();

        // cy.contains('nb-card', 'Using the Grid').find('[for="inputEmail1"]').should('contain', 'Email');
        // cy.contains('nb-card', 'Using the Grid').find('[for="inputPassword2"]').should('contain', 'Password');

        // cy.contains('nb-card', 'Basic form').find('[for="exampleInputEmail1"]').should('contain', 'Email address');
        // cy.contains('nb-card', 'Basic form').find('[for="exampleInputPassword1"]').should('contain', 'Password');

        cy.contains('nb-card', 'Using the Grid').then(form => {
            const emailLabelFirst = form.find('[for="inputEmail1"]').text();
            const passwordLabelFirst = form.find('[for="inputPassword2"]').text();
            
            expect(emailLabelFirst).to.equal('Email');
            expect(passwordLabelFirst).to.equal('Password');

            cy.wrap(form).find('[for="inputEmail1"]').should('contain', 'Email');

            cy.contains('nb-card', 'Basic form').then(secondForm => {
                const passwordLabelSecond = secondForm.find('[for="exampleInputPassword1"]').text();
                expect(passwordLabelFirst).to.equal(passwordLabelSecond);
            })
        });

    });

});