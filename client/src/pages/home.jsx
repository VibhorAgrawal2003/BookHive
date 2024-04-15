import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import EbookCard from '../components/EbookCard';
import Toaster from '../components/Toaster';

function Home() {

  const [books, setBooks] = useState([]);
  const [category, setCategory] = useState("");
  const [showToaster, setShowToaster] = useState(false);
  
  // Show the download toaster
  const handleDownload = () => {
    setShowToaster(true);
    setTimeout(() => {
    setShowToaster(false);
    }, 3000);
  };

  // Load all the books
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        console.log('Server URL:', process.env.REACT_APP_SERVER_URL);
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
          console.log('Server URL:', process.env.REACT_APP_SERVER_URL);
          const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/client/books/search?searchCategory=${category}`);
          setBooks(response.data);
        }
      } catch (error) {
        console.log('Axios Error:', error.message);
      }
    };
  
    searchCategory();
  }, [category]);


  return (
    <div>
      <Navbar updateCategory = {updateCategory} />
      <section className="bg-gradient-to-r from-blue-400 to-blue-600 text-white py-20 px-4">
        <Banner/>
      </section>
      <div className="w-5/6 mx-auto mt-8 grid grid-cols-3 gap-8">
        
        {books.map((book) => (
          <EbookCard
            key={book._id}
            title={book.title}
            author={book.author}
            description={book.description}
            category={book.category}
            imageUrl={book.imageUrl}
            downloadUrl={book.downloadUrl}
            handleDownload={handleDownload}
          />
        ))}

      </div>
      {showToaster && <Toaster message="File download started!" />}
    </div>
  );
}

export default Home;
