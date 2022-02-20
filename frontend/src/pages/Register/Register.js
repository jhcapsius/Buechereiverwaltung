import React, { useState } from "react";
import "./Register.css";
import axios from "axios";
import config from "../../Config";
import { useParams } from "react-router-dom";
import Navbar from "../../components/navbar/NavbarFrontpage";

function Register() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [emailbool, setEmailBool] = useState(false);
  let { id } = useParams;

  const checkEmail = () => {
    id = email;
    console.log(id);
    axios
      .get(config.backendURL + `/user/getuserbyid/${id}`, {
        params: {
          email: id,
        },
      })
      .then((response) => {
        console.log(response.data.exists);
        if (response.data.exists) {
          setEmailBool(response.data.exists);
          setErrorMsg(response.data.message);
        } else {
          register(response.data.exists);
        }
      });
  };

  const register = (exist) => {
    console.log(exist);
    if (!exist) {
      axios
        .post(config.backendURL + "/user/register", {
          EMAIL_ADDRESS: email,
          NAME: firstname + " " + lastname,
          PASSWORD: password,
        })
        .then((response) => {
          console.log(response);
          setErrorMsg("");
          setSuccessMsg(response.data.message);
        });
    }
  };

  return (
    <div>
      <Navbar/>
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
                email.length === 0 ||
                password.length === 0 ? (
                  <button disabled>Registrieren</button>
                ) : (
                  <button onClick={checkEmail}>Registrieren</button>
                )}

                {!emailbool ? (<></>) : errorMsg.length !== 0 ? (
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
