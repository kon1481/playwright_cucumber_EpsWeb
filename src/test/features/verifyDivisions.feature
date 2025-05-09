Feature: Validate Divisions

  Scenario: Verify divisions dropdown values
    Given I navigate to the EPS Web PowerApps
    When I enter username and password
    Then I should see the EPS Web PowerApps page
    And I click on skip popup
    And I click on preview button
    Then verify the dropdown values should match the below expected list
      |Divisions|
      | Atlanta |
      | Central |
      | Cincinnati |
      | Columbus |
      | CS 2 |
      | CS 3 |
      | CS 6 |
      | Dallas |
      | Delta |
      | Dillon |
      | Food 4 Less |
      | Fred Meyer |
      | Fred Meyer Jewelry |
      | Frys |
      | Harris-Teeter |
      | Harris-Teeter Network (Ocado) |
      | Houston |
      | KCRC |
      | King Soopers |
      | Kitchen 1883 - Cincinnati |
      | Kroger Network (Ocado) |
      | Kroger Specialty Pharmacy |
      | local mkt |
      | Louisville |
      | Michigan |
      | Mid Atlantic |
      | Moto |
      | Nashville |
      | QFC |
      | Ralphs |
      | Roundy's Chicago |
      | Roundy's Wisconsin |
      | Ruler Foods |
      | SHIP (Boca) |
      | Smiths |
      | The Little Clinic |
      | Walgreens |
