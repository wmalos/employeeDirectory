import React from "react";



function Table(props) {
    return (<table class="table">
    <thead>
      <tr>
        <th scope="col">Picture</th>
        <th scope="col" onClick={props.sort}>Name</th>
        <th scope="col">email</th>
        <th scope="col">Date of Birth</th>
        <th scope="col">Phone Number</th>
      </tr>
    </thead>
    <tbody>
        {props.children}
    </tbody>
  </table>)
}

export default Table;