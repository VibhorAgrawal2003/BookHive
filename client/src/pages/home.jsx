import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import EbookCard from '../components/EbookCard';
import Toaster from '../components/Toaster';

function Home() {

  const [books, setBooks] = useState([]);
  const [showToaster, setShowToaster] = useState(false);
    
  const handleDownload = () => {
    setShowToaster(true);
    setTimeout(() => {
    setShowToaster(false);
    }, 3000);
  };

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

  return (
    <div>
      <Navbar />
      <section className="bg-gradient-to-r from-blue-400 to-blue-600 text-white py-20 px-4">
        <Banner/>
      </section>
      <div className="w-5/6 mx-auto mt-8 grid grid-cols-3 gap-16">
        
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
