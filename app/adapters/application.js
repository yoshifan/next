import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import ENV from 'fzerocentral-web/config/environment';


export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
  authorizer: 'authorizer:base',

  host: ENV.APP.host,
  namespace: 'api',
  headers: {
    "Content-Type": "application/vnd.api+json"
  }
});
