import React, { useState, useEffect } from 'react';

import Navbar from '../components/Navbar';
import BookForm from '../components/BookForm';
import Toaster from '../components/Toaster';

function Form() {

  const [showToaster, setShowToaster] = useState(false);
    
  const handleUpload = () => {
    setShowToaster(true);
    setTimeout(() => {
    setShowToaster(false);
    }, 3000);
  };

  return (
    <div>
      <Navbar />
      <div className='w-full pt-20 flex items-center justify-content-center'>
        <BookForm onSubmit={handleUpload} />
      </div>
      {showToaster && <Toaster message="Book successfully submitted!"/>}
    </div>
  );
}

export default Form;
