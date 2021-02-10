import React, { Component } from "react";
import "../css/tableComp.css";

class TableComp extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          id: "1",
          title: "Meeting at 9",
          status: true,
          name: "Mark 1",
          email: "mark1@gmail.com"
        },

        {
          id: "2",
          title: "Meeting at 12",
          status: true,
          name: "Mark 2",
          email: "mark2@gmail.com"
        },

        {
          id: "3",
          title: "Meeting at 3",
          status: true,
          name: "Mark 3",
          email: "mark3@gmail.com"
        },
      ],
    };
  }

  viewUser = (obj) => {
     this.props.showUserDetail(this.state.todos.filter(user=>user.id == obj.target.dataset.id)[0]);
  }

  render() {
    const { todos } = this.state;
    return (
       <React.Fragment>
            <span>ToDo</span>
        <input className="searchBox" value={this.state.searchVal} onChange={this.onChangeSearchVal}/>
     
      <div className="tableWrapper">
        <div className="tableTitles">
          <div className="todoId">
            <div className="title">ToDo ID</div>
          </div>
          <div className="titleCol2">
            <div className="title">Title</div>
          </div>
          <div className="status">
            <div className="title">Status</div>
          </div>
          <div className="action">
            <div className="title">Action</div>
          </div>
          <br />
          <hr />
        </div>

        {todos.map((task) => (
          <div className="tableValues" key={task.id}>
            <div className="todoId">{task.id}</div>
            <div className="titleCol2">{task.title}</div>
            <div className="status">
              {task.status ? "Complete" : "Incomplete"}
            </div>
            <div className="action" >
              <button className="actionBtn" data-id={task.id} onClick={this.viewUser}>View User</button>
            </div>
          </div>
        ))}
      </div>
       </React.Fragment>
    );
  }
}

export default TableComp;
