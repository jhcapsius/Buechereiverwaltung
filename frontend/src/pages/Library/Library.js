import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import config from "../../Config";
import "./Library.css";
import Navbar from "../../components/navbar/NavbarUser";

function Library() {
  const [listOfBooks, setListOfBooks] = useState([]);
  const [listOfBookshelves, setListOfBookshelves] = useState([]);

  useEffect(() => {
    axios.get(config.backendURL + "/book/getallbooks").then((response) => {
      console.log(response);
      setListOfBooks(response.data);
    });
  }, []);

  useEffect(() => {
    axios
      .get(config.backendURL + "/bookshelf/getallbookshelves")
      .then((response) => {
        console.log(response);
        setListOfBookshelves(response.data);
      });
  }, []);

  const borrowBook = (bookID) => {
   
    axios
      .put(config.backendURL + "/book/borrowUser", {
        ID_BOOK: bookID,
        BORROWED: true,
        EMAIL_ADDRESS: sessionStorage.getItem("email")
      },
      {
        headers: {
          accessToken: sessionStorage.getItem("accessToken"),
        }
      }
      )
      .then((response) => {
        alert("Buch wurde ausgeliehen");
        window.location.reload(false);
      });
  };

  return (
    <div>
      <Navbar/>
      <div className="bookshelf">
      {listOfBookshelves.map((value) => {
        return (
          <table
            className="bookshelfTable"
            border="1"
            cellSpacing={5}
            cellPadding={10}
          >
            <thead className="bookshelfTableHead">
              Bücherregal {value.ID_BOOKSHELF}: {value.DESCRIPTION}
              <tr className="bookshelfCategories">
                <th>Titel</th>
                <th>Author</th>
                <th>Verlag</th>
                <th>Genre</th>
                <th>Ausleihen</th>
              </tr>
            </thead>
            {listOfBooks.map((books) => (
              <tbody className="bookshelfContent">
                <tr>
                  {books.ID_BOOKSHELF === value.ID_BOOKSHELF &&
                  !books.BORROWED ? (
                    <td>{books.TITLE}</td>
                  ) : (
                    <></>
                  )}
                  {books.ID_BOOKSHELF === value.ID_BOOKSHELF &&
                  !books.BORROWED ? (
                    <td>{books.AUTHOR}</td>
                  ) : (
                    <></>
                  )}
                  {books.ID_BOOKSHELF === value.ID_BOOKSHELF &&
                  !books.BORROWED ? (
                    <td>{books.PUBLISHER}</td>
                  ) : (
                    <></>
                  )}
                  {books.ID_BOOKSHELF === value.ID_BOOKSHELF &&
                  !books.BORROWED ? (
                    <td>{books.GENRE}</td>
                  ) : (
                    <></>
                  )}
                  {books.ID_BOOKSHELF === value.ID_BOOKSHELF &&
                  !books.BORROWED ? (
                    <button
                      onClick={() => {
                        borrowBook(books.ID_BOOK);
                      }}
                    >
                      Ausleihen
                    </button>
                  ) : (
                    <></>
                  )}
                </tr>
              </tbody>
            ))}
          </table>
        );
      })}
    </div>
    </div>
  );
}

export default Library;
