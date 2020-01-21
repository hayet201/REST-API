import React, { Component } from 'react';
import Axios from 'axios';
class Addcontact extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            nom:"",
            prenom:"",
            email:""

         }
      
    }
    onchange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    add = () => {
       
        Axios.post('http://localhost:3002/addcontact', { ...this.state })
        
    }
    render() { 
        return ( <div>

            <input type ="text" name="nom" placeholder="name" onChange={this.onchange}/>
            <input type="text" name="prenom" placeholder="prenom" onChange={this.onchange} />
            <input type="text" name="email" placeholder="email" onChange={this.onchange} />
            <button onClick={this.add}>ADD contact</button>



                 </div> 
    );
    }
}
 
export default Addcontact;