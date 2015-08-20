import Ember from 'ember';
import Base from 'simple-auth/authenticators/base';
import ajax from 'ic-ajax';

export default Base.extend({
  restore(/*data*/) {
    return Ember.RSVP.reject();
  },

  authenticate(options) {
    return ajax({
      type: "POST",
      url: "login",
      dataType: "json",
      data: {
        username: options.identification,
        password: options.password
      }
    }).then(function(response) {
      return response.player;
    });
  },

  invalidate(/*data*/) {
    return Ember.RSVP.resolve();
  }
});
