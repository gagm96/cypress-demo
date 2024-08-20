/// <reference types="cypress" />
import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import register from "../../pages/registerPage.cy";

Given("User navigates to the BlazeDemo registration page", () => {
	register.enterURL();
});

When("User fills in all required fields with valid information", (datatable) => {
	datatable.hashes().forEach((element) => {
		register.enterFormFields({name: element.name, company: element.company, email: element.email, password: element.password, confirmpassword: element.confirmpassword});
	});
});

And("User clicks on Register button", () => {
	register.clickSubmitButton();
});

Then("User should be redirected to a confirmation page", () => {
	register.verifySuccessfulRegistration();
});

When("User leaves one or more required fields empty", (datatable) => {
	datatable.hashes().forEach((element) => {
		register.enterFormFields({name: '', company: '', email: element.email, password: element.password, confirmpassword: element.confirmpassword});
	});
});

Then("User should see an error message indicating at least one required field still needs to be filled out", () => {
	register.verifyFailedlRegistration();
});

When("User has filled in all the required fields with valid information except email address", (datatable) => {
    datatable.hashes().forEach((element) => {
        register.enterFormFields({name: element.name, company: element.company, email: '', password: element.password, confirmpassword: element.confirmpassword});
    });
});

And("User enters an invalid email", (datatable) => {
	datatable.hashes().forEach((element) => {
		register.validateEmailAddress({
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