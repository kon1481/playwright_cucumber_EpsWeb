Feature: Validate offline on search Transactions Page
@critical
  Scenario: Verify offline values 
    Given I navigate to the EPS Web PowerApps
    When I enter username and password
    Then I should see the EPS Web PowerApps page
    And I click on skip popup
    And I click on preview button
    Then I verify the offline values on search Transactions Page
     | Offline |
     | Yes |
     | No |

     
