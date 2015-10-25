import Ember from 'ember';

const { Controller } = Ember;

export default Controller.extend({
  session: Ember.inject.service('session'),

  actions: {
    authenticate() {
      const { identification, password }  = this.getProperties('identification', 'password');

      this.get('session').authenticate('authenticator:base',
        identification, password);
    }
  }
});
