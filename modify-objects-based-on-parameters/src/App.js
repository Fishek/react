import React, { useState } from "react";

const BookApp = () => {
  const [books, setBooks] = useState([
    { id: 1, name: "Book 1" },
    { id: 2, name: "Book 2" },
  ]);

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleUpdateBook = () => {
    setBooks((prevBooks) => 
      //prevBooks is the array of books as it exists in the current state while book represents an individual element within the array. In the handleUpdateBook function, using prevBooks instead of books is a best practice to ensure that you are working with the most up-to-date state
      prevBooks.map((book) => {
        if (book.id === parseInt(inputValue)) {
          return { ...book, name: "Harry Potter" }; //This whole if function equals to: book.id === parseInt(inputValue) ? { ...book, name: 'Harry Potter' } : book
        } else {
          return book;
        }
      })
    );
  };

  return (
    <div>
      <h1>Book App</h1>
      <div>
        <label>
          Enter Book ID:
          <input
            type="number"
            value={inputValue}
            onChange={handleInputChange}
          />
        </label>
        <button onClick={handleUpdateBook}>Change Name to Harry Potter</button>
      </div>
      <div>
        <h2>Books:</h2>
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              {book.name} (ID: {book.id})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BookApp;
