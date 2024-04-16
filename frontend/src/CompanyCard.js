import React from "react";
import { Link } from "react-router-dom";
//Takes company info and displays a little info. Only to be used ono the companyList page.
const CompanyCard=({company})=>{

    return(
        <div>
            <Link to={`/companies/${company.handle}`}>
            <h5>{company.name}</h5>
            <p>{company.description}</p>
            </Link>
        </div>
    )
}

export default CompanyCard;