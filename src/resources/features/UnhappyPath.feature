@invalidUser
Feature: Validate credencials

    Scenario: Verify user is able to login with invalid credentials
        Given I navigate to Saucedemo
        When I enter username "locked_out_user"
        And I enter password "secret_sauce"
        And I click on Login button
        Then I should see an error message "Epic sadface: Sorry, this user has been locked out."


        


 