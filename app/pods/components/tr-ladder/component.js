import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',

  tableIndex: Ember.computed('index', function() {
    return this.get('index') + 1;
  }),

  previousSrprScore: Ember.computed('entry.srprScore', function() {
    let previousScore = this.get('entries.arrangedContent').objectAt(this.get('index')-1).get('srprScore');
    let currentScore = this.get('entry.srprScore');

    return currentScore - previousScore;
  })
});
