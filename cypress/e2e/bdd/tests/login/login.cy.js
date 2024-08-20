/// <reference types="cypress" />
import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import login from "../../pages/loginPage.cy";

Given("User navigates to the BlazeDemo login page", () => {
	login.enterURL();
});

When("User enters valid credentials", (datatable) => {
	datatable.hashes().forEach((element) => {
		login.enterEmailPassword({
            email: element.validemail,
            password: element.validpassword
        });
	});
});

And("User checks the Remember Me checkbox", () => {
	login.checkRememberMe();
});

And("User clicks on Login button", () => {
	login.clickSubmitButton();
});

Then("User is redirected to their profile", () => {
	login.verifySuccessfulLogin();
});

When("User enters invalid credentials", (datatable) => {
    datatable.hashes().forEach((element) => {
            login.enterEmailPassword({
            email: element.invalidemail,
            password: element.invalidpassword
        });
    });
});

Then("User should see an error message indicating the credentials are incorrect", () => {
	login.verifyFailedlLogin();
});

When("User enters a valid password", (datatable) => {
    datatable.hashes().forEach((element) => {
        login.enterEmailPassword({
        email: '',
        password: element.validpassword
        });
    });
});

And("User enters an invalid email", (datatable) => {
	datatable.hashes().forEach((element) => {
		login.validateEmailAddress({
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
	cy.get('#email')
	.invoke('prop', 'validationMessage')
	.should('exist');
});

When("User clicks on the Forgot Your Password? link", () => {
	cy.get('.form-group').find('a').filter(':contains(Forgot Your Password?)').click();
});

Then("User is redirected to the Reset Password page", () => {
	cy.location('pathname').should('eq','/password/reset')
}); 