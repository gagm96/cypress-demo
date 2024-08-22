/// <reference types="cypress" />
import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import flights from "../../pages/flightsPage.cy";

Given("User navigates to the BlazeDemo flights page", () => {
    flights.enterURL();
});

Then("User sees the dropdowns for selecting departure and destination cities", () => {
    cy.getByIndex('h2',0).contains('Choose your departure city:').should('be.visible');
    cy.getByName('fromPort').should('be.visible');
    cy.getByIndex('h2',1).contains('Choose your destination city:').should('be.visible');
    cy.getByName('toPort').should('be.visible');
});

Then("User sees the destination of the week link and is able to visit it", () => {
    cy.get('a[href]').contains('destination of the week').should('be.visible').and('have.attr', 'href', 'vacation.html').click()
    cy.location("pathname").should("equal", '/vacation.html')
});

When("User selects a departure city", () => {
    flights.selectCity("from","Boston");
});

And("User selects a destination city", () => {
    flights.selectCity("to","New York");
});

And("User clicks on the Find Flights button", () => {
    flights.clickSubmitButton();
});

Then("User should be redirected to the search results page displaying available flights for the selected route", () => {
    cy.location("pathname").should("equal", '/reserve.php');
    cy.get('h3').contains("Boston to New York");

});