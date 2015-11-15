import Base from 'ember-simple-auth/authenticators/base';
import ajax from 'ic-ajax';

export default Base.extend({
  // restore(data) {
  //   debugger;
  //   return Ember.RSVP.reject();
  // },

  authenticate(identification, password) {
    return ajax({
      type: "POST",
      // url: "/__/proxy/fzero-api/login",
      url: "/api/login",
      dataType: "json",
      data: {
        username: identification,
        password: password
      }
    }).then(function(response) {
      return response.player;
    });
  }
});
