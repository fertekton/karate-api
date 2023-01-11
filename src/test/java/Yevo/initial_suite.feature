
Feature: Set of tests 

@logi
Scenario: Get token
        * configure headers = {Host: 'yevo-nonprod-apimanagement.azure-api.net', Ocp-Apim-Subscription-Key : 'bf5c9e1a285741268a8574a8481b8a0c', Ocp-Apim-Trace: true, re-captcha-token: "03AD1IbLAer5791f4NNehnljoUkhLDno9X29pl5E_kdLBtIqz9xsH7uLCDKdlhnUBmjXbyfqUO-FJtSAYILe0FNaqLv6Wj1Lf1dk92_rdgtUFmMkceieATHq5iV4-UlCjc5uByNacDYvPbBz5AcGCSJokkvB5pkNPvFTGiWDOvSwc2Ug0gNOsQOx5P3My_GBOUsxF5nPnr_CsOHsZ4khSOL5RLvlm7zo3SqdsswzDQ6nAyhL4amz9Jsf-zLKTM_lllw-enKJdzsERPwKekBnSOpqR55E-CB0ZZ4DDIC1lhlGwmAM70v0SY54v8faoWB_9Rg8Qy76MtOvuzYMq6HzEgc1lU52t4EZmn48D5PPBir5fVKBh0gYkHZpv1RLDs-Q83yXjISNXTfRMEyBAE4XCYwTViYSmypswaoZ0g-azKARhUvFcgZlRYMygrUXxkLYhSA8soWQUFUEyO_Ajj5LtJq5lhOEQ0FIx_edyTcDpemNDlhWVKyd2wGEG0d3hb5TmX_dAWcf6-uUZIFBfqbN97lcVUnt_sNp_Gly7P_cGFST9DdSvGMwBwXIs"}
        Given url base_url
        Given path 'oauth/token'
        And request {"documentNumber":"#(documentNumber)", "password": "#(userPassword)", "rememberMe": true}
        When method Post
        Then status 200
        * print access_token = response.access_tokens
        * def token_type = response.token_type
        * print aplication_token = response.aplication_token
        * def refresh_token = response.refresh_token
