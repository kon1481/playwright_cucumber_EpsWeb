Feature: Validate Module on search Transactions Page
@critical
  Scenario: Verify Module values 
    Given I navigate to the EPS Web PowerApps
    When I enter username and password
    Then I should see the EPS Web PowerApps page
    And I click on skip popup
    And I click on preview button
    Then I verify the Module values on search Transactions Page
     | Module |
     | M1-CDC |
     | M2-HDC |
     | M3-CDC |