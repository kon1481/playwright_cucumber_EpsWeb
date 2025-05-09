Feature: Validate Return Codes on search Transactions Page
@critical
  Scenario: Verify Return Codes
    Given I navigate to the EPS Web PowerApps
    When I enter username and password
    Then I should see the EPS Web PowerApps page
    And I click on skip popup
    And I click on preview button
    Then I verify the Return Codes on search Transactions Page