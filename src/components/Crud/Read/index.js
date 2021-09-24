import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";

const Todo = (props) => (
  <tr>
    <td>{props.todo.todo_description}</td>
    <td>{props.todo.todo_responsible}</td>
    <td>{props.todo.todo_priority}</td>
    <td>
      <Link to={"/edit/" + props.todo._id}>
        <Button size="sm" variant="info">
          Update
        </Button>
      </Link>
      &#8195;
      <Link to={"/delete/" + props.todo._id}>
        <Button size="sm" variant="danger">
          Delete
        </Button>
      </Link>
    </td>
  </tr>
);
export default class TodosList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
  }

  //  SERVER.JS → todoRoutes.route("/").get →
  componentDidMount() {
    axios
      .get("/todos/")
      .then((response) => {
        this.setState({ todos: response.data });
      })
      .catch(function (error) {
        console.log("componentDidMount axios catch error", error);
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todo_description !== this.state.todo_description) {
      this.handleUpdateInfo();
    }
  }

  handleUpdateInfo = () => {
    this.setState({ name: this.props.todo_description });
  };

  todoList() {
    return this.state.todos.map(function (currentTodo, i) {
      return <Todo todo={currentTodo} key={i} />;
    });
  }

  render() {
    return (
      <div className="todo-list">
        <h3>To Do List</h3>
        <div className="table-responsive">
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Description</th>
                <th>Responsible</th>
                <th>Priority</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{this.todoList()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
