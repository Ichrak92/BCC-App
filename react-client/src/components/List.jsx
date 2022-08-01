import React, { Component } from "react";



export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  assignClass(type) {
    
    if (type === "intéressé") {
      return "interested";
    } else if(type==="valide"){
      return "validated";
    } else {
      return "bloqued";
    } 
  }
 
  render() {
    return (
      <div className="cnt">
          <table >
          <thead >
  <tr>
    <th>Prénom</th>
    <th>nom</th>
    <th>numero</th>
    <th>ligne</th>
    <th>commentaire</th>
    <th>qualification</th>
    <th>date</th>
    <th>ok</th>
  </tr>
  </thead>
  <tbody>
  {this.props.items.map((e) => (
              <tr  key={e.id}>
                <td>{e.nomTA}</td>
                <td >{e.nomClient}</td>
                <td >{e.telephone}</td>
                <td >{e.ligne}</td>
                <td >{e.commentaire}</td>
                <td className={this.assignClass(e.typeAppointment)}>{e.typeAppointment}</td>
                <td >{e.creationDate}</td>
                <td >{e.ok}</td>
              </tr>
            ))}
           </tbody>
</table>
<div className="table">
  <table>
  <thead>
   <tr>
    <th>Nom</th>
    <th>nombre de clients validés</th>
  </tr>
  </thead>
  <tbody>
    <tr>
      <td>{this.props.nomTA}</td>
      <td>{this.props.total}</td>
    </tr>
  </tbody>
  </table>
  </div>
        </div>
        
       
    );
  }
}