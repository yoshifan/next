import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',

  tableIndex: Ember.computed('index', function() {
    return this.get('index') + 1;
  }),

  scoreDifferential: Ember.computed('entry.srprScore', function() {
    if (this.get('index') === 0) { return; }

    let previousScore = this.get('entries.arrangedContent').objectAt(this.get('index')-1).get('srprScore');
    let currentScore = this.get('entry.srprScore');

    return currentScore - previousScore;
  })
});
