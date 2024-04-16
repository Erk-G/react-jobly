import './App.css';
import React,{ useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import userContext from "./helper/context";
import JoblyApi from './helper/api';
import CompanyList from "./companyList";
import Company from "./Company";
import Home from "./Home";
import JobList from "./jobList";
import Login from "./Login";
import SignUp from "./signUp";
import NavBar from "./Navbar";
import Authenticate from "./Authenticate";
import Profile from "./profile";
import { jwtDecode } from 'jwt-decode';

//App is the backbone of the whole project, every standalone function inside is an api call that also changes token or user states with logout clearing everything.
//"body" is the json required to make the api call
function App() {
  const [userToken,setToken]=useState(null);
  const [currentUser,setCurrentUser]=useState(null);
  //edit token exists because every time token needs to be set in both state and localstorage, or maybe just local storage I can't tell
  const editToken=(token)=>{
    localStorage.setItem("token",token);
    setToken(token);
  }
  const signUpUser=async (body)=>{
    let user=await JoblyApi.createUser(body);
    editToken(user);
    return user;
  }
  const loginUser=async (body)=>{
    let token=await JoblyApi.getToken(body);
    editToken(token);
    return token;
  }
  const editUser=async (body)=>{
    let newUser= await JoblyApi.editUser(currentUser.username,body);
    setCurrentUser(newUser);
  }
  const logoutUser=()=>{
    editToken(null);
    localStorage.clear();
    setCurrentUser(null);
  }
  useEffect(()=>{
    if(userToken){
      //get user needs the username, willl need to decode token to get the username
      const getUserInfo=async (token)=>{
        const tokenInfo=jwtDecode(token);
        let info=await JoblyApi.getUser(tokenInfo.username,token);
        setCurrentUser(info);
      }
      getUserInfo(userToken);
    }
    else if(localStorage.getItem("token")){
      setToken(localStorage.getItem("token"));
    }
  },[userToken])
  //Every protected route is surrounded by an authorization route
  return (
    <userContext.Provider value={currentUser}>
    <div className="App">
      <BrowserRouter>
      <NavBar logOut={logoutUser}/>
        <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="/companies" element={<Authenticate/>}>
            <Route path="/companies" element={<CompanyList/>}/>
          </Route>
          <Route path="/companies/:name" element={<Authenticate/>}>
            <Route path="/companies/:name" element={<Company/>}/>
          </Route>
          <Route path="/jobs" element={<Authenticate/>}>
            <Route path="/jobs" element={<JobList/>}/>
          </Route>
          <Route path="/profile" element={<Authenticate/>}>
            <Route path="/profile" element={<Profile editUser={editUser}/>}/>
          </Route>
          <Route path="/login" element={<Login loginUser={loginUser}/>}/>
          <Route path="/signup" element={<SignUp signUpUser={signUpUser}/>}/>
          <Route path="*" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    </userContext.Provider>
  );
}

export default App;
