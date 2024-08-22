/// <reference types="cypress" />
import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import purchase from "../../pages/purchasePage.cy";

beforeEach(function () {
    cy.fixture('PURCHASE_FORM.json').then((data) => {
        this.FORM = data;
    });
    cy.fixture('AIRPORT_DETAILS.json').then((data) => {
        this.AIRPORT = data;
    });
    cy.fixture('flight_sample_1.json').then((data) => {
        this.flight = data;
    });
    cy.fixture('purchase_sample_1.json').then((data) => {
        this.validpurchase = data;
    });
    cy.fixture('purchase_sample_2-invalid.json').then((data) => {
        this.invalidpurchase = data;
    });
})

Given("User is on the purchase page after successfully selecting a flight", () => {
    purchase.enterURL();
});

Then('User sees fields for name, address, city, state, ZIP code, and credit card information', function () {
    for (const [key, value] of Object.entries(this.FORM)) {
        cy.getByName(key).should('exist');
        cy.getByName(key).parent().prev().should("have.text", value);
    }
})

Then("User sees the flight details selected including airline, flight number, price, and fees", function () {
    cy.get('p').filter(':contains("Airline")').should('include.text',this.flight.airline);
    cy.get('p').filter(':contains("Flight Number")').should('include.text',this.flight.flight);
    cy.get('p').filter(':contains("Price")').should('include.text',this.flight.price);
    cy.get('p').filter(':contains("Arbitrary Fees and Taxes")').should('include.text','514.76');
    cy.get('p').filter(':contains("Total Cost")').should('include.text',this.flight.price + 514.76);
    cy.get('h2').should('include.text',`${this.flight.fromPort} to ${this.flight.toPort}`);
})

When('User fills out all required fields with valid information', function () {
    for (const [key, value] of Object.entries(this.validpurchase)) {
        if (key === "cardType"){
            cy.getByName(key).type(value);
        } else {
            cy.getByName(key).clear().type(value);
        }
    }
})

And("User clicks Purchase Flight", () => {
	purchase.clickSubmitButton();
});

Then("User sees a confirmation message with the payment details", () => {
    cy.location('pathname').should('eq', '/confirmation.php')
    cy.get('h1').contains('Thank you for your purchase today!');
})

When('User fills out the form with invalid information', function () {
    for (const [key, value] of Object.entries(this.invalidpurchase)) {
        if (key === "cardType"){
            cy.getByName(key).type(value);
        } else {
            cy.getByName(key).clear().type(value);
        }
    }
})

Then("User sees validation errors indicating which fields are missing", () => {
    cy.location('pathname').should('eq', '/purchase.php')
    cy.get('.purchase-error').should('exist');
})