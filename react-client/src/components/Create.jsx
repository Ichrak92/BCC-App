import React from "react";
import axios from "axios";

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateCreation: "",
      nomTA: "",  
      nomClient: "",
      nomVoyant: "",
      telephone: "",
      ligne: "",
      commentaire: "",
      ok: "",
      typeAppointment:"",
      
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit(event) {
    axios.post("/api/bcc", this.state).then((res,err) => {
      if(res){
      console.log("gjgjhgh", res);
      this.props.changeView("create");
      alert('saved');
    }
      if(err)alert("not added ");
    });
  }

  render() {
    return (
      <div className="create">
        <h3 id="left1">A ne plus rappeler</h3>
          <div className="select">
          <select onChange={(e) => this.setState({ ok: e.target.value })}>
            <option> 0473255612</option>
            <option>0471600006</option>
            <option>0164274479</option>
            <option>0565634645</option>
            <option>0474540646</option>
            </select>
        {console.log(this.state)}
          </div>
        
        <div className="create">
          <h2 className="t1">Fiche de prospection </h2>
          <label className="label">Date:</label>
          <input
            className="inp"
            name="dateCreation"
            type="date"
            onChange={(e) => this.setState({ dateCreation: e.target.value })}
          />
          <br />
          <label className="label">Nom TA:</label>
          <input
            className="inp"
            name="nom"
            placeholder="ichrak"
            onChange={(e) => this.setState({ nomTA: e.target.value })}
          />
          <br />
          <label className="label">Nom Client:</label>
          <input
            className="inp"
            name="client"
            placeholder=""
            onChange={(e) => this.setState({ nomClient: e.target.value })}
          />
          <br />
          <label className="label">Nom Voyant:</label>
          <input
            className="inp"
            name="nomVoyant"
            placeholder=""
            onChange={(e) => this.setState({ nomVoyant: e.target.value })}
          />
          <br />
          <label className="label">Telephone portable:</label>
          <input
            className="inp"
            name="tele"
            type="number"
            placeholder="Numéro de téléphone du prospect (9 chiffres)" 
            onChange={(e) => this.setState({ telephone: e.target.value })}
          />
          <br />
          <label className="label">Telephone fixe:</label>
          <input
            className="inp"
            name="tele"
            type="number"
            placeholder="" 
            onChange={(e) => this.setState({ telephone: e.target.value })}
          />
          <br />
          <label className="label">ligne 08:</label>
          <input
            type="number"
            className="inp"
            name="ligne"
            placeholder="Numéro de téléligne 08 (9 chiffres)"
            onChange={(e) => this.setState({ ligne: e.target.value })}
          />
          <br />
          <label className="label">Commentaire:</label>
          <textarea
            className="inp"
            type="text"
            name="commentaire"
            placeholder=""
            onChange={(e) => this.setState({ commentaire: e.target.value })}
          ></textarea>
          <br />
          <br/> 
          <select className="select" onChange={(e) => this.setState({ ok: e.target.value })}>
            <option> CRM 251</option>
            <br/>
            <br/>
            <option>CRM 200</option>
            <option>CRM 100</option>
            <option>appel manuel</option>
            </select>
          <br />
          <br />
          <div id="radio">
          <input type="radio" className="intéressé" id="interested" name="type" value="intéressé" onChange={(e) => this.setState({ typeAppointment: e.target.value })}></input>
          <label  htmlFor="interested">intéressé</label><br></br>
          <input type="radio" id="bloque" name="type" value="liste bloqué"  onChange={(e) => this.setState({ typeAppointment: e.target.value })}></input>
          <label htmlFor="bloque">liste bloqué</label><br></br>
          <input type="radio" id="restreinte" name="type" value="valide"  onChange={(e) => this.setState({ typeAppointment: e.target.value })}></input>
          <label htmlFor="restreinte">valide</label><br></br>
          </div>
    
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
export default Create;
