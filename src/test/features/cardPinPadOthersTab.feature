Feature: Validate Card Tab in EPS web in powerApps

  Scenario: Verify Card tab on Transaction Details page in EPS Web powerApps
    Given I navigate to the EPS Web PowerApps
    When I enter username and password
      And  I should see the EPS Web PowerApps page
      And I click on skip popup
      And I click on preview button
      And I select the start date
      And I click on search button
      And I click on the Transaction
      And I click on more Details button
    Then I verify the columns on the Card tab
    Then I verify the columns on the PinPad tab
    Then I verify the columns on the Other Tab





