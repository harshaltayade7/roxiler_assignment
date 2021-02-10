import { Component } from "react";
import TableComp from './tableComp'
import UserDetail from './userDetail'
import '../css/mainComponent.css'

class MainComponent extends Component {
  constructor() {
    super();
    this.state = {
        searchVal: "searchBox",
        shouldShowUserDetail: false,
        jsonData: null,
        userData: null,
        todoList: null,
    };
  }

  onChangeSearchVal = (e) => {
    //   this.setState({ searchVal: e.value})
  }

  componentDidMount() {
    fetch("http://localhost:4000/todos")
    .then(res => res.json())
    .then(result =>
        this.setState({jsonData: result},()=>{
            console.info("state for fetch data has been updated");
        })
    )
    .catch(console.log);
  }

  showUserDetail = (userData) => {
    const todoList = this.state.jsonData.filter(data=> data.userId == userData.id);
    console.info("totoList",userData)
    this.setState({ shouldShowUserDetail: true, todoList: todoList, userData: userData });
  }

  renderComponents() {
    return  this.state.shouldShowUserDetail ? <UserDetail todoList={this.state.todoList} userData={this.state.userData}/>: <TableComp showUserDetail={this.showUserDetail} />
  }
  render() {
    return (
    <div className="mainComponent">
   { this.renderComponents()}

    </div>);
  }
}

export default MainComponent;