Feature: Validate EntryMode on Search Transaction Page

  Scenario: Verify EntryMode values
    Given I navigate to the EPS Web PowerApps
    When I enter username and password
    Then I should see the EPS Web PowerApps page
    And I click on skip popup
    And I click on preview button
    Then the EntryMode dropdown values should match the expected values
    |EntryModes|
    |Manual|
    |Swiped|
    |EMV Chip|
    |Contactless (MSD)|
    |Scanned|
    |Trk Read Not Sent|
    |EMV Contactless|
    |Not Sent|
    |Chip Read But not Sent in Message|
    |PAN entry via electronic commerce, remote chip|
    |Credentials On File|
    |Contactless Chip Read But not Sent in Message|
    |Softcard Mobile|
    |Fallback without prior Voice Authorization|
    |EMV Fallback to Keyed (Voice Auth)|
    |EMV Chip Err-Fallback to MSR|
    |EMV Fallback to MSR (Empty Cand List)|
    |EMV Chip Err-Fallback to MSR - Srvc CD Err|
    |EMV Fallback MSR (Empty Cand List)-Srvc CD Err|
