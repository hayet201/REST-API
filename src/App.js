import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Addcontact from './Components/Addcontact';
import Contactlist from './Components/Contactlist';
import EditContact from './Components/EditContact';
import Deletecontact from './Components/Deletecontact'


function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/' render={()=>{return(<div>
          <h1>contactlist</h1>
          <Link to='/addcontact'>
            <button>Addcontact</button>
            </Link>
          <Link to='/contacts'><button>contactlist</button></Link>
        </div>)}
        }/>
     
        <Route path='/addcontact' component={Addcontact}/>
        <Route path='/contacts' component={Contactlist} />
        <Route path='/update/:_id/:nom/:prenom/:email' component={EditContact} />
        <Route path='/deletecontact/:id' component={Deletecontact} />
        



       
      </Router>
     
    </div>
  );
}

export default App;
