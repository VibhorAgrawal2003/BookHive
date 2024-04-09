import React from 'react';

function Toaster() {
  return (
    <div className="fixed bottom-0 right-0 p-4">
      <div className="bg-green-500 text-white px-4 py-2 rounded-md shadow-md">
        This is a toaster notification.
      </div>
    </div>
  );
}

export default Toaster;
