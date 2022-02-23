import React, { useState, useEffect } from "react";
import config from "../../Config";
import axios from "axios";
import "./Administration.css";
import { useParams } from "react-router-dom";
import Navbar from "../../components/navbar/NavbarEmployee";

function Administration() {
  const [listOfBooks, setListOfBooks] = useState([]);
  const [listOfBookshelves, setListOfBookshelves] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");
  const [bookID, setBookID] = useState(0);
  const [searchID, setsearchID] = useState("");
  const [searchedBook, setSearchedBook] = useState({ msg: "placeholder" });

  let { id } = useParams;

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

  var findBook = () => {
    id = searchID;
    console.log(searchID);
    axios
      .get(config.backendURL + `/book/getbookbyid/${id}`, {
        params: {
          id: id,
        },
      })
      .then((response) => {
        console.log(response);
        setSearchedBook(response.data);
      });
  };

  const addBook = () => {
    axios
      .post(config.backendURL + "/book/addbook", {
        TITLE: title,
        AUTHOR: author,
        PUBLISHER: publisher,
        GENRE: genre,
        BORROWED: false,
        ID_EMPLOYEE: sessionStorage.getItem("id"),
      })
      .then(() => {
        alert("Buch wurde hinzugefügt.");
        window.location.reload(false);
      });
  };

  const borrowBook = (bookID) => {
    axios
      .put(
        config.backendURL + "/book/borrowEmployee",
        {
          ID_BOOK: bookID,
          BORROWED: false,
        },
        {
          headers: {
            accessToken: sessionStorage.getItem("accessToken"),
          },
        }
      )
      .then((response) => {
        alert("Buch wurde zurückgebracht");
        window.location.reload(false);
      });
  };

  const deleteBook = (bookID) => {
    axios
      .delete(config.backendURL + `/book/deletebook/${bookID}`, {
        params: {
          id: bookID,
        },
      })
      .then(() => {
        console.log("Buch wurde entfernt.");
        alert("Buch wurde gelöscht.");
        window.location.reload(false);
      });
  };

  const addShelf = () => {
    axios
      .post(config.backendURL + "/bookshelf/newbookshelf", {
        DESCRIPTION: description,
      })
      .then(() => {
        alert("Bücherregal wurde erstellt.");
        window.location.reload(false);
      });
  };

  const addBookToBookshelf = (idBookshelf) => {
    console.log(idBookshelf);
    axios
      .put(config.backendURL + "/book/addbooktoshelf", {
        id: bookID,
        bookshelf: idBookshelf,
      })
      .then(() => {
        alert("Buch wurde dem Bücherregal hinzugefügt.");
        window.location.reload(false);
      });
  };

  const bookToStorage = (idBookshelf) => {
    axios
      .put(config.backendURL + "/book/putbooktostorage", {
        id: idBookshelf,
      })
      .then(() => {
        alert("Buch wurde zurück ins Lager gebracht.");
        window.location.reload(false);
      });
  };

  const deleteBookshelf = (idBookshelf) => {
    bookToStorage(idBookshelf);
    axios
      .delete(config.backendURL + `/bookshelf/deleteshelf/${idBookshelf}`, {
        params: {
          id: idBookshelf,
        },
      })
      .then(() => {
        alert(
          "Bücherregal wurde gelöscht und die Bücher zurück ins Lager gelegt."
        );
        window.location.reload(false);
      });
  };

  const removeBookFromBookshelf = (idBook) => {
    console.log(listOfBooks);
    console.log(idBook);
    axios
      .put(config.backendURL + "/book/removebookfromshelf", {
        id: idBook,
      })
      .then(() => {
        alert("Buch wurde zurück ins Lager gelegt");
        window.location.reload(false);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="books">
        <h1>Bücher</h1>
        <h2>Suche</h2>
        <div className="booksearch">
          <input
            type="text"
            placeholder="Buch-ID..."
            onChange={(event) => {
              setsearchID(event.target.value);
            }}
          />
          {searchID.length === 0 ? (
            <button disabled>Buch suchen</button>
          ) : (
            <button
              onClick={() => {
                findBook();
              }}
            >
              Buch suchen
            </button>
          )}
          <div>
            {Object.keys(searchedBook).length === 1 ? (
              <p></p>
            ) : Object.keys(searchedBook).length === 0 ? (
              <p>Buch konnte nicht gefunden.</p>
            ) : (
              <table
                className="bookTable"
                border="1"
                cellSpacing={5}
                cellPadding={10}
              >
                <thead>
                  <tr className="bookCategories">
                    <th>ID</th>
                    <th>Titel</th>
                    <th>Bücherregal</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{searchedBook.ID_BOOK}</td>
                    <td>{searchedBook.TITLE}</td>
                    {searchedBook.EMAIL_ADDRESS != null ? (
                      <td>Ausgeliehen von {searchedBook.EMAIL_ADDRESS}</td>
                    ) : searchedBook.ID_BOOKSHELF === null ? (
                      <td>Buch befindet sich im Lager</td>
                    ) : (
                      <td>
                        Buch befindet sich in Bücheregal{" "}
                        {searchedBook.ID_BOOKSHELF}
                      </td>
                    )}
                    {searchedBook.BORROWED ? (
                      <td>ausgeliehen</td>
                    ) : (
                      <td>verfügbar</td>
                    )}
                  </tr>
                </tbody>
              </table>
            )}
          </div>
        </div>
        <h2>Übersicht</h2>
        <div className="addbook">
          <input
            type="text"
            placeholder="Titel..."
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Autor..."
            onChange={(event) => {
              setAuthor(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Verlag..."
            onChange={(event) => {
              setPublisher(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Genre..."
            onChange={(event) => {
              setGenre(event.target.value);
            }}
          />
          {title.length === 0 ||
          author.length === 0 ||
          publisher.length === 0 ||
          genre.length === 0 ? (
            <button disabled>Buch hinzufügen</button>
          ) : (
            <button
              onClick={() => {
                addBook();
              }}
            >
              Buch hinzufügen
            </button>
          )}
        </div>
        <table
          className="bookTable"
          border="1"
          cellSpacing={5}
          cellPadding={10}
        >
          <thead>
            <tr className="bookCategories">
              <th>ID</th>
              <th>Titel</th>
              <th>Autor</th>
              <th>Verlag</th>
              <th>Genre</th>
              <th>Bücherregal</th>
              <th>Verleihtatus ändern</th>
              <th>Buch entfernen</th>
            </tr>
          </thead>
          {listOfBooks.map((books) => (
            <tbody>
              <tr>
                <td>{books.ID_BOOK}</td>
                <td>{books.TITLE}</td>
                <td>{books.AUTHOR}</td>
                <td>{books.PUBLISHER}</td>
                <td>{books.GENRE}</td>
                {books.EMAIL_ADDRESS != null ? (
                  <td>Ausgeliehen von {books.EMAIL_ADDRESS}</td>
                ) : books.ID_BOOKSHELF === null ? (
                  <td>Buch befindet sich im Lager</td>
                ) : (
                  <td>Buch befindet sich in Bücheregal {books.ID_BOOKSHELF}</td>
                )}

                {books.BORROWED ? (
                  <td>
                    <button
                      onClick={() => {
                        borrowBook(books.ID_BOOK);
                      }}
                    >
                      zurück gebracht?
                    </button>
                  </td>
                ) : (
                  <td>
                    <button disabled>zurück gebracht?</button>
                  </td>
                )}
                {!books.BORROWED ? (
                  <td>
                    <button
                      onClick={() => {
                        deleteBook(books.ID_BOOK);
                      }}
                    >
                      Buch entfernen?
                    </button>
                  </td>
                ) : (
                  <td>
                    <button disabled>Buch entfernen?</button>
                  </td>
                )}
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      <div className="bookshelfA">
        <h1>Bücherregale</h1>
        <div className="addbookshelf">
          <input
            type="text"
            placeholder="Beschreibung..."
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
          {description.length === 0 ? (
            <button disabled>Bücherregal hinzufügen</button>
          ) : (
            <button
              onClick={() => {
                addShelf();
              }}
            >
              Bücherregal hinzufügen
            </button>
          )}
        </div>

        {listOfBookshelves.map((value) => {
          return (
            <div>
              <table
                className="bookshelfTable"
                border="1"
                cellSpacing={5}
                cellPadding={10}
              >
                <thead className="bookshelfTableHead">
                  <div className="addBooktoShelf">
                    <input
                      type="text"
                      placeholder="Buch-ID..."
                      onChange={(event) => {
                        setBookID(event.target.value);
                      }}
                    />
                    <button
                      onClick={() => {
                        addBookToBookshelf(value.ID_BOOKSHELF);
                      }}
                    >
                      Buch hinzufügen
                    </button>
                  </div>
                  Bookshelf {value.ID_BOOKSHELF}: {value.DESCRIPTION}
                  <tr className="bookshelfCategories">
                    <th>Titel</th>
                    <th>Author</th>
                    <th>Verlag</th>
                    <th>Genre</th>
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
                            removeBookFromBookshelf(books.ID_BOOK);
                          }}
                        >
                          Buch entfernen
                        </button>
                      ) : (
                        <></>
                      )}
                    </tr>
                  </tbody>
                ))}
              </table>
              <button
                onClick={() => {
                  deleteBookshelf(value.ID_BOOKSHELF);
                }}
              >
                Bücherregal löschen
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Administration;
