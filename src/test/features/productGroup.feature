Feature: Validate Product Group on search Transactions Page
    @critical
    Scenario: Verify Product Group values
        Given I navigate to the EPS Web PowerApps
        When I enter username and password
        Then I should see the EPS Web PowerApps page
        And I click on skip popup
        And I click on preview button
        Then I verify the Product Group values on search Transactions Page
            | Product Group                             |
            | ADS (Provider)                            |
            | AOL                            (Provider) |
            | ASI / Batch (Provider)                    |
            | AT&T                           (Provider) |
            | Aegon BLAST/valutec (Provider)            |
            | Alltel                         (Provider) |
            | Amazon (Provider)                         |
            | American Express               (Provider) |
            | Apple                          (Provider) |
            | Archway Batch (Provider)                  |
            | BELK (Provider)                           |
            | BH1/Apple (Provider)                      |
            | BH1/Talbots (Provider)                    |
            | BHEN/Adventure Quest (Provider)           |
            | BHEN/Cartoon Doll (Provider)              |
            | BHEN/Chockstone (Provider)                |
            | BHEN/Club Penguin (Provider)              |
            | BHEN/EA (Provider)                        |
            | BHEN/EMI (Provider)                       |
            | BHEN/Gaia (Provider)                      |
            | BHEN/Habbo (Provider)                     |
            | BHEN/IMVU (Provider)                      |
            | BHEN/Mercury (Provider)                   |
            | BHEN/Neopets (Provider)                   |
            | BHEN/Nexon (Provider)                     |
            | BHEN/Paygo/NetworkIP (Provider)           |
            | BHEN/Stardoll (Provider)                  |
            | BHEN/Wee World (Provider)                 |
            | BHEN/Wild Tangent (Provider)              |
            | BHEN/Zwinky (Provider)                    |
            | BHEN/gPotato (Provider)                   |
            | BHEN/iWireless/Qualution (Provider)       |
            | BHMC (Provider)                           |
            | BHN AirtimeCards(AirtimeCards) (Group)    |
            | BHN Direct (Provider)                     |
            | BHN Lottery (Lottery Cards) (Group)       |
            | BHN/Cingular (Provider)                   |
            | BHN/Galileo (Provider)                    |
            | BHN/Metavante (Provider)                  |
            | BHN/Virgin (Provider)                     |
            | BLAST/ Givex (BHIS) (Provider)            |
            | BLAST/Apple (BHI1) (Provider)             |
            | BLAST/Charming Shoppes (Provider)         |
            | BLAST/Home Depot (BHHD) (Provider)        |
            | BLAST/Puretracks (Provider)               |
            | BLAST/SVS (BHIS) (Provider)               |
            | BLAST/TJMAXX (Provider)                   |
            | BLAST/Valuelink (BHIS) (Provider)         |
            | BLISS (Provider)                          |
            | Bell South                     (Provider) |
            | Betc/Club Penguin (Provider)              |
            | Betc/Facebook (Provider)                  |
            | Betc/Nexon (Provider)                     |
            | Betc/Nintendo (Provider)                  |
            | Binweevils (Provider)                     |
            | Blackhawk 1st Party (Provider)            |
            | Blackhawk Cred HT (Post-Tend) (Group)     |
            | Blackhawk GCM (Post-Tender) (Group)       |
            | Blackhawk KGC-1st(Post-Tender) (Group)    |
            | Blackhawk UMS Test (Provider)             |
            | Blkhawk Drug GM (Post-Tender) (Group)     |
            | Blkhawk Handsets (Post Tender) (Group)    |
            | Blkhawk PPD LD (Post Tender) (Group)      |
            | Blkhawk WL POR (Post-Tender) (Group)      |
            | Blkhawk wireless (Post Tender) (Group)    |
            | Blkhwk IW Card (Post Tender) (Group)      |
            | Blkhwk IW Handset (Post Tendr) (Group)    |
            | Bon-Ton                        (Provider) |
            | Boost                          (Provider) |
            | Boscov's Direct connect (Provider)        |
            | C-Store BH GCM (Post-Tender) (Group)      |
            | C-Store BH PPD LD(Post-Tender) (Group)    |
            | C-Store Credit GC(Post-Tender) (Group)    |
            | C-Store IW POR (Post-Tender) (Group)      |
            | C-store BH Hndset(Post-Tender) (Group)    |
            | Cabela's                       (Provider) |
            | Charming Shoppes (Provider)               |
            | Chase Paymentech (Provider)               |
            | Chockstone (Provider)                     |
            | Cincinnati Bell                (Provider) |
            | Cinemark Theaters (Provider)              |
            | Cingular                       (Provider) |
            | Clutch (Provider)                         |
            | Concord EFS                    (Provider) |
            | Cost Plus Direct (Provider)               |
            | Credit Gift Card (Post-Tender) (Group)    |
            | Credit Gift Card (Pre-Tender) (Group)     |
            | Cricket (Provider)                        |
            | Delta Airlines (Provider)                 |
            | Digital Art                    (Provider) |
            | Direct (Provider)                         |
            | Direct Connect                 (Provider) |
            | E-Diet                         (Provider) |
            | Eddie Bauer                    (Provider) |
            | Encompass (Provider)                      |
            | Epay (Provider)                           |
            | FastFoward                     (Provider) |
            | Federated                      (Provider) |
            | Firstdata (Provider)                      |
            | Forever21 (Provider)                      |
            | GMG Entertainment (Provider)              |
            | GTP (Provider)                            |
            | Galaxy Connect (Provider)                 |
            | Genie iWireless                (Provider) |
            | Givex                          (Provider) |
            | Google Direct (Provider)                  |
            | Green Dot                      (Provider) |
            | Groupon (Provider)                        |
            | BHSPSIM1 (Provider)                       |
            | Worldpay (Provider)                       |
            | betc/Krome (Provider)                     |
            | RTP (Provider)                            |
            | Kroger Gift                    (Provider) |
            | Micros Retail (Provider)                  |
            | HD Conv Box CECB (Group)                  |
            | C-Store IW Hndset(Post-Tender) (Group)    |
            | Home Depot (Provider)                     |
            | IC2 (Provider)                            |
            | IDT                            (Provider) |
            | Ikea (Provider)                           |
            | InComm Drug GM (Pre-Tender) (Group)       |
            | InComm GCM (Pre-Tender) (Group)           |
            | InComm Handset (Pre-Tender) (Group)       |
            | InComm PPD LD (Pre-Tender) (Group)        |
            | InComm Wireless (Pre-Tender) (Group)      |
            | Incomm (Provider)                         |
            | Jigsaw (Provider)                         |
            | Joe's Direct Connect (Provider)           |
            | KPF Products (Pre-Tender) (Group)         |
            | Keystone (Provider)                       |
            | Kohl's                         (Provider) |
            | Kroger GC (Post-Tender) (Group)           |
            | Kroger GC (Pre-Tender) (Group)            |
            | Kroger MultiPack (Post Tender) (Group)    |
            | Krome Photo (Provider)                    |
            | Loyalmark (Provider)                      |
            | MCI                            (Provider) |
            | Macy's (Provider)                         |
            | Men's Warehouse                (Provider) |
            | Merchant Link                  (Provider) |
            | Mercury (Provider)                        |
            | Metavante Direct (Provider)               |
            | Microsoft                      (Provider) |
            | Mother's Work                  (Provider) |
            | Movida                         (Provider) |
            | Multi Card (Provider)                     |
            | NETPOS (Provider)                         |
            | Napster                        (Provider) |
            | Net 10 (Provider)                         |
            | Netspend (Provider)                       |
            | Nike                           (Provider) |
            | Nintendo (Provider)                       |
            | Nordstrom                      (Provider) |
            | OptiCard                       (Provider) |
            | Original HT GC (Post/Tender) (Group)      |
            | PayGo Mobile Direct (Provider)            |
            | Paysafe (Provider)                        |
            | Paytronics                     (Provider) |
            | Presolutions (Provider)                   |
            | Profit Point (Provider)                   |
            | RBSLynk                        (Provider) |
            | REI                            (Provider) |
            | Radiant Systems (Provider)                |
            | Rixty (Provider)                          |
            | Roam Mobility (Provider)                  |
            | STI                            (Provider) |
            | Saks (Provider)                           |
            | Samba Days (Provider)                     |
            | Scrambler Maries (Provider)               |
            | Seven Springs Direct (Provider)           |
            | Smart Transaction System (Provider)       |
            | Southwest Airlines             (Provider) |
            | Sparkbase (Provider)                      |
            | Speciality (Provider)                     |
            | Speedway (Provider)                       |
            | Starbucks GC (Post Tender) (Group)        |
            | Store Financial (Provider)                |
            | Stored Value Systems (Provider)           |
            | Stub Hub (Provider)                       |
            | Synergy (Provider)                        |
            | T Mobile                       (Provider) |
            | TJ Maxx Direct (Provider)                 |
            | Target (Provider)                         |
            | Telcel US (Provider)                      |
            | Total Wireless (Provider)                 |
            | Totus (Provider)                          |
            | TracFone (Provider)                       |
            | US Bank FSV (Provider)                    |
            | Universal Orlando              (Provider) |
            | Universal Wireless             (Provider) |
            | Univision (Provider)                      |
            | ValuTec (Provider)                        |
            | ValueLink                      (Provider) |
            | Vantiv (5/3 Bank) (Provider)              |
            | Verizon                        (Provider) |
            | Virgin Experience (Provider)              |
            | Virgin Mobile                  (Provider) |
            | West/Verizon (Provider)                   |
            | WildCard / eFunds (Provider)              |
            | b24/BHMC (Provider)                       |
            | betc/ATT (Provider)                       |
            | eFunds (Provider)                         |
            | marshalls (Provider)                      |