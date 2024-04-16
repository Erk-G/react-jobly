import React from "react";
import { useNavigate } from "react-router-dom";

//There is a lot of similar code between files ex. this and Login.js. Can't think of an elegant way to combine them though.
const SignUp=({signUpUser})=>{
    const navigate=useNavigate();
    const handleSubmit=async (e)=>{
        e.preventDefault();
        const formData=e.target;
        let user=await signUpUser({username:formData.username.value,
            password:formData.password.value,
            firstName:formData.FirstName.value,
            lastName:formData.LastName.value,
            email:formData.email.value});
        navigate("/");
        return(console.log("signed up with: ",user));
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <p>Username</p>
                <input id="username" name="username" placeholder="username"/>
                <p>Password</p>
                <input id="password" name="password"/>
                <p>First Name</p>
                <input id="FirstName" name="FirstName" />
                <p>Last Name</p>
                <input id="LastName" name="LastName" />
                <p>Email</p>
                <input id="email" name="email" />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SignUp;