import DS from 'ember-data';

export default DS.Model.extend({
  totals: DS.hasMany('total'),
  name: DS.attr(),
  game: DS.belongsTo({ asynsc: false })
});
