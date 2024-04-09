import React from 'react';

function Toaster({message}) {
  return (
    <div className="fixed bottom-0 right-0 p-4">
      <div className="bg-green-500 text-white px-4 py-2 rounded-md shadow-md">
        {message}
      </div>
    </div>
  );
}

export default Toaster;
