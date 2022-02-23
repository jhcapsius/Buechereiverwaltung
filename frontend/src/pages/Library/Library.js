import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import config from "../../Config";
import "./Library.css";
import Navbar from "../../components/navbar/NavbarUser";

function Library() {
  const [listOfBooks, setListOfBooks] = useState([]);
  const [listOfBookshelves, setListOfBookshelves] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchedBook, setSearchedBook] = useState([]);
  const [searchErrorMsg, setSearchErrorMsg] = useState("");

  //gets all books from database when enter the site
  useEffect(() => {
    axios.get(config.backendURL + "/book/getallbooks").then((response) => {
      console.log(response);
      setListOfBooks(response.data);
    });
  }, []);

  ////gets all bookshelves from database when enter the site
  useEffect(() => {
    axios
      .get(config.backendURL + "/bookshelf/getallbookshelves")
      .then((response) => {
        console.log(response);
        setListOfBookshelves(response.data);
      });
  }, []);

  //finds a specific book title if available and returns all books with that title
  const booksearch = () => {
    setSearchedBook("");
    console.log(searchTitle);
    axios
      .post(
        config.backendURL + "/book/getbooksbyname",
        {
          TITLE: searchTitle,
        },
      )
      .then((response) => {
        console.log(response);
        if (response.data.found) {
          setSearchedBook(response.data.book);
          setSearchErrorMsg("");
        } else {
          setSearchErrorMsg(response.data.message);
        }
      });
  };

  //allowes the user to borrow a book
  const borrowBook = (bookID) => {
    axios
      .put(
        config.backendURL + "/book/borrowUser",
        {
          ID_BOOK: bookID,
          BORROWED: true,
          ID_USER: sessionStorage.getItem("userID"),
        },
        {
          headers: {
            accessToken: sessionStorage.getItem("accessToken"),
          },
        }
      )
      .then((response) => {
        alert("Buch wurde ausgeliehen");
        window.location.reload(false);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="booksearch">
        <h1>Suche</h1>
        <input
          type="text"
          placeholder="Buch-Title..."
          onChange={(event) => {
            setSearchTitle(event.target.value);
          }}
        />
        {searchTitle.length === 0 ? (
          <button disabled>Buch suchen</button>
        ) : (
          <button
            onClick={() => {
              booksearch();
            }}
          >
            Buch suchen
          </button>
        )}
        <div>
          {Object.keys(searchedBook).length === 1 ? (
            <p></p>
          ) : Object.keys(searchedBook).length === 0 ? (
            <p>{searchErrorMsg}</p>
          ) : (
            <table
              className="bookTable"
              border="1"
              cellSpacing={5}
              cellPadding={10}
            >
              <thead>
                <tr className="bookCategories">
                  <th>Titel</th>
                  <th>Bücherregal</th>
                  <th>Autor</th>
                  <th>Verlag</th>
                  <th>Genre</th>
                  <th>Status</th>
                </tr>
              </thead>
              {searchedBook.map((books) => (
              <tbody className="bookshelfContent">
                <tr>
                  <td>{books.TITLE}</td>
                  {!books.ID_BOOKSHELF ? <td>Lager</td> : (
                    <td>{books.ID_BOOKSHELF}</td>
                  )}
                  <td>{books.AUTHOR}</td>
                  <td>{books.PUBLISHER}</td>
                  <td>{books.GENRE}</td>
                  {books.BORROWED ? <td>ausgeliehen</td> : <td>verfügbar</td>}
                </tr>
              </tbody>
            ))}
            </table>
          )}
        </div>
      </div>
      <div className="bookshelf">
      <h1>Bücheregale</h1>
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
