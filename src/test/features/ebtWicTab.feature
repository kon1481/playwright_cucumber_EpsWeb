Feature: Validate WIC Tab in EPS web in powerApps

  Scenario: Verify Wic tab on WIC EBT Card Transaction in EPS Web powerApps
    Given I navigate to the EPS Web PowerApps
    When I enter username and password
      And  I should see the EPS Web PowerApps page
      And I click on skip popup
      And I click on preview button
      And I select the start date
      And I select the Card Type "EBT WIC Card"
      And I click on search button
      And I click on the Transaction
      And I click on more Details button
    Then I verify the columns on the WIC tab





