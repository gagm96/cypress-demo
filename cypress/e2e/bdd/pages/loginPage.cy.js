class LoginPage {
    enterURL() {
        cy.visit(
            "/login"
        );
    }

    enterEmailPassword(fields) {
        const fieldSelectors = {
            email: '#email',
            password: '#password',
        };

        Object.keys(fields).forEach((field) => {
            const value = fields[field];
            cy.get(fieldSelectors[field]).invoke('val', value);
            if (value === "") {
                cy.get('[type="submit"]').click();
                cy.get(`${fieldSelectors[field]}:invalid`)
                    .invoke('prop', 'validationMessage')
                    .should('equal', 'Please fill out this field.');
            }
        });
        return this;
    }

    validateEmailAddress(samples) {
        const emailSelector = '#email';

        Object.keys(samples).forEach((sample) => {
            const value = samples[sample];
            cy.get(emailSelector).invoke('val', value);
                cy.get('[type="submit"]').click();
                cy.get(`${emailSelector}:invalid`)
                    .invoke('prop', 'validationMessage')
                    .should('exist');
        });
        return this;
    }

    checkRememberMe() {
        cy.contains('label', 'Remember Me').find('input[type="checkbox"]').check();
        return this;
    }

    clickSubmitButton() {
        cy.get('[type="submit"]').click();
        return this;
    }

    verifySuccessfulLogin() {
        cy.get(".success-page").should('be.visible');
    }

    verifyFailedlLogin() {
        cy.get(".login-error").should('be.visible');
    }
 }

 const login = new LoginPage();
 export default login;