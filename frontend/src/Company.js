import React,{ useEffect, useState } from 'react';
import {useParams} from "react-router-dom";
import JoblyApi from "./helper/api";
import JobCard from "./jobCard";
//Stand alone company page. Details everything the card does as well as the logo and all jobs the company has available
//The logo is not apart of the example app but hey, it is there so I use it
//Have to make a temp object as "company" for the react not to break. I thought useEffect would go off first
const Company=()=>{
    const [company,setCompany]= useState({name:"",logo_url:"",description:"",jobs:[]});
    const params=useParams();
    //let name= params.name.replace(/\s+/g,"-").toLowerCase();


      useEffect( ()=>{
        const getCompany=async (handle)=>{
            let Acompany=await JoblyApi.getCompany(handle);
            console.log("hello");
            console.log(Acompany);
            setCompany(Acompany);
        }
        getCompany(params.name);
      },[]);
    //console.log(companies);

    return(
        <div>
            <h1>{company.name}</h1>
            <img src={company.logo_url} alt=""/>
            <p>{company.description}</p>
            <ul>
                {company.jobs.map(job=><li><JobCard job={job}/></li>)}
            </ul>
        </div>
    )
}

export default Company;