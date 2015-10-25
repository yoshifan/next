import DS from 'ember-data';

const { Model, attr } = DS;

export default Model.extend({
  user_id: attr(),

  ladder_id: attr(),
  cup_id: attr(),
  course_id: attr(),

  record_type: attr(),
  value: attr(),
  ship: attr(),
  settings: attr(),
  splits: attr(),
  notes: attr(),
  videourl: attr(),
  screenshoturl: attr(),
  last_change: attr('date'),
  region: attr()
});
