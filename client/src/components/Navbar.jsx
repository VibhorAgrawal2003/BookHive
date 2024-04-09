import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-gray-900 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <a href="#" className="text-2xl font-bold navbar-link">BookHub</a>
                </div>
                <div className="flex items-center space-x-4">
                    <div>
                        <a href="#" className="mr-6 navbar-link">Home</a>
                        <a href="#" className="mr-6 navbar-link">Submit Book</a>
                    </div>
                    <div className="relative">
                        <button id="categoriesBtn" className="mr-6 focus:outline-none navbar-link">Categories</button>
                        <ul className="absolute hidden bg-gray-800 text-white rounded mt-2 w-40" id="categoriesList">
                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-700">Fiction</a></li>
                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-700">Non-Fiction</a></li>
                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-700">Mystery & Thriller</a></li>
                        </ul>
                    </div>
                    <div className="flex items-center search-container">
                        <input type="text" placeholder="Search books..." className="p-2 rounded border border-gray-700 mr-2" />
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">Search</button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
