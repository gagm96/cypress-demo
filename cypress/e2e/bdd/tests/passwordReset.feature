Feature: As a user who forgot my password, I want to reset my password so that I can regain access to my account

    Background: Navigate to the Reset Password Page
		Given User is in to the BlazeDemo reset password page
    @sanity
    Scenario: Successful Password Reset Request
		When User enters a registered email
		| validemail                  |
		| registered-user@yopmail.com |
		And User clicks on Send Password Reset Link button
		Then User should be redirected to a confirmation page indicating that a password reset link has been sent to their email
    @sanity
    Scenario: Failed Password Reset Request with Unregistered Email
		When User enters an unregistered email
		| invalidemail                  |
		| unregistered-user@yopmail.com |
		And User clicks on Send Password Reset Link button
		Then User should see an error message indicating that the email is not associated with any account
    @sanity
    Scenario: Unable to Complete Password Reset Request with Email Field Empty
		When User leaves the email field empty
		| email   |
		| <blank> |
		And User clicks on Send Password Reset Link button
		Then User should see an error message indicating that the email field is required
    @defect
    Scenario: Defect - Successful Password Reset Request Must Not Result in Error 409 Page Expired
		When User enters a registered email
		| validemail                  |
		| registered-user@yopmail.com |
		And User clicks on Send Password Reset Link button
		Then User should not get a Page Expired Error 409
    @sanity
    Scenario: Unable to Complete Password Reset Request with Invalid Email
        When User enters an invalid email
        | noUsername   | noDomain  | noAtSign             | doubleAtSign          | cyrilicAlphabet      | specialCharacters          |
        | @yopmail.com | username@ | username.yopmail.com | username@@yopmail.com | usernаme@yopmаil.cоm | us..er&na~me@-yop_mail.com |
        And User clicks on Send Password Reset Link button
        Then User should see an error message indicating that the email address does not meet the requirements