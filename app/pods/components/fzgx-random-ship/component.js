import Ember from 'ember';

export default Ember.Component.extend({
  currentMachine: null,

  randomize: function() {
    var index = Math.floor(Math.random() * (this.get('availableMachines.length') - 0) + 0);

    this.set('currentMachine', this.get('availableMachines')[index]);
  }.on('init'),

  actions: {
    removeMachine: function(machine) {
      this.sendAction('removeMachine', {
        machine: machine
      });
    },

    addMachine: function(machine) {
      this.sendAction('addMachine', {
        machine: machine
      });
    }
  }

});
