import React from "react";
import Header from "../header";
import API from "../../utils/api";
import Rows from "../tableRow";
import Table from "../table";

class Employeelist extends React.Component {
    state = {
        users: [],
        search: "",
    }
//add component did mount process using api js axios call
componentDidMount() {
    API.search() 
        .then(res => {
            console.log(res.data.results)
            this.setState({users: res.data.results })})
        .catch(err => console.log(err));
};

handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
        [name]: value,
    });
}

handleFormSubmit = (event) => {
    event.preventDefault();
    //create search for users
}

    render() {
        return (
            <div className="container">
                <Header />
                <div class="input-group mb-3">
                    <span onClick={this.handleFormSubmit} class="input-group-text" id="basic-addon1">Search</span>
                    <input onChange={this.handleInputChange} value={this.state.search} type="text" name="search" class="form-control" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <Table >
                {this.state.users.map(users => (
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
        )
    }
}

export default Employeelist;