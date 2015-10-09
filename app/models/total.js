import Ember from 'ember';
import DS from 'ember-data';

const { computed: { alias }} = Ember;
const { Model, attr, belongsTo } = DS;

export default Model.extend({
  time: attr('number'),
  lap: attr('number'),
  speed: attr('number'),
  lastChange: attr(),
  af: attr('number'),
  srpr: attr('number'),

  afScore: alias('af'),
  srprScore: alias('srpr'),

  ladder: belongsTo('ladder', { async: false }),
  player: belongsTo('player', { async: false })
});
