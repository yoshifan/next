import DS from 'ember-data';

const { Model } = DS;

export default Model.extend({
  user_id: DS.attr(),

  ladder_id: DS.attr(),
  cup_id: DS.attr(),
  course_id: DS.attr(),

  record_type: DS.attr(),
  value: DS.attr(),
  ship: DS.attr(),
  settings: DS.attr(),
  splits: DS.attr(),
  notes: DS.attr(),
  videourl: DS.attr(),
  screenshoturl: DS.attr(),
  last_change: DS.attr('date'),
  region: DS.attr()
});
