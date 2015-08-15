import DS from 'ember-data';

const { Model, attr, belongsTo } = DS;

export default Model.extend({
  time: attr('number'),
  lap: attr('number'),
  speed: attr('number'),
  lastChange: attr(),
  afScore: attr('number'),
  srprScore: attr('number'),

  ladder: belongsTo('ladder', { async: false }),
  player: belongsTo('player', { async: false })
});
