import React from "react";
import { useNavigate } from "react-router-dom";

//Login like signup and editUser is a form that calls a function from main app when submited. Logs the user in
const Login=({loginUser})=>{
    const navigate=useNavigate();
    const handleSubmit=async (e)=>{
        e.preventDefault();
        const formData=e.target;
        let login={username:formData.username.value,password:formData.password.value};
        console.log(login);
        let user=await loginUser({username:formData.username.value,password:formData.password.value})
        navigate("/");
        return(console.log("logged in with: ",user));
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <p>Username</p>
                <input id="username" name="username"/>
                <p>Password</p>
                <input id="password" name="password"/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Login;