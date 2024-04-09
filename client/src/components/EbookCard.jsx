import React from 'react';

const EbookCard = ({ title, author, description }) => {
    return (
        <div className="border p-4 rounded ebook-card">
            <h2 className="text-lg font-semibold mb-2">{title}</h2>
            <p className="text-gray-600 text-sm mb-2">Author: {author}</p>
            <p className="text-gray-700">{description}</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded download-btn">Download</button>
        </div>
    );
};

export default EbookCard;
