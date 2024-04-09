import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import dotenv from 'dotenv';

import Navbar from '../components/Navbar';
import EbookCard from '../components/EbookCard';
import Toaster from '../components/Toaster';

function Home() {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        console.log('Server URL:', process.env.REACT_APP_SERVER_URL);
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/books`);
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  console.log(books);

  return (
    <div>
      <Navbar />
      <section className="bg-gradient-to-r from-blue-400 to-blue-600 text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to BookHub</h1>
          <p className="text-lg">"Unlock the world of knowledge through our vast collection of digital ebooks."</p>
        </div>
      </section>
      <div className="container mx-auto mt-8 grid grid-cols-3 gap-8">
        
      {books.map((book) => (
        <EbookCard
          key={book._id}  // Assuming each book has a unique identifier
          title={book.title}
          author={book.author}
          description={book.description}
          imageUrl={book.imageUrl}  // Assuming imageUrl is a field in the book object
        />
      ))}

      </div>
      <Toaster message="File download has started." />
    </div>
  );
}

export default Home;
