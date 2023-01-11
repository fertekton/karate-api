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

  config.captchaToken = ""
  //var accessToken = karate.callSingle('classpath:helpers/createToken.feature', config).authorization_token
  //karate.configure('headers',{Host: "yevo-nonprod-apimanagement.azure-api.net", Ocp-Apim-Subscription-Key: "bf5c9e1a285741268a8574a8481b8a0c",Ocp-Apim-Trace: true, re-captcha-token:  })
  return config;
}