import React from "react";
import axios from "axios";


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nomTA: "ichrak",

      
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit(event) {
    axios.post("/api/bcc/login",{nom:this.state.nomTA}).then((res,err) => {
      if(res){
      console.log("gjgjhgh", res);
      if(res.data[0].nom==this.state.nomTA){
        this.props.changeView("create");
        this.props.getNomTAAndId(this.state.nomTA,res.data[0].id);
      }
      else{
          alert("user not found!")
      }
    }
      if(err)alert("user adeed ");
    });
  }

  render() {
    return (
      <div className="create">
        {console.log(this.state)}
        <div className="create">
          <h2 className="login">Login </h2>
          <label id="nom">nom TA:</label>
          <input
            className="inp"
            name="nom"
            placeholder="qui es tu?"
            onChange={(e) => this.setState({ nomTA: e.target.value })}
          />
          <br />
        <div className="btn">
            <button className="btn1" onClick={() => this.handleSubmit()}>
              valider
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;