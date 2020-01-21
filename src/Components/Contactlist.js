import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from "react-router-dom";

class Contactlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Contactlist:[]
          }
    }
    componentDidMount(){
        Axios.get('http://localhost:3002/contacts').then(res => this.setState({
            Contactlist:res.data
        })).catch(err => console.log(err))
    }
    componentDidUpdate(){
        Axios.get('http://localhost:3002/contacts').then(res => this.setState({
            Contactlist: res.data
        })).catch(err => console.log(err))
    }
    render() { 
        return ( <div>

            {this.state.Contactlist.map(el => <div>
                                                <span>{el.nom}</span>
                                                <span>{el.prenom}</span>
                                                <span>{el.email}</span>
                                                <Link to={`/updtate/${el._id}/${el.nom}/${el.prenom}/${el.email}`}>
                                                    <button>Edit</button>
                                                    </Link>
                                                 <Link to={`/deletecontact/${el._id}`}>
                                                   <button>delete</button>
                                                </Link>
                                                

                                              </div>)}

                 </div>
                  );
    }
}
 
export default Contactlist;