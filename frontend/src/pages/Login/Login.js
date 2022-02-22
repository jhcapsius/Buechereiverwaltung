import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import config from "../../Config";
import Navbar from "../../components/navbar/NavbarFrontpage";

function Login() {
  const [emailUser, setEmailUser] = useState("");
  const[id, setID] = useState("");
  const [passwordUser, setPasswordUser] = useState("");
  const [passwordEmp, setPasswordEmp] = useState("");
  const [errorMsgUser, setErrorMsgUser] = useState("");
  const [errorMsgEmp, setErrorMsgEmp] = useState("");
  const [emailboolUser, setEmailBoolUser] = useState(false);
  const [idboolEmp, setIDBoolEmp] = useState(false);
 
  const userLogin = () => {
    axios.post(config.backendURL + "/user/login", {
      EMAIL_ADDRESS: emailUser,
      PASSWORD: passwordUser
    }).then((response) => {
      if(response.data.loggedIn){
        sessionStorage.setItem("accessToken", response.data.accessToken);
        sessionStorage.setItem("email", response.data.email);
        window.location = config.frontendURL + "/library";
      } else{
        setEmailBoolUser(true);
        setErrorMsgUser(response.data.message);
      }
    })
  }

  const empLogin = () => {
    axios.post(config.backendURL + "/employee/login",{
      ID_EMPLOYEE: id,
      PASSWORD: passwordEmp
    }).then((response) => {
      if(response.data.loggedIn){
        sessionStorage.setItem("accessToken", response.data.accessToken);
        sessionStorage.setItem("id", response.data.id);
        window.location = config.frontendURL + "/administration";
      }else{
        setIDBoolEmp(true);
        setErrorMsgEmp(response.data.message);
      }
    })
  }

  return (
    <div>
      <Navbar/>
      <div className="Frontpage">
        <h1>Willkommen beim MiTTWALD Lernwerk</h1>
        <div className="login">
          <div className="loginbox">
            <h2>User Login</h2>
            <div className="registrationInputs">
              <input
                type="text"
                placeholder="Email Adresse..."
                onChange={(event) => {
                  setEmailUser(event.target.value);
                }}
              />
              <input
                type="password"
                placeholder="Passwort..."
                onChange={(event) => {
                  setPasswordUser(event.target.value);
                }}
              />
              <div className="buttonAndError">
                {emailUser.length === 0 ||
                passwordUser.length === 0 ? (
                  <button disabled>Anmelden</button>
                ) : (
                  <button onClick={userLogin}>Anmelden</button>
                )}

                {!emailboolUser ? (<></>) : (
                  <p className="error">{errorMsgUser}</p>
                )}
              </div>
            </div>
          </div>
          <div className="loginbox">
            <h2>Büchereiangestellte Login</h2>
            <div className="registrationInputs">
              <input
                type="text"
                placeholder="ID..."
                onChange={(event) => {
                  setID(event.target.value);
                }}
              />
              <input
                type="password"
                placeholder="Passwort..."
                onChange={(event) => {
                  setPasswordEmp(event.target.value);
                }}
              />
              <div className="buttonAndError">
                {
                id.length === 0 ||
                passwordEmp.length === 0 ? (
                  <button disabled>Anmelden</button>
                ) : (
                  <button onClick={empLogin}>Anmelden</button>
                )}

                {!idboolEmp ? (<></>) : (
                  <p className="error">{errorMsgEmp}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
