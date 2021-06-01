import React from "react";

function Rows(props) {
    return(
        <tr>
        <th scope="row"><img src={props.image}></img></th>
        <td>{props.name}</td>
        <td>{props.email}</td>
        <td>{props.dateofbirth}</td>
        <td>{props.phoneNumber}</td>
      </tr>
    )
}

export default Rows;