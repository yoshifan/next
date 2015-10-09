import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  namespace: 'api',
  headers: {
    "Content-Type": "application/vnd.api+json"
  }
});
