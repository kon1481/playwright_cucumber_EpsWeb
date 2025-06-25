Feature: Validate Reversal on search Transactions Page
@critical
  Scenario: Verify Reversal values 
    Given I navigate to the EPS Web PowerApps
    When I enter username and password
    Then I should see the EPS Web PowerApps page
    And I click on skip popup
    And I click on preview button
    Then I verify the Reversal values on search Transactions Page
     | Reversal |
     | Yes |
     | No |
     | Voids |
     | No Voids |

     
