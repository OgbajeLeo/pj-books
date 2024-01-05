import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  }

  return (
  //   <header className="bg-gray-800 p-4">
  //   <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
  //     <div className="text-white text-3xl font-extrabold">
  //       <Link to="/">PJ BOOKS</Link>
  //     </div>
  //     <div className="sm:hidden">
  //       {/* Hamburger menu button for small screens */}
  //       <button
  //         onClick={toggleMenu}
  //         className="text-white focus:outline-none text-right"
  //       >
  //         <svg
  //           className="w-6 h-6"
  //           fill="none"
  //           stroke="currentColor"
  //           viewBox="0 0 24 24"
  //           xmlns="http://www.w3.org/2000/svg"
  //         >
  //           <path
  //             strokeLinecap="round"
  //             strokeLinejoin="round"
  //             strokeWidth="2"
  //             d="M4 6h16M4 12h16m-7 6h7"
  //           ></path>
  //         </svg>
  //       </button>
  //     </div>
  //     <nav className={`sm:flex ${isMenuOpen ? 'block' : 'hidden'}`}>
  //       <ul className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
  //         <li><Link to="/" className="text-white">Home</Link></li>
  //         <li><Link to="/books" className="text-white">Books</Link></li>
  //         <li><Link to="/categories" className="text-white">Categories</Link></li>
  //         {/* Add more navigation links as needed */}
  //       </ul>
  //     </nav>
  //     <div className="flex items-center text-black">
  //       <input
  //         type="text"
  //         placeholder="Search Books..."
  //         className="p-2 border border-gray-600 rounded"
  //       />
  //     </div>
  //   </div>
  // </header>
<>
  <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a to="#" className="text-2xl font-bold">PJ Books.</a>

        {/* Hamburger menu for mobile screens */}
        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* Navigation links for larger screens */}
        <div className="hidden lg:flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search books"
            className="w-[100%] p-2 border border-gray-600 rounded focus:outline-none focus:border-blue-500"
          />
          
          <button className="bg-brown1 hover:bg-brown2 px-4 py-2 rounded">
            <Link to='/login' className='text-white'>Login</Link>
          </button>
        </div>
      </div>

      {/* Responsive navigation menu for mobile screens */}
      <div
        id="mobile-menu"
        className={`lg:hidden ${mobileMenuOpen ? '' : 'hidden'}`}
      >
        {/* Add your mobile navigation links here */}
        <div className="flex flex-col items-center">
        <div class="search-input shadow">
            <form class="form-search" id="form-search">
              <input
                type="text"
                name="book-search"
                className="p-2 border border-gray-600 rounded focus:outline-none focus:border-blue-500"
                placeholder="Search"
                id="search"
              />
            </form>
            
          </div>
          <Link to="#" className="text-white py-2">Home</Link>
          <Link to="#" className="text-white py-2">Books</Link>
          <Link to="#" className="text-white py-2">About</Link>
          <button className="bg-brown1 hover:bg-brown2 px-4 py-2 rounded">
            <Link to='/login' className='text-white'>Login</Link>
          </button>
          
        </div>
      </div>
    </nav>
    </>
  )
}

export default Header
