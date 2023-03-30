import React, { createContext } from "react";
export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {

export const AuthProvider = ({ children }) =>{
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [test, setTest] = useState(false);
  const [profile, setProfile] = useState(null);

  const login = async (name, password) => {
    console.log("submit form called...........>>>..");
    console.log("body data ", name, password);
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
      .then((response) => response.json())
      .then((response) => {
        setProfile(response);
        setIsLoggedIn(true);
        console.log("response :: ", response);
        console.log(" -------------::------------------");
        console.log("profile", profile);
      });
  };

  const logout = () => {
    setProfile(null);
    setIsLoggedIn(false);
  };
  return (
  <AuthContext.Provider value={{ test, logout, login, profile, isLoggedIn}} >{children}</AuthContext.Provider>
  );
};
