import React, { createContext, useState } from 'react';
export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [profile, setProfile] = useState();

  const login = async (name, password) => {
    console.log("submit form called...........>>>..");
    console.log("body data ", name, password);
    setUserEmail(name);
    // const res = await fetch("http://localhost:5000/login", {
    const res = await fetch("https://dev.prontoai.app/app/pronto_signin", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: name,
        password: password,
      }),
    })
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setProfile(data);
        setIsLoggedIn(true);
        // console.log("response ::", data);
        // console.log("response ::", data?.name);
        console.log("---------------------------------------");
        // console.log(isLoggedIn);
        // console.log(profile.user_profile);
        // profile.map((data) => {
        //   console.log(data);
        // });
      });
  };

  const logout = () => {
    setProfile(null);
    setIsLoggedIn(false);
  };
  return(
    <AuthContext.Provider value={{ logout, login, profile, isLoggedIn, userEmail}}>
      {children}
    </AuthContext.Provider>
  );
}