import Ember from 'ember';

const { Controller } = Ember;

export default Controller.extend({
  fullAvatarLink: Ember.computed('model.avatar', function() {
    return "http://fzerocentral.org/images/avatars/" + this.get('model.avatar');
  })
});
