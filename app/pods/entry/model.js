import DS from 'ember-data';

export default DS.Model.extend({
  time: DS.attr('number'),
  lap: DS.attr('number'),
  speed: DS.attr('number'),
  lastChange: DS.attr(),
  afScore: DS.attr('number'),
  srprScore: DS.attr('number'),

  ladder: DS.belongsTo('ladder', { async: false }),
  player: DS.belongsTo('player', { async: false })
});
