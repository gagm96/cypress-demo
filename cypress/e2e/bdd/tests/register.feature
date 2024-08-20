Feature: As a new user, I want to register for an account so that I can book flights and access additional features

    Background: Navigate to the Registration Page
        Given User navigates to the BlazeDemo registration page
    
    Scenario: Successful User Registration
        When User fills in all required fields with valid information
        | name              | company | email                         | password  | confirmpassword |
        | Unregistered User | Contoso | new-user@yopmail.com          | Password1 | Password1       |
        And User clicks on Register button
        Then User should be redirected to a confirmation page
    
    Scenario: Unable to Complete Registration with Missing Required Fields
        When User leaves one or more required fields empty
        | name              | company | email                         | password  | confirmpassword |
        | Unregistered User | Contoso | new-user@yopmail.com          | Password1 | Password1       |
        And User clicks on Register button
        Then User should see an error message indicating at least one required field still needs to be filled out

    Scenario: Unable to Complete Registration with Invalid Email
        When User has filled in all the required fields with valid information except email address
        | name              | company | password  | confirmpassword |
        | Unregistered User | Contoso | Password1 | Password1       |
        And User enters an invalid email
        | noUsername   | noDomain  | noAtSign             | doubleAtSign          | cyrilicAlphabet      | specialCharacters          |
        | @yopmail.com | username@ | username.yopmail.com | username@@yopmail.com | usernаme@yopmаil.cоm | us..er&na~me@-yop_mail.com |
        And User clicks on Register button
        Then User should see an error message indicating that the email address does not meet the requirements