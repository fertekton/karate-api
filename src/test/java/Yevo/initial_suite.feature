@poc
Feature: Set of tests 

        Background: 
                Given url base_url

Scenario: Request a new credit and user is eligible
        Given path  'api-credit/intranet/typeCredit'
        Given params {"amount": 500}
        When method Get
        Then status 200
        And match response.isEligible == true

Scenario: Request a new credit - validate response structure
        * def timeValidatorRegex = read('classpath:helpers/timeValidator.js')
        * url base_url
        Given params {"amount": 400}
        Given path  'api-credit/intranet/typeCredit'
        When method Get
        Then status 200
        And match each response.typeCredits ==
            """
                {
                        "name": "#string",
                        "amountRequested": "#number",
                        "typePreApproved": "#number",
                        "amountPreApproved": "#number",
                        "campaignEndDate": "##? timeValidatorRegex(_)",
                        "order": "#number"
                }
                
            """

Scenario Outline: Request a new credit and validate error message
        Given params {"amount": "<amountEntry>"}
        Given path  'api-credit/intranet/typeCredit'
        When method Get
        Then status 400
        Examples:
        |amountEntry|
        |asdass |       
        |9000990000|    
