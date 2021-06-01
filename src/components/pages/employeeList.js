import React from "react";
import Header from "../header";

class Employeelist extends React.Component {
    state = {
        users: [],
    }
//add component did mount process using api js axios call
    render() {
        return (
            <div className="container">
                <Header />
            </div>
        )
    }
}

export default Employeelist;