import React, {useContext} from "react";
import userContext from "./helper/context";
import JoblyApi from './helper/api';
//Need to figure out how to keep a job from being applied to again
//Looked at the example and it seems like the only requirement is to prevent the job being applied in the same session. So it get's disabled
const JobCard=({job})=>{
    const user=useContext(userContext);
    const handleSubmit=()=>{
        console.log(user.username,job.id);
        JoblyApi.applyJob(user.username,job.id)
        document.getElementById(job.id).setAttribute("disabled",true);
    }
    return(
        <div>
            <h5>{job.title}</h5>
            <h5>{job.company_handle}</h5>
            <p>{job.salary}</p>
            <p>{job.equity}</p>
            <button id={job.id} onClick={handleSubmit}>Apply</button>
        </div>
    )
}

export default JobCard;