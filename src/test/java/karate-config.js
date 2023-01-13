function fn() {
  var env = karate.env; // get system property 'karate.env'
  karate.log('karate.env system property was:', env);
  if (!env) {
    env = 'dev';
  }
  var config = {
    base_url: 'https://yevo-nonprod-apimanagement.azure-api.net/'
  }
  if (env == 'dev') {
    config.documentNumber = '47475818'
    config.userPassword = '12345'
  } else if (env == 'qa') {
    config.userEmail = 'xxxxxxxx'
    config.userPassword = 'xxxxxx'
  }

  // Insert manually the token generated after a validation.
  config.captchaToken = "CAPTCHA_VERIFY_TOKEN"
  var accessToken = karate.callSingle('classpath:helpers/createToken.feature', config).access_token
  var applicationToken = karate.callSingle('classpath:helpers/createToken.feature', config).application_token
  karate.configure('headers',{application_token: applicationToken, Authorization: 'Bearer ' + accessToken, 'Ocp-Apim-Subscription-Key': "bf5c9e1a285741268a8574a8481b8a0c" })
  return config;
}