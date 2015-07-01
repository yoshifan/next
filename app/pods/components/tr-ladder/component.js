import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',

  tableIndex: Ember.computed('index', function() {
    return this.get('index') + 1;
  })
});
