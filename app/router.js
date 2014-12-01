import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('games');
  this.resource('game', { path: 'games/:game_id' }, function() { });
  this.resource('player', { path: 'players/:player_id' }, function() { });
  this.resource('fzgx/randomizer', function() { });
  this.route('fzmv/faq');
  this.route('players');
  this.resource('snes');
  this.resource('mv');
  this.resource('x');
  this.resource('gpl');
  this.resource('gx');
  this.resource('cx');
});

export default Router;
