import Ember from 'ember';

const { Controller, inject } = Ember;

export default Controller.extend({
  session: inject.service('session'),

  actions: {
    authenticate() {
      const { identification, password }  = this.getProperties('identification', 'password');

      this.get('session').authenticate('authenticator:fzc', identification, password);
    }
  }
});
