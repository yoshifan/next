import Ember from 'ember';

export default Ember.Route.extend({

  model: function (params) {
    var players;

    if (params.page) {
      players = this.store.find('player', params);
    } else {
      players = this.store.find('player');
    }

    return players;
  }
});
