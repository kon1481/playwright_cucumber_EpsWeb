Feature: Navigate to the EPS web in powerApps

  Scenario: Login and navigate to the EPS Web powerApps
    Given I navigate to the EPS Web PowerApps
    When I enter username and password
    Then I should see the EPS Web PowerApps page
    And I click on skip popup
    And I click on preview button

 
