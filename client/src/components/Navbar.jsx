import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ updateCategory, updateQuery, searchQuery }) => {

    const [showCategories, setShowCategories] = useState(false);
    
    const enterCategories = () => {
      setShowCategories(true);
    };
    
    const exitCategories = () => {
      setShowCategories(false);
    };

    return (
        <nav className="w-full fixed z-40 bg-gray-900 text-white p-4 flex justify-between">
            <div className="w-full container mx-auto flex justify-between items-center">
                <div className="w-auto">
                    <a href="#" className="text-2xl font-bold navbar-link">BookHub</a>
                </div>
                <div className="w-2/3 flex items-center justify-between">
                    <div className='flex flex-row gap-x-4'>
                        <div className="mr-6 hover:underline navbar-link"><Link to="/">Home</Link></div>
                        <div className="mr-6 hover:underline navbar-link"><Link to="/form">Submit Book</Link></div>
                        <div>
                            <button id="categoriesBtn" onMouseEnter={enterCategories} className="mr-6 hover:underline navbar-link">Categories</button>
                            {showCategories && <ul onMouseLeave={exitCategories}  className="absolute bg-gray-800 text-white rounded mt-2 w-40" id="categoriesList">
                                <li><a onClick={() => updateCategory("Fiction")}  href="#" className="block px-4 py-2 hover:bg-gray-700">Fiction</a></li>
                                <li><a onClick={() => updateCategory("Non-Fiction")} href="#" className="block px-4 py-2 hover:bg-gray-700">Non-Fiction</a></li>
                                <li><a onClick={() => updateCategory("Educational")} href="#" className="block px-4 py-2 hover:bg-gray-700">Educational</a></li>
                            </ul>}
                        </div>
                    </div>
                    <div className="w-1/2 flex items-center search-container">
                        <input onChange={(e) => updateQuery(e.target.value)} type="text" placeholder="Search books..." className="w-full rounded border border-gray-700 mr-2 p-2 text-black" />
                        <button onClick={() => searchQuery()} className="bg-blue-500 text-white px-4 py-2 rounded">Search</button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
