import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';

import Home from './pages/home';
import Form from './pages/form';
import Info from './pages/info';

function App() {

  const [books, setBooks] = useState([]);

  // Load all the books
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/client/books`);
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <Router>
      <div>
        <Routes>

          {/* Home Page */}
          <Route path="/" element={<Home/>} />

          {/* Form Page */}
          <Route path="/form" element={<Form/>} />

          {/* Info Pages */}
          {books.map((book) => (

            <Route path={"/info/"+book._id} element={
              <Info
                title = {book.title}
                author = {book.author}
                description={book.description}
                category={book.category}
                imageUrl={book.imageUrl}
                downloadUrl={book.downloadUrl}
              />
            } />

          ))}

        </Routes>
      </div>
    </Router>
  );
}

export default App;
