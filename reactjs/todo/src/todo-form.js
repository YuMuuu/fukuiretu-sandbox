var React = require('react/addons');
var TodoStorage = require('./storage.js');

var TodoForm = React.createClass({
  getInitialState: function() {
    return {
      name: ''
    };
  },
  handleNameChange: function(e) {
    this.setState({
      name: e.target.value
    });
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var name = this.state.name.trim();
    TodoStorage.create(name, function(error) {
      if(!error) {
        this.setState({
          name: ''
        });
      }
    }.bind(this));
  },
  shouldComponentUpdate: function(nextProps, nextState) {
    return this.state.name !== nextState.name;
  },
  render: function() {
    var disabled = this.state.name.trim().length <= 0;
    return (
      <form className="form-horizontal" onSubmit={this.handleSubmit}>
        <input type="text" className="form-control" value={this.state.name} placeholder="What needs to be done?" onChange={this.handleNameChange}></input>
        <input type="submit" value="Add" className="btn btn-primary" disabled={disabled}></input>
      </form>
    );
  }
});

module.exports = TodoForm;
