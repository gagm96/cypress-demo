Feature: FLIGHTS - As a user I want to select a departure and destination city so that I can search for available flights

    Background: Navigate to the Flights Page
        Given User navigates to the BlazeDemo flights page

    @smoke @sanity
    Scenario: Validate Presence of Departure and Destination City Dropdowns
        Then User sees the dropdowns for selecting departure and destination cities

    @smoke @sanity
    Scenario: Validate Presence and Functionality of Destination of the Week Link
        Then User sees the destination of the week link and is able to visit it

    @smoke @sanity
    Scenario: Successful Flight Route Selection
        When User selects a departure city
        And User selects a destination city
        And User clicks on the Find Flights button
        Then User should be redirected to the search results page displaying available flights for the selected route