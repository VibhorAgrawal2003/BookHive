import React from 'react';

const EbookCard = ({ title, author, description, imageUrl }) => {

    const truncatedDescription = description.length > 200 ? description.substring(0, 200) + '...' : description;

    return (
        <div className="border p-4 rounded-lg shadow-md flex flex-col">
            <div className="flex-shrink-0">
                <img src={imageUrl} alt={title} className="w-full h-32 object-cover rounded-t-lg" />
            </div>
            <div className="flex flex-col flex-grow justify-between">
                <div>
                    <h2 className="text-lg font-semibold mt-2">{title}</h2>
                    <p className="text-sm text-gray-600 mb-2">Author: {author}</p>
                    <p className="text-sm text-gray-700">{truncatedDescription}</p>
                </div>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Download</button>
            </div>
        </div>
    );
};

export default EbookCard;
