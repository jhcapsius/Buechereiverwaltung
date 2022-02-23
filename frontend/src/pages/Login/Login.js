import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import CONFIG from "../../Config";
import Navbar from "../../components/navbar/NavbarFrontpage";

function Login() {
  const [username, setUsername] = useState("");
  const [id, setID] = useState("");
  const [passwordUser, setPasswordUser] = useState("");
  const [passwordEmp, setPasswordEmp] = useState("");
  const [errorMsgUser, setErrorMsgUser] = useState("");
  const [errorMsgEmp, setErrorMsgEmp] = useState("");
  const [messageUserBool, setMessageUserBool] = useState(false);
  const [messageEmpBool, setMessageEmpBool] = useState(false);

  const userLogin = () => {
    axios
      .post(CONFIG.backendURL + `/user/login`, {
        USERNAME: username,
        PASSWORD: passwordUser
      })
      .then((response) => {
        console.log(response);
        if (response.data.loggedIn) {
          sessionStorage.setItem("accessToken", response.data.accessToken);
          sessionStorage.setItem("userID", response.data.id);
          window.location = CONFIG.frontendURL + "/library";
        } else {
          setMessageUserBool(true);
          setErrorMsgUser(response.data.message);
        }
      });
  };

  const empLogin = () => {
    axios
      .post(CONFIG.backendURL + "/employee/login", {
        ID_EMPLOYEE: id,
        PASSWORD: passwordEmp,
      })
      .then((response) => {
        if (response.data.loggedIn) {
          sessionStorage.setItem("accessToken", response.data.accessToken);
          sessionStorage.setItem("id", response.data.id);
          window.location = CONFIG.frontendURL + "/administration";
        } else {
          setMessageEmpBool(true);
          setErrorMsgEmp(response.data.message);
        }
      });
  };

  return (
    <div>
      <Navbar />
      <div className="Frontpage">
        <h1>Willkommen beim MiTTWALD Lernwerk</h1>
        <div className="login">
          <div className="loginbox">
            <h2>User Login</h2>
            <div className="registrationInputs">
              <input
                type="text"
                placeholder="Username..."
                onChange={(event) => {
                  setUsername(event.target.value);
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
                {username.length === 0 || passwordUser.length === 0 ? (
                  <button disabled>Anmelden</button>
                ) : (
                  <button onClick={userLogin}>Anmelden</button>
                )}

                {!messageUserBool ? (
                  <p></p>
                ) : (
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
                {id.length === 0 || passwordEmp.length === 0 ? (
                  <button disabled>Anmelden</button>
                ) : (
                  <button onClick={empLogin}>Anmelden</button>
                )}

                {!messageEmpBool ? (
                  <p></p>
                ) : (
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
