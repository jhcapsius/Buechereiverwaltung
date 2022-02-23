import React, { useState } from "react";
import "./Register.css";
import axios from "axios";
import CONFIG from "../../Config";
import { useParams } from "react-router-dom";
import Navbar from "../../components/navbar/NavbarFrontpage";

function Register() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [messageBool, setMeesageBool] = useState(false);

  const register = () => {
    axios.post(CONFIG.backendURL + "/user/register", {
      NAME: firstname + " " + lastname,
      USERNAME: username,
      EMAIL_ADDRESS: email,
      PASSWORD: password
    }).then((response) => {
      console.log(response);
      setMeesageBool(true);
      if(response.data.registered){
        setErrorMsg("");
        setSuccessMsg(response.data.message)
      }else{
        setErrorMsg(response.data.message);
        setSuccessMsg("");
      }
    })
  }

  return (
    <div>
      <Navbar />
      <div className="Frontpage">
        <h1>Willkommen beim MiTTWALD Lernwerk</h1>
        <div className="registration">
          <div className="registrationbox">
            <h2>Registrierung</h2>
            <div className="registrationInputs">
              <input
                type="text"
                placeholder="Vorname..."
                onChange={(event) => {
                  setFirstname(event.target.value);
                }}
              />
              <input
                type="text"
                placeholder="Nachname..."
                onChange={(event) => {
                  setLastname(event.target.value);
                }}
              />
              <input
                type="text"
                placeholder="Username..."
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              />
              <input
                type="text"
                placeholder="Email Adresse..."
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <input
                type="password"
                placeholder="Passwort..."
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <div className="buttonAndError">
                {firstname.length === 0 ||
                lastname.length === 0 ||
                username.length === 0 ||
                email.length === 0 ||
                password.length === 0 ? (
                  <button disabled>Registrieren</button>
                ) : (
                  <button onClick={register}>Registrieren</button>
                )}

                {!messageBool ? (
                  <></>
                ) : errorMsg.length != 0 ? (
                  <p className="error">{errorMsg}</p>
                ) : (
                  <p className="success">{successMsg}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
