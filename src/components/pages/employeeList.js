import React from "react";
import Header from "../header";
import API from "../../utils/api";
import Rows from "../tableRow";
import Table from "../table";

class Employeelist extends React.Component {
  state = {
    users: [],
    search: "",
    order: true,
  };
  //add component did mount process using api js axios call
  componentDidMount() {
    API.search()
      .then((res) => {
        console.log(res.data.results);
        this.setState({
            users: res.data.results,
            //filterUsers: res.data.results,
        });
      })
      .catch((err) => console.log(err));
  }

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    //create search for users
    if (this.state.search === "") {
        this.componentDidMount();
    } else {
        const filterUsers = this.state.users.filter(user => user.name.first.toLowerCase() === this.state.search.toLowerCase() || user.name.last.toLowerCase() === this.state.search.toLowerCase());
        console.log(filterUsers)
        this.setState({ users: filterUsers})
    }
  };

  sortNames = (event) => {
    event.preventDefault();
    if (this.state.order) {
      let sortedNames = this.state.users.sort(function(a, b) {
        var nameA = a.name.last.toUpperCase();
        var nameB = b.name.last.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
      console.log(sortedNames);
      this.setState({ users: sortedNames, order: false})
    } else {
      let descendingSorted = this.state.users.sort(function(a, b) {
        var nameA = a.name.last.toUpperCase();
        var nameB = b.name.last.toUpperCase();
        if (nameB < nameA) {
          return -1;
        }
        if (nameB > nameA) {
          return 1;
        }
        return 0;
      });
      console.log(descendingSorted);
      this.setState({ user: descendingSorted, order: true})
    };
    
  };

  render() {
    return (
      <div className="container">
        <Header />
        <div class="input-group mb-3">
          <span
            onClick={this.handleFormSubmit}
            class="input-group-text"
            id="basic-addon1"
          >
            Search
          </span>
          <input
            onChange={this.handleInputChange}
            value={this.state.search}
            type="text"
            name="search"
            class="form-control"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <Table sort={this.sortNames}>
          {this.state.users.map((users) => (
            <Rows
              image={users.picture.thumbnail}
              name={`${users.name.first} ${users.name.last}`}
              email={users.email}
              dateofbirth={users.dob.date.split("T")[0]}
              phoneNumber={users.phone}
            />
          ))}
        </Table>
      </div>
    );
  }
}

export default Employeelist;
