import React, {useContext} from "react";
import { Navigate, Outlet } from 'react-router-dom';
import userContext from "./helper/context";
//I never saw an example on how to check authentication on any of the videos so I looked up an example
//the example used a navigate compnent instead of useNavigate so idk what to use
const Authenticate=({children})=>{
    const user=useContext(userContext);
    if(user){
        return <Outlet/>
    }
    else{
        return(
            <Navigate to="/" replace/>
        )
    }
}

export default Authenticate;