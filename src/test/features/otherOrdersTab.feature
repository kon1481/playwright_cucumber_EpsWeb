@smoke
Feature: Validate OtherOrders Tab in EPS web in powerApps

  Scenario: Verify OtherOrders tab on  in EPS Web powerApps
    Given I navigate to the EPS Web PowerApps
    When I enter username and password
      And  I should see the EPS Web PowerApps page
      And I click on skip popup
      And I click on preview button
      And I select the start date
      And I select the transaction code "Gift"
      And I select the Sub transaction code as "GC Reimbursed (302-0)"
      And I click on search button
      And I click on the Transaction
      And I click on more Details button
    Then I verify the tabs for the GC Reimbursed transaction
    And I verify the columns on the Other orders tab





