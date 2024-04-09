import React, { useState } from 'react';
import axios from 'axios';

function BookForm({ onSubmit }) {
  const [bookDetails, setBookDetails] = useState({
    title: '',
    author: '',
    category: '',
    description: '',
    imageUrl: '',
    downloadUrl: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookDetails({ ...bookDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_SERVER_URL}/books`, bookDetails);
      // setToastMessage("Book successfully submitted!");
    } catch (error) {
      console.error('Error submitting book details:', error);
    }
  };

  const handleReset = () => {
    setBookDetails({
      title: '',
      author: '',
      category: '',
      description: '',
      imageUrl: '',
      downloadUrl: ''
    });
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form className="bg-white shadow-md rounded px-4 pt-6 pb-8 my-4">

        <div className="mb-4 flex flex-row gap-x-4">
          <div className="w-1/2">
            <label htmlFor="title" className="block text-gray-700 text-sm mb-2">Title</label>
            <input type="text" id="title" name="title" value={bookDetails.title} onChange={handleChange} className="w-full border rounded px-2 py-1" required />
          </div>
          <div className="w-1/2">
            <label htmlFor="author" className="block text-gray-700 text-sm mb-2">Author</label>
            <input type="text" id="author" name="author" value={bookDetails.author} onChange={handleChange} className="w-full border rounded px-2 py-1" required />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="category" className="block text-gray-700 text-sm mb-2">Category</label>
          <input type="text" id="category" name="category" value={bookDetails.category} onChange={handleChange} className="w-full border rounded px-2 py-1" required />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 text-sm mb-2">Description</label>
          <textarea id="description" name="description" value={bookDetails.description} onChange={handleChange} className="w-full border rounded px-2 py-1" required />
        </div>
        <div className="mb-4">
          <label htmlFor="imageUrl" className="block text-gray-700 text-sm mb-2">Image URL</label>
          <input type="url" id="imageUrl" name="imageUrl" value={bookDetails.imageUrl} onChange={handleChange} className="w-full border rounded px-2 py-1" required />
        </div>
        <div className="mb-4">
          <label htmlFor="downloadUrl" className="block text-gray-700 text-sm mb-2">Download URL</label>
          <input type="url" id="downloadUrl" name="downloadUrl" value={bookDetails.downloadUrl} onChange={handleChange} className="w-full border rounded px-2 py-1" required />
        </div>

        <div className="flex justify-between gap-x-4">
          <button type="submit" onClick={handleSubmit} className="w-1/2 bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
          <button type="button" onClick={handleReset} className="w-1/2 bg-gray-300 text-gray-800 px-4 py-2 rounded">Reset</button>
        </div>

      </form>
    </div>
  );
}

export default BookForm;
