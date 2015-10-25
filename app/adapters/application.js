import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
  authorizer: 'authorizer:fzc',

  namespace: 'api',
  headers: {
    "Content-Type": "application/vnd.api+json"
  }
});
