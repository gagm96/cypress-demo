Feature: SEARCH - As a user I want to choose an available flight option so that I can book a trip

    Background: User is Redirected to the Search Results Page
        Given User is on the search results page after successfully selecting a flight route to search 

    @smoke @sanity
    Scenario: Choose a Flight
        When User clicks Choose This Flight for a given flight
        Then User is redirected to the purchase page