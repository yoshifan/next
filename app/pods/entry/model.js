import DS from 'ember-data';

export default DS.Model.extend({
  time: DS.attr('number'),
  lap: DS.attr('number'),
  speed: DS.attr('number'),
  lastChange: DS.attr(),

  ladder: DS.belongsTo(),
  player: DS.belongsTo()
});
