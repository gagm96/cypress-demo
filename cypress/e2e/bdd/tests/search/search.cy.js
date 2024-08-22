/// <reference types="cypress" />
import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import search from "../../pages/searchPage.cy";

Given("User is on the search results page after successfully selecting a flight route to search", () => {
    search.enterURL();
});

When("User clicks Choose This Flight for a given flight", () => {
    search.clickSubmitButton();
});

When("User is redirected to the purchase page", () => {
    cy.location("pathname").should("equal", '/purchase.php');
    cy.get('h2').contains("Boston to New York");
});