import React, {useContext} from "react";
import userContext from "./helper/context";
import { NavLink } from "react-router-dom";
import { Navbar} from "reactstrap";

//Needed the navbar to have two different states depending on if a user is logged in
const NavBar=({logOut})=>{
    const user=useContext(userContext);
    if(user){
        return(
            <div>
                <Navbar expand="md">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/companies">Companies</NavLink>
                    <NavLink to="/jobs">Jobs</NavLink>
                    <NavLink to="/login">Login</NavLink>
                    <NavLink to="/profile">Profile</NavLink>
                </Navbar>
                <button onClick={logOut}>Sign Out</button>
            </div>
        )
    }
    return(
        <div>
            <Navbar expand="md">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/signup">SignUp</NavLink>
            </Navbar>
        </div>
    )
}

export default NavBar;