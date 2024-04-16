import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Info({ title, author, description, category, imageUrl, downloadUrl }) {
  return (
    <div>
      <Navbar updateCategory={() => {}} updateQuery={() => {}} searchQuery={() => {}} />
      <div className="container mx-auto py-10">
        <div className="my-16 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="md:flex items-center px-16 py-8 gap-x-8">
            <img
              src={imageUrl}
              alt={title}
              className="h-96 md:h-96 md:w-96 md:mr-6 rounded-lg object-cover shadow-lg"
            />
            <div className="text-center md:text-left mt-6 md:mt-0">
              <h1 className="text-2xl font-bold">{title}</h1>
              <h2 className="text-lg text-gray-600 font-medium">by {author}</h2>
              <p className="w-2/3 text-gray-700 mt-4">{description}</p>
              <div className="flex items-center justify-center md:justify-start mt-4">
                <span className="text-gray-600 font-medium mr-2">Category:</span>
                <span className="bg-[#8BC34A] text-white font-medium py-1 px-3 rounded-full text-sm">
                  {category}
                </span>
              </div>
              <div className="space-x-4 mt-6">
                <a
                  href={downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm"
                >
                  Get Download Link
                </a>
                <Link
                  to="/"
                  className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded text-sm"
                >
                  Browse More Books
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;