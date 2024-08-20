class registerPage {
    enterURL() {
        cy.visit(
            "/register"
        );
    }

    enterFormFields(fields) {
        const fieldSelectors = {
            name: '#name.form-control',
            company: '#company.form-control',
            email: '#email.form-control',
            password: '#password.form-control',
            confirmpassword: '#password-confirm.form-control',
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
        const emailSelector = '#email.form-control';

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

    clickSubmitButton() {
        cy.get('[type="submit"]').click();
        return this;
    }

    verifySuccessfulRegistration() {
        cy.get(".success-page").should('be.visible');
    }

    verifyFailedlRegistration() {
        cy.location('pathname').should('eq', '/register')
    }
}

const register = new registerPage();
export default register;