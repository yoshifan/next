import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr(),
  country: DS.attr(),
  avatar: DS.attr()
});
