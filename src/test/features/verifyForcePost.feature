Feature: Validate Force Post on search Transaction Page

  Scenario: Verify Force post dropdown values
    Given I navigate to the EPS Web PowerApps
    When I enter username and password
    Then I should see the EPS Web PowerApps page
    And I click on skip popup
    And I click on preview button
    Then verify the force post values should match the below expected list
      |ForcePost|
      |0-Normal|
      |1-Completion|
      |4-Void|
      |7-SAF|
     
