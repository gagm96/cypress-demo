/// <reference types="cypress" />
import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import passwordReset from "../../pages/passwordResetPage.cy";

Given("User is in to the BlazeDemo reset password page", () => {
	passwordReset.enterURL();
});

When("User enters a registered email", (datatable) => {
	datatable.hashes().forEach((element) => {
		passwordReset.enterEmail(element.validemail);
	});
});

And("User clicks on Send Password Reset Link button", () => {
	passwordReset.clickSubmitButton();
});

Then("User should be redirected to a confirmation page indicating that a password reset link has been sent to their email", () => {
	passwordReset.verifyPasswordResetRequest();
});

When("User enters an unregistered email", (datatable) => {
	datatable.hashes().forEach((element) => {
		passwordReset.enterEmail(element.invalidemail);
	});
});

Then("User should see an error message indicating that the email is not associated with any account", () => {
passwordReset.verifyFailedPasswordResetRequest();
});

When("User leaves the email field empty", (datatable) => {
	datatable.hashes().forEach((element) => {
		passwordReset.enterEmail("");
	});
});

Then("User should see an error message indicating that the email field is required", () => {
	cy.get('[type="submit"]').click();
	cy.get('#email.form-control:invalid')
	.invoke('prop', 'validationMessage')
	.should('equal', 'Please fill out this field.');
});

Then("User should not get a Page Expired Error 409", () => {
	passwordReset.verifyFailedPasswordResetRequest();
});

When("User enters an invalid email", (datatable) => {
	datatable.hashes().forEach((element) => {
		passwordReset.validateEmailAddress({
            noUsername: element.noUsername,
            noDomain: element.noDomain,
            noAtSign: element.noAtSign,
            doubleAtSign: element.doubleAtSign,
            cyrilicAlphabet: element.cyrilicAlphabet,
            specialCharacters: element.specialCharacters
        });
	});
});

Then("User should see an error message indicating that the email address does not meet the requirements", () => {
	cy.get('#email.form-control:invalid')
	.invoke('prop', 'validationMessage')
	.should('exist');
});