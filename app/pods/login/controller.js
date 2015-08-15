import Ember from 'ember';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';

const { Controller } = Ember;

export default Controller.extend(LoginControllerMixin, {
  authenticator: 'authenticator:fzc'
});
