import Ember from 'ember';

const { Component, computed } = Ember;

export default Component.extend({
  tagName: 'tr',

  tableIndex: computed('index', function() {
    return this.get('index') + 1;
  }),

  scoreDifferential: computed('entry.srprScore', function() {
    if (this.get('index') === 0) { return; }

    let previousScore = this.get('entries').objectAt(this.get('index')-1).get('srprScore');
    let currentScore = this.get('entry.srprScore');

    return currentScore - previousScore;
  })
});
