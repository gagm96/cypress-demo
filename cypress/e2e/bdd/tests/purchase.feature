Feature: PURCHASE - As a user I want to enter my contact and billing information so that I can complete the purchase of a flight

    Background: User is Redirected to the Purchase Page
        Given User is on the purchase page after successfully selecting a flight

    Scenario: Display Purchase Form
        Then User sees fields for name, address, city, state, ZIP code, and credit card information
    
    Scenario: Verify Flight Details on Purchase Page
        Then User sees the flight details selected including airline, flight number, price, and fees
    
    @smoke @sanity
    Scenario: Submit Purchase Form with Valid Information
        When User fills out all required fields with valid information
        And User clicks Purchase Flight
        Then User sees a confirmation message with the payment details

    @sanity
    Scenario: Failed to Submit Purchase Form with Invalid Information
        When User fills out the form with invalid information
        And User clicks Purchase Flight
        Then User sees validation errors indicating which fields are missing