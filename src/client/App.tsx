import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbarr from '../components/Navbar'
import Details from "./views/Details";
import Compose from "./views/Compose";
import Admin from "./views/Admin";
import Home from "./views/Home";
 


const App: React.FC<AppProps> = () => {
  return (
   
    <BrowserRouter>
    <Navbarr/> 
      <Switch>
        <Route exact path ="/">
          <Home />
        </Route>
        <Route path ="/details/:id">
			<Details/>
			 </Route>
			 <Route path ="/admin/:id">
			<Admin />
			 </Route>
        <Route exact path ="/compose">
			<Compose />
		</Route>
      </Switch>
    </BrowserRouter>
  );
};

interface AppProps {}

export default App;

//home see allc hirps

// view chirp details

//add new chirps
