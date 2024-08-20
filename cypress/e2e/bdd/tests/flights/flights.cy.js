/// <reference types="cypress" />
import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import flights from "../../pages/flightsPage.cy";
import reserve from "../../pages/reservePage.cy";
import purchase from "../../pages/purchasePage.cy";
import confirmation from "../../pages/confirmationPage.cy";

Given("User navigates to the BlazeDemo flights page", () => {
  login.enterURL();
});

// When("User enters valid credentials", (datatable) => {
//   datatable.hashes().forEach((element) => {
//     login.enterUserNamePassword(element.validemail, element.validpassword);
//   });
// });

// And("User clicks on Login button", () => {
//   login.clickSubmitButton();
// });

// Then("User is redirected to their profile", () => {
//   login.verifySuccessfulLogin();
// });

// When("User enters invalid credentials", (datatable) => {
//   datatable.hashes().forEach((element) => {
//     login.enterUserNamePassword(element.invalidemail, element.invalidpassword);
//   });
// });

// Then("User should see an error message indicating the credentials are incorrect", () => {
//   login.verifyFailedlLogin();
// });