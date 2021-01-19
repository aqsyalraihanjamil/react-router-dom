import React from 'react'
import {Route,Switch} from 'react-router-dom'
import Navbar from './Components/Navbar'

// Navbar Exports 
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'


class App extends React.Component {
  render(){
    return (
      <div>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
    );
  }
}

export default App;
