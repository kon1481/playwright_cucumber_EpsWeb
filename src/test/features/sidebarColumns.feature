Feature: Validate Sidebar columns in EPS web in powerApps

  Scenario: Verify Side bar columns on Transaction Details page in EPS Web powerApps
    Given I navigate to the EPS Web PowerApps
    When I enter username and password
      And  I should see the EPS Web PowerApps page
      And I click on skip popup
      And I click on preview button
       And I select the start date and End date
      And I click on search button
      And I click on the Transaction
    Then I verify the columns on the Side bar panel





