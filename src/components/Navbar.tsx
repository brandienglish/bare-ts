import * as React from "react";
import { NavLink } from 'react-router-dom'


const Navbarr: React.FC<NavBarProps> = () => {
     return(
    <nav className="nav p-2 shadow justify-content-end align-items-center">
        <NavLink className="btn btn-link mx-2" activeClassName="py-2 mx-2 text-dark border-bottom" exact to ="/">Chirp</NavLink>
        <NavLink  className="btn btn-link mx-2" activeClassName="py-2 mx-2 text-dark border-bottom"exact to ="/compose">New Chirp</NavLink>
    </nav>

)
}

interface NavBarProps {}

export default Navbarr