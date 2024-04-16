import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import EbookCard from '../components/EbookCard';
import Toaster from '../components/Toaster';
import NoBooksFound from '../components/NoBooksFound';

function Home() {

  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [showToaster, setShowToaster] = useState(false);
  
  // Show the download toaster
  const downloadToaster = () => {
    setShowToaster(true);
    setTimeout(() => {
    setShowToaster(false);
    }, 3000);
  };

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



  // Perform search by category
  const updateCategory = (category) => {
    setCategory(category);
  };

  useEffect(() => {
    const searchCategory = async () => {    
      try {
        if (category !== "") {
          const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/client/books/category?searchCategory=${category}`);
          setBooks(response.data);
        }
      } catch (error) {
        console.log('Axios Error:', error.message);
      }
    };
  
    searchCategory();
  }, [category]);


  // Perform search by query
  const updateQuery = (query) => {
    setQuery(query.trim());
  };

  const searchQuery = async() => {
    try {
      if (query !== "") {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/client/books/search?searchQuery=${query}`);
        setBooks(response.data);
      } else {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/client/books`);
        setBooks(response.data);
      }
    } catch (error) {
      console.log('Axios Error:', error.message);
    }
  };

  return (
    <div>
      <Navbar
        updateCategory = {updateCategory}
        updateQuery = {updateQuery}
        searchQuery = {searchQuery}
      />
      <section className="bg-gradient-to-r from-blue-400 to-blue-600 text-white py-20 px-4">
        <Banner/>
      </section>
      <div className="w-5/6 mx-auto mt-8 grid grid-cols-3 gap-8">
        
        {books.length === 0 &&
        
          <NoBooksFound />
        
        }

        {books.map((book) => (
          <EbookCard
            key={book._id}
            title={book.title}
            author={book.author}
            description={book.description}
            category={book.category}
            imageUrl={book.imageUrl}
            downloadUrl={book.downloadUrl}
            downloadToaster={downloadToaster}
          />
        ))}

      </div>
      {showToaster && <Toaster message="File download started!" />}
    </div>
  );
}

export default Home;
