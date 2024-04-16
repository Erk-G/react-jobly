import React,{ useState,useEffect } from "react";
import JoblyApi from "./helper/api";
import JobCard from "./jobCard";
//Lists all jobs via JobCards. Pretty weird that the example is not clickable but hey I guess that is what the assignment wants
const JobList=()=>{
    const [jobs,setJobs]= useState([]);

      useEffect( ()=>{
        const getAll=async ()=>{
            let alljobs=await JoblyApi.getAllJobs();
            setJobs(alljobs);
            return alljobs;
        }
        getAll();
      },[]);
    //console.log(jobs);

    return(
        <div>
            <ul>
                {jobs.map(job=><li><JobCard job={job}/></li>)}
            </ul>
        </div>
    )
}
//{jobs.map(job=><Link to={`/jobs/${job.name}`}><li>{job.name}</li></Link>)}
export default JobList;