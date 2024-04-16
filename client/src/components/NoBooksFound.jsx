import React from 'react';

const NoBooksFound = () => {
  return (
    <div className="flex justify-center items-center h-full col-span-3">
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold"> ( x _ x ) </strong>
        <span className="block sm:inline">We couldn't find any books. Please check your internet connection.</span>
      </div>
    </div>
  );
};

export default NoBooksFound;
