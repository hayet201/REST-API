import React, { Component } from 'react';
import Axios from 'axios';
class EditContact extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            nom: "",
            prenom: "",
            email: ""
         }
    }
    componentDidMount(){
        this.setState({
            nom:this.props.match.nom,
            prenom:this.props.match.prenom,
            email:this.props.match.email
        })
    }
    onchange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    edit = () => {
        Axios.put('http://localhost:3002/update/' + this.props.match.params.id, { nom: this.state.nom, prenom: this.state.prenom, email: this.state.email })
    }
    render() { 
        return ( <div>
                  <input type="text" name="nom" placeholder="name" onChange={this.onchange} />
                  <input type="text" name="prenom" placeholder="prenom" onChange={this.onchange} />
                  <input type="text" name="email" placeholder="email" onChange={this.onchange} />
                  <button onClick={this.edit}>Edit contact</button>
            </div> 
        );
    }
}
 
export default EditContact;