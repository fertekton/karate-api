Feature: Get Access Token for services


Scenario: Get token
        * configure headers = {Host: 'yevo-nonprod-apimanagement.azure-api.net', Ocp-Apim-Subscription-Key : 'bf5c9e1a285741268a8574a8481b8a0c', Ocp-Apim-Trace: true, re-captcha-token: "#(captchaToken)"}
        Given url base_url
        Given path 'oauth/token'
        And request {"documentNumber":"#(documentNumber)", "password": "#(userPassword)", "rememberMe": true}
        When method Post
        Then status 200
        * def access_token = response.access_tokens
        * def token_type = response.token_type
        * def aplication_token = response.aplication_token
        * def refresh_token = response.refresh_token
