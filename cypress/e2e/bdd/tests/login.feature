Feature: As a registered user, I want to log in to my account with my credentials so that I can access my profile and personalized features

    Background: Navigate to the Login Page
        Given User navigates to the BlazeDemo login page
    @smoke @sanity
    Scenario: Successful Login with Valid Credentials
		When User enters valid credentials
		| validemail                  | validpassword |
		| registered-user@yopmail.com | goodPassword1 |
		And User clicks on Login button
		Then User is redirected to their profile
    @sanity
    Scenario: Failed Login with Invalid Credentials
		When User enters invalid credentials
		| invalidemail                  | invalidpassword |
		| unregistered-user@yopmail.com | badPassword1    |
		And User clicks on Login button
		Then User should see an error message indicating the credentials are incorrect
    @sanity
    Scenario: Unable to Complete Login with Invalid Email
        When User enters a valid password
        | validpassword  |
        | goodPassword1  |
        And User enters an invalid email
        | noUsername   | noDomain  | noAtSign             | doubleAtSign          | cyrilicAlphabet      | specialCharacters          |
        | @yopmail.com | username@ | username.yopmail.com | username@@yopmail.com | usernаme@yopmаil.cоm | us..er&na~me@-yop_mail.com |
        And User clicks on Login button
        Then User should see an error message indicating that the email address does not meet the requirements
    
    Scenario: Successful Login with Valid Credentials and Remember Me Enabled
		When User enters valid credentials
		| validemail                  | validpassword |
		| registered-user@yopmail.com | goodPassword1 |
        And User checks the Remember Me checkbox
		And User clicks on Login button
		Then User is redirected to their profile
    
    Scenario: Navigate to the Reset Password Page
		When User clicks on the Forgot Your Password? link
		Then User is redirected to the Reset Password page