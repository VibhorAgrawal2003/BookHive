import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Navbar from '../components/Navbar';
import BookForm from '../components/BookForm';
import Toaster from '../components/Toaster';

function Form() {
  return (
    <div>
      <Navbar />
      <div className='w-full flex items-center justify-content-center'>
        <BookForm/>
      </div>
      <Toaster message="Book successfully submitted!" />
    </div>
  );
}

export default Form;
