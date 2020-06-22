import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Axios from "axios";
import Search from "./components/users/Search";
import ClearUsers from "./components/users/ClearUsers";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: false,
  };
  searchUsers = async (text) => {
    this.setState({ loading: true });
    const res = await Axios.get("https://api.github.com/search/users", {
      params: {
        client_id: process.env.REACT_APP_GITHUB_CLIENT_ID,
        client_secret: process.env.REACT_APP_GITHUB_CLIENT_SECRET,
        q: text,
      },
    });
    this.setState({ users: res.data.items });
    this.setState({ loading: false });
  };

  clear = () => {
    this.setState({ users: [], loading: false });
  };

  showAlert = () => {
    setTimeout(() => {
      this.setState({ alert: false });
    }, 2000);
    this.setState({ alert: true });
  };

  render() {
    const { loading, users, alert } = this.state;
    return (
      <Router>
        <div className="App">
          <Navbar title="GitHub Finder"></Navbar>
          <div className="container">
            {alert && <p className=" btn btn-danger text-center btn-block">Enter a search string!</p>}
            <Search searchUsers={this.searchUsers} showAlert={this.showAlert} />
            {users.length ? <ClearUsers clear={this.clear} /> : null}
            <Users users={users} loading={loading} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
