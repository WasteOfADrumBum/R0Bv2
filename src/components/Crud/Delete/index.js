import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
export default class DeleteTodo extends Component {
  constructor(props) {
    super(props);

    // Set State
    this.state = {
      todo_description: "",
      todo_responsible: "",
      todo_priority: "",
      todo_completed: false,
      todo_id: this.props.match.params.id,
    };

    // Bind this.state on submit for axios call
    this.onSubmit = this.onSubmit.bind(this); // new line added
  }

  // Mount the components need to render values of this.state
  componentDidMount() {
    axios
      .get("/todos/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          todo_description: response.data.todo_description,
          todo_responsible: response.data.todo_responsible,
          todo_priority: response.data.todo_priority,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onSubmit(e) {
    e.preventDefault();
    axios
      .delete("/todos/delete/" + this.props.match.params.id)
      .then((res) => console.log("Removed:", res.data.msg.todo_description));

    this.props.history.push("/");
  }

  render() {
    console.log(this.props.match.params.id);
    console.log(this.state);
    return (
      <div>
        <h3 align="center">Confirm Delete</h3>
        <form onSubmit={this.onSubmit}>
          <div>
            <b className="d-inline">Description: </b>
            <p className="d-inline">{this.state.todo_description}</p>
          </div>
          <div>
            <b className="d-inline">Responsible: </b>
            <p className="d-inline">{this.state.todo_responsible}</p>
          </div>
          <div>
            <b className="d-inline">Priority:: </b>
            <p className="d-inline">{this.state.todo_priority}</p>
          </div>
          <br />
          <div>
            <Button size="sm" type="submit" variant="danger">
              Delete
            </Button>
            &#8195;
            <Link to={"/"}>
              <Button size="sm" variant="info">
                Undo
              </Button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
