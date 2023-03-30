import React, { Component, useState, useContext } from "react";
import { Button, StatusBar, Text, TextInput, View } from "react-native";
import {AuthContext} from "../components/AuthContext";
// import axios from "axios";
//  axios = require("axios");
// const HttpsProxyAgent = require("https-proxy-agent");

export default LoginScreenComponent = ({navigation}) => {
  const { test, login } = useContext(AuthContext);
  const [name, setName] = useState("poomzscript@gmail.com");
  const [password, setPassword] = useState("Pronto1!");

  // const httpsAgent = new HttpsProxyAgent({
  //   host: "https://dev.prontoai.app",
  // });

  let submitForm = async () => {
    console.log(" Login Fn Clicked...");
    login(name, password);
  }
  // let submitFormold = async () => {

  //   console.log("submit form called...........>>>..");
  //   console.log("body data ", name, password);
  //   // const res = await fetch("http://localhost:5000/login", {
  //   const res = await fetch("https://dev.prontoai.app/app/pronto_signin", {
  //     method: "post",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       email: name,
  //       password: password,
  //     }),
  //   })
  //   .then(response => response.json())
  //   .then(response => {
  //     console.log('response', response)
  //   });

  // };
  return (
    <View>
      <Text>Enter Login Detail</Text>
      <TextInput value={name} placeholder={name}></TextInput>
      <TextInput value={password} placeholder="password"></TextInput>
      <Button title="Login " onPress={() => submitForm()}>
        Login here
      </Button>
      <Button
        title="Login2 "
        onPress={() => {
          submitForm();
        }}
      >
        Login here
      </Button>
    </View>
  );
}
