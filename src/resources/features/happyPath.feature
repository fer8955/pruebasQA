@validatePurchase
Feature: Validate Purchase

    Background: Verify user is able to login with valid credentials
        Given I navigate to Saucedemo
        When I enter username "standard_user"
        And I enter password "secret_sauce"
        And I click on Login button
        Then I am on the Inventory page
        
    
    Scenario Outline: Buy product from the inventory page
        When I add the following "<product>" to the cart
        And I navigate to the cart page
        And I am on the "Your Cart" page
        And I validate the selected "<product>" is present in the cart
        And I proceed to checkout
        And I am on the "Checkout: Your Information" page
        And I complete the purchase with the information "<name>" "<lastName>" "<postalCode>"
        And I am on the "Checkout: Overview" page
        And I validate the selected "<product>" is present in the page Overview 
        Then I should see the purchase confirmation message "Thank you for your order!"

    Examples:
    | product                   |name   |lastName|postalCode|
    | Sauce Labs Backpack       |Jorge  |Montalvo|3432      |
    | Sauce Labs Bike Light     |Karen  |Arroyo  |35000     |
    | Sauce Labs Onesie         |Arianna|Cardenas|243452    |



 