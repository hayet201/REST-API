import React, { Component } from 'react';
import Axios from 'axios';
class Deletecontact extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            contactlist:[]

         }
    }
   
    componentDidUpdate() {
        Axios.delete('http://localhost:3002/deletecontact' + this.props.params.match.id)

        .then(res => this.setState({
            Contactlist: res.data
        })).catch(err => console.log(err))
    }
    render() { 
        console.log(this.props)
        return ( <div>
          
            {this.state.contactlist.filter(el => el.id !== el._id)}
             
        </div> );
    }
}
 
export default Deletecontact;