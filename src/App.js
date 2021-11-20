import{ React, Component} from 'react';
import { Route, NavLink,Routes } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Todo_main from './components/Todo-main';

class App extends Component {
  render() { 
    return ( 
      <div>
       <h1>MY TODO APP</h1>
         <ul className="header">
             <li ><NavLink activeClassName="active" to="/">Home</NavLink></li>
             <li><NavLink activeClassName="active" to="/todo">TODO</NavLink></li>
             <li><NavLink activeClassName="active" to="/contact">Contact Us</NavLink></li>
             <li><NavLink activeClassName="active" to="/about">About</NavLink></li>
         </ul>
       <div className="content">
              <Routes>
                <Route  path="/todo" element={<Todo_main/>} />
                <Route  path="/contact" element={ <Contact/>}/>
                <Route  path="/about" element={<About/>}/> 
                <Route exact path="/" element={<Home/>}/> 
              </Routes>
       </div>
     </div>
     );
  }
}
 
export default App;