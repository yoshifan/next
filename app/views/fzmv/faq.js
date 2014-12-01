import Ember from 'ember';
import React from 'npm:react';
import JetVermillionCode from '../../react/jet-vermillion-code';

export default Ember.View.extend({
  didInsertElement: function() {
    React.render(React.createElement(JetVermillionCode, null), this.$('.generator')[0]);
  }
});


