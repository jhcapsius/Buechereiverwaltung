import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/NavbarDatabase";
import "./Datenbank.css";
import axios from "axios";
import CONFIG from "../../Config";

function Database() {
  const [users, setUsers] = useState([]);
  const [books, setBooks] = useState([]);
  const [bookshelves, setBookshelves] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [jobtitle, setJobtitle] = useState([]);

  useEffect(() => {
    axios.get(CONFIG.backendURL + "/user/getalluser").then((response) => {
      console.log(response);
      setUsers(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get(CONFIG.backendURL + "/book/getallbooks").then((response) => {
      console.log(response);
      setBooks(response.data);
    });
  }, []);

  useEffect(() => {
    axios
      .get(CONFIG.backendURL + "/bookshelf/getallbookshelves")
      .then((response) => {
        console.log(response);
        setBookshelves(response.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get(CONFIG.backendURL + "/employee/getallemployees")
      .then((response) => {
        console.log(response);
        setEmployees(response.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get(CONFIG.backendURL + "/jobtitle/getalljobtitles")
      .then((response) => {
        console.log(response);
        setJobtitle(response.data);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="Database-Container">
        <h1>Datenbank Tabellenübersicht</h1>
        <div className="Tables">
          <h2>Übersicht User</h2>
          <table border="1" cellSpacing={5} cellPadding={10}>
            <thead>
              <tr>
                <th>ID_USER</th>
                <th>USERNAME</th>
                <th>EMAIL_ADDRESS</th>
                <th>NAME</th>
                <th>PASSWORD</th>
              </tr>
            </thead>
            {users.map((users) => (
              <tbody className="bookshelfContent">
                <tr>
                  <td>{users.ID_USER}</td>
                  <td>{users.USERNAME}</td>
                  <td>{users.EMAIL_ADDRESS}</td>
                  <td>{users.NAME}</td>
                  <td>{users.PASSWORD}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
        <div className="Tables">
          <h2>Übersicht Bücher</h2>
          <table border="1" cellSpacing={5} cellPadding={10}>
            <thead>
              <tr>
                <th>ID_BOOK</th>
                <th>ID_USER</th>
                <th>ID_BOOKSHELF</th>
                <th>ID_EMPLOYEE</th>
                <th>TITLE</th>
                <th>AUTHOR</th>
                <th>PUBLISHER</th>
                <th>GENRE</th>
                <th>BORROWED</th>
              </tr>
            </thead>
            {books.map((books) => (
              <tbody className="bookshelfContent">
                <tr>
                  <td>{books.ID_BOOK}</td>
                  <td>{books.ID_USER}</td>
                  <td>{books.ID_BOOKSHELF}</td>
                  <td>{books.ID_EMPLOYEE}</td>
                  <td>{books.TITLE}</td>
                  <td>{books.AUTHOR}</td>
                  <td>{books.PUBLISHER}</td>
                  <td>{books.GENRE}</td>
                  {books.BORROWED ? <td>ausgeliehen</td> : <td>verfügbar</td>}
                </tr>
              </tbody>
            ))}
          </table>
        </div>
        <div className="Tables">
          <h2>Übersicht Bücheregale</h2>
          <table border="1" cellSpacing={5} cellPadding={10}>
            <thead>
              <tr>
                <th>ID_BOOKSHELF</th>
                <th>DESCRIPTION</th>
              </tr>
            </thead>
            {bookshelves.map((bookshelves) => (
              <tbody className="bookshelfContent">
                <tr>
                  <td>{bookshelves.ID_BOOKSHELF}</td>
                  <td>{bookshelves.DESCRIPTION}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
        <div className="Tables">
          <h2>Übersicht Angestellte</h2>
          <table border="1" cellSpacing={5} cellPadding={10}>
            <thead>
              <tr>
                <th>ID_EMPLOYEE</th>
                <th>JOB_TITLE</th>
                <th>ID_CHEF</th>
                <th>NAME</th>
                <th>PASSWORD</th>
                <th>BIRTHDAY</th>
                <th>RESIDENCE</th>
                <th>TOWN</th>
                <th>POSTAL_CODE</th>
              </tr>
            </thead>
            {employees.map((employees) => (
              <tbody className="bookshelfContent">
                <tr>
                  <td>{employees.ID_EMPLOYEE}</td>
                  <td>{employees.JOB_TITLE}</td>
                  <td>{employees.ID_CHEF}</td>
                  <td>{employees.NAME}</td>
                  <td>{employees.PASSWORD}</td>
                  <td>{employees.BIRTHDAY}</td>
                  <td>{employees.RESIDENCE}</td>
                  <td>{employees.TOWN}</td>
                  <td>{employees.POSTAL_CODE}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
        <div className="Tables">
          <h2>Übersicht Jobtitles</h2>
          <table border="1" cellSpacing={5} cellPadding={10}>
            <thead>
              <tr>
                <th>JOB_TITLE</th>
                <th>SALARY</th>
              </tr>
            </thead>
            {jobtitle.map((jobtitles) => (
              <tbody className="bookshelfContent">
                <tr>
                  <td>{jobtitles.JOB_TITLE}</td>
                  <td>{jobtitles.SALARY}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}

export default Database;
