import React from 'react';
import ActionCreator from '../actions/TodoActionCreators';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
//import Input from 'react-bootstrap/lib/Input';
import Checkbox from 'react-bootstrap/lib/Checkbox';

export default React.createClass({
  getDefaultProps() {
    return {
      task: {
        title: '',
        completed: false
      }
    };
  },

  handleToggle(task) {
    if (this.refs.checkbox.getChecked()) {
      ActionCreator.completeTask(task);
    }
  },

  render() {
    let {task} = this.props;
    return (
      <ListGroupItem>
        <Checkbox ref="checkbox" checked={task.completed}
          onChange={this.handleToggle.bind(this, task)} label={task.title} >{task.title}</Checkbox>
      </ListGroupItem>
    );
  }
});
