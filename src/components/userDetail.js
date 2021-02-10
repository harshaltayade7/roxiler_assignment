import { Component } from "react";

class UserDetail extends Component {
  render() {
    const { todoList, userData } = this.props;
    console.info("this.userData", this.props.todoList);
    return (
      <div>
        {todoList
          ? todoList.map((data) => (
              <div className="userDetailWrapper" key={data.id}>
                <div>ToDo Id : {data.id}</div>
                <div>ToDo Title : {data.title}</div>
                <div>User Id : {data.userId}</div>
                <div>Name : {userData.name}</div>
                <div>Email : {userData.email}</div>
              </div>
            ))
          : null}
      </div>
    );
  }
}

export default UserDetail;
