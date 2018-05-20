/* eslint-env node */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'fzerocentral-web',
    podModulePrefix: 'fzerocentral-web/pods',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    contentSecurityPolicy: {
      'default-src': "*"
    }
  };

  if (environment === 'development') {
    // Custom ENV key: The JSONAPIAdapter's namespace.
    // For dev environments it's easiest to run the API with no namespace,
    // i.e. at localhost:<port> instead of localhost:<port>/<namespace>.
    ENV.APP.apiNamespace = null;

    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.APP.host = 'https://calm-eyrie-3253.herokuapp.com';

    // Custom ENV key: The JSONAPIAdapter's namespace.
    ENV.APP.apiNamespace = 'api';
  }

  return ENV;
};
