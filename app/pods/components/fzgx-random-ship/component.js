import Ember from 'ember';

const { Component, on } = Ember;

export default Component.extend({
  currentMachine: null,

  randomize: on(function() {
    var index = Math.floor(Math.random() * (this.get('availableMachines.length') - 0) + 0);

    this.set('currentMachine', this.get('availableMachines')[index]);
  }),

  actions: {
    addElement(element) {
      this.get('addElement')(element);
    },

    removeElement(element) {
      this.get('removeElement')(element);
    },

    randomize() {
      this.randomize();
    }
  }

});
