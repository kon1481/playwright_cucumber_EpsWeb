Feature: Validate Card Type on search Transactions Page
    @critical
    Scenario: Verify Card Type State
        Given I navigate to the EPS Web PowerApps
        When I enter username and password
        Then I should see the EPS Web PowerApps page
        And I click on skip popup
        And I click on preview button
        Then I verify Card Type on search Transactions Page
            | Card Type                               |
            | Advice Code                             |
            | Advice Message                          |
            | Amex SVS GC                             |
            | Amex Card                               |
            | Blackhawk GCM                           | 
            | Citi Bank Loan                          |
            | Certegy Check                           |
            | Debit Card                              |
            | Discover Card                           |
            | EBT FS/AFDC Card                        |
            | KPF FSV Gift/GPR                        |
            | Fleet                                   |
            | Payforward Healthcare                   |
            | Enterprise Gift Card                    |
            | Green Dot                               |
            | Turkey Hill Experience Gift Card        |
            | Fuel Gift Card                          |
            | Genesis                                 |
            | Green Dot Reload                        |
            | Enterprise Gift Card Mass-Valuation     |
            | Enterprise Promotional Gift Card        |
            | Enterprise Merchandise Return Gift Card |
            | C-Store Gift Card                       |
            | Harris Teeter Gift Card                 |
            | Instacart                               |
            | Incomm Healthcare                       |
            | Store Totals                            |
            | Kroger ACH                              |
            | KPF Gift Card                           |
            | KrogerPay Error                         |
            | Mastercard                              |
            | Mastercard GPR Reload                   |
            | KPF Metavante GPR                       |
            | Nations Healthcare                      |
            | NetSpend                                |
            | FIS Healthcare                          |
            | Prepaid Telecom                         |
            | PPM Healthcare                          |
            | US South                                |
            | Roundy's Gift Card                      |
            | Roundy's Pvt Lbl Non-taxable            |
            | Roundy's Pvt Lbl Taxable                |
            | Starbucks                               |
            | Starbucks Coupon                        |
            | Citgo Gift Cards                        |
            | Blackhawk - 1st Party                   |
            | TDRCS Loan                              |
            | Tracfone Handset                        |
            | Green Dot GPR Reload                    |
            | Visa GPR Reload                         |
            | Visa Card                               |
            | WEX Healthcare                          |
            | EBT WIC Card                            |