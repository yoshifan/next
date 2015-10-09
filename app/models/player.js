import DS from 'ember-data';

const { Model, attr, hasMany } = DS;

export default Model.extend({
  username: attr(),
  country: attr(),
  avatar: attr(),

  records: hasMany('record', { async: true }),
  totals: hasMany('total', { async: true })
});
