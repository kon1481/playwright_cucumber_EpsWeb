Feature: Validate DL State on search Transactions Page
    @critical
    Scenario: Verify DL State
        Given I navigate to the EPS Web PowerApps
        When I enter username and password
        Then I should see the EPS Web PowerApps page
        And I click on skip popup
        And I click on preview button
        Then I verify DL states on search Transactions Page
            | DL State |
            | AB |
            | AK |
            | AL |
            | AR |
            | AS |
            | AZ |
            | BC |
            | CA |
            | CO |
            | CT |
            | DC |
            | DD |
            | DE |
            | FL |
            | GA |
            | GU |
            | HI |
            | I4 |
            | I5 |
            | I9 |
            | IA |
            | ID |
            | IL |
            | IN |
            | KS |
            | KY |
            | LA |
            | MA |
            | MB |
            | MD |
            | ME |
            | MI |
            | ML |
            | MN |
            | MO |
            | MS |
            | MT |
            | MX |
            | N2 |
            | NB |
            | NC |
            | ND |
            | NE |
            | NF |
            | NH |
            | NJ |
            | NM |
            | NS |
            | NT |
            | NV |
            | NY |
            | NZ |
            | OH |
            | OK |
            | ON |
            | OR |
            | PA |
            | PE |
            | PP |
            | PQ |
            | PR |
            | PW |
            | RA |
            | RI |
            | S6 |
            | SC |
            | SD |
            | SK |
            | SS |
            | TN |
            | TX |
            | UH |
            | UM |
            | UT |
            | VA |
            | VI |
            | VT |
            | WA |
            | WG |
            | WI |
            | WV |
            | WY |
            | YT |