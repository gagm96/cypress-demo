class passwordResetPage {
  
    enterURL() {
        cy.visit(
            "/password/reset"
        );
    }

    enterEmail(email) {
        const emailSelector = '#email.form-control';
        cy.get(emailSelector).invoke('val', email);
        if (email === "") {
            cy.get('[type="submit"]').click();
            cy.get(`${emailSelector}:invalid`)
                .invoke('prop', 'validationMessage')
                .should('equal', 'Please fill out this field.');
        }
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

    verifyPasswordResetRequest() {
        cy.location('pathname').should('eq','/password/email')
        cy.get(".success-message").should('be.visible');
    }

    verifyFailedPasswordResetRequest() {
        cy.get(".password-reset-request-error").should('be.visible');
    }

}

const passwordReset = new passwordResetPage();
export default passwordReset;