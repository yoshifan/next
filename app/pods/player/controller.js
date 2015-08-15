import Ember from 'ember';

const { Controller, computed } = Ember;

export default Controller.extend({
  fullAvatarLink: computed('model.avatar', function() {
    return "http://fzerocentral.org/images/avatars/" + this.get('model.avatar');
  })
});
