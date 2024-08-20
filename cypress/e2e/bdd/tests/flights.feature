Feature: As a user, I want to select a route so that I can search for flights

    Background: Navigate to the Flights Page
        Given User navigates to the BlazeDemo flights page
    @smoke @sanity
    Scenario: Successful Flight Route Selection
        When User selects a departure city
        And User selects a destination city
        And User clicks on the Find Flights button
        Then User should be redirected to the search results page displaying available flights for the selected route