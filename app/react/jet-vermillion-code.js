import React from 'npm:react';
import jetVermillionGenerator from 'npm:jet-vermillion-generator';

var UsernameInput = React.createClass({displayName: 'UsernameInput',
  handleChange: function() {
    this.props.onUsernameInput(this.refs.usernameTextInput.getDOMNode().value
    );
  },

  render: function() {
    return (
      React.createElement("p", null,
        React.createElement("label", {htmlFor: "player-name"}, "Player name (up to 8 characters)"), React.createElement("br", null),
        React.createElement("input", {
          ref: "usernameTextInput",

            type: "text",
            name: "player-name",
            placeholder: "e.g. LOCKS",
            maxLength: "8",
            value: this.props.username,
            onChange: this.handleChange

            })
      )
    );
  }
});

var GeneratedCode = React.createClass({displayName: 'GeneratedCode',
  render: function() {
    var result = jetVermillionGenerator.generate(this.props.input);
    return (
          React.createElement("p", null,
          React.createElement("label", {htmlFor: "vermillion-code"}, "Password"), React.createElement("br", null),
          React.createElement("input", {
            placeholder: "e.g. W-XX9NV8A+30",
              type: "text",
              disabled: "true",
              name: "vermillion-code",
              value: result})
      )
    );
  }
});

export default React.createClass({displayName: 'JetVermillionCode',
  getInitialState: function() {
    return { username: "" };
  },

  updateUsername: function(value) {
    console.log("hah", value);
    this.setState({username: value});
  },

  render: function() {
    return (
      React.createElement("div", null,
        React.createElement(UsernameInput, {username: this.state.username, onUsernameInput: this.updateUsername}),
        React.createElement(GeneratedCode, {input: this.state.username})
      )
    );
  }
});
