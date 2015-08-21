import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('games');
  this.route('game', { path: 'games/:game_id' }, function() { });
  this.route('player', { path: 'players/:player_id' }, function() { });
  this.route('fzgx/randomizer', function() { });
  this.route('fzmv/faq');
  this.route('players', function() { });
  this.route('ladders', function() {
    this.route('ladder', { path: ':ladder_id' });
  });
  this.route('snes');
  this.route('mv');
  this.route('x');
  this.route('gpl');
  this.route('gx');
  this.route('cx');
  this.route('records');
  this.route('login');
  this.route('profile');
});

export default Router;
