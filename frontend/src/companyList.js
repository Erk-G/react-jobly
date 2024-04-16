import React,{ useState,useEffect } from "react";
import JoblyApi from "./helper/api";
import CompanyCard from "./CompanyCard";
//Calls api and lists all companys using the CompanyCard
const CompanyList=()=>{
    const [companies,setCompanies]= useState([]);

      useEffect( ()=>{
        const getAll=async ()=>{
            let allCompanies=await JoblyApi.getAllCompanies();
            setCompanies(allCompanies);
            return allCompanies;
        }
        getAll();
      },[]);
    //console.log(companies);

    return(
        <div>
            <ul>
                {companies.map(company=><li><CompanyCard company={company}/></li>)}
            </ul>
        </div>
    )
}
//{companies.map(company=><Link to={`/companies/${company.name}`}><li>{company.name}</li></Link>)}
export default CompanyList;