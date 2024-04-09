import React, { useState } from 'react';
import Toaster from './Toaster';

const EbookCard = ({ title, author, description, category, imageUrl, downloadUrl, handleDownload }) => {

    const truncatedDescription = description.length > 200 ? description.substring(0, 200) + '...' : description;

    return (
        <div className="border p-4 rounded-lg shadow-md flex flex-col transform translate-all duration-300 hover:scale-105">
            <div className="flex-shrink-0">
                <img src={imageUrl} alt={title} className="w-full h-32 object-cover rounded-t-lg" />
            </div>
            <div className="flex flex-col flex-grow justify-between">
                <div>
                    <h2 className="text-md font-semibold mt-2 mb-2">{title}</h2>
                    <div className="flex flex-row justify-between items-center mb-2">
                        <p className="text-sm text-gray-600">Author: {author}</p>
                        <p className="text-sm text-lime-600">{category}</p>
                    </div>
                    <p className="text-sm text-gray-700">{truncatedDescription}</p>
                </div>
                <button onClick={handleDownload} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Download</button>
            </div>
        </div>
    );
};

export default EbookCard;
