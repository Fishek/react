const BookApp = () => {
  // Initial state with 3 books
  const [books, setBooks] = useState([
    { id: 1, title: 'Book 1' },
    { id: 2, title: 'Book 2' },
    { id: 3, title: 'Book 3' }
  ]);

  // State for input values
  const [inputId, setInputId] = useState('');
  const [newTitle, setNewTitle] = useState('');

  // Update book title function
  const handleUpdateTitle = () => {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === parseInt(inputId)
          ? { ...book, title: newTitle }
          : book
      )
    );
    // Clear input values after updating title
    setInputId('');
    setNewTitle('');
  };

  return (
    <div>
      <h1>Book App</h1>
      <div>
        <label>
          Book ID:
          <input
            type="number"
            value={inputId}
            onChange={(e) => setInputId(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          New Title:
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handleUpdateTitle}>Update Title</button>

      <div>
        <h2>Books:</h2>
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              {`ID: ${book.id}, Title: ${book.title}`}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BookApp;