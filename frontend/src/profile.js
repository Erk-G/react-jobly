import React, {useContext} from "react";
import userContext from "./helper/context";
import { useNavigate } from "react-router-dom";

//This, signup and login could all be using a similar form set up but just focusing on finishing the project
// When it finishes editing it goes to the page without a user which is strange
const Profile=({editUser})=>{
    const navigate=useNavigate();
    const user=useContext(userContext);
    const handleSubmit=async (e)=>{
        e.preventDefault();
        const formData=e.target;
        let user=await editUser({firstName:formData.FirstName.value,
            lastName:formData.LastName.value,
            email:formData.email.value});
        navigate("/");
        return(console.log("edited: ",user));
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <p>First Name</p>
                <input id="FirstName" name="FirstName" defaultValue={user.firstName}/>
                <p>Last Name</p>
                <input id="LastName" name="LastName" defaultValue={user.lastName}/>
                <p>Email</p>
                <input id="email" name="email" defaultValue={user.email}/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Profile;