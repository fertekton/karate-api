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
  config.captchaToken = "03AD1IbLBIqlIAsW5BtyG9yq_VsBpo5Y5IAA2fIWgKwHDjSk6KYGAdM27coILuS2AoWL7Pfl1sxKfABZqIGzXiJ8qbxHC279kfGLblWdw2ZPHUmG7Z34MLiyH5McCXTQjwbD2SPNYia4IoafQid3QNI0fF5IqrtCX2dP5fCj-ow0_IFUFFkaR705HR3cj7zvPGIi5mS8kezwLEwmNtwX7BuNlQvKOEJsDO4LVeAfB5Eto3SfvI2MeyS5pJVYmkSJh_EwgsE7M_OTYLuW6osPM2HhNaXV9QZakj3eKR91JtNDSty2NzlNiOmeX57rlyKcEhGIjllmzvPHUKAe0R3yRv02Ht2KNpPGiSIwR762_MpafeOWiKbYaagQ16_pnUffkFiMhbkZOrMdrjPCvZ9gPonBITeQXIWz7CXh30oBnSGejIW_COjz92tiS2wRr4GfI4ZZqArdqFbaK6ue54JcHVr6eaMPBu8-Ayh8Hug5O_ggpwKe9TFLYWrWPKT86B_qtJJHs3gokIswjJUJllMPO33Qzi-8m30QdSjOcM2QGLWKb80JyiacXSwgY"

  var accessToken = karate.callSingle('classpath:helpers/createToken.feature', config).access_token
  var applicationToken = karate.callSingle('classpath:helpers/createToken.feature', config).application_token
  karate.configure('headers',{application_token: applicationToken, Authorization: 'Bearer ' + accessToken, 'Ocp-Apim-Subscription-Key': "bf5c9e1a285741268a8574a8481b8a0c" })
  return config;
}