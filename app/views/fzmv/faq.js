import Ember from 'ember';
import JetVermillionCode from '../../react/jet-vermillion-code';

export default Ember.View.extend({
  didInsertElement: function() {
    React.renderComponent(React.createElement(JetVermillionCode, null), this.$('.generator')[0]);
  }
});
