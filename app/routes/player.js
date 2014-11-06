import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    this.store.find('player', '/players/' + params.player_id);
  }
});
