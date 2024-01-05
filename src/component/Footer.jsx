import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div>
            <p className="font-bold">PJ BOOKS</p>
            <p>&copy; 2024 All rights reserved.</p>
          </div>
          <div className="flex space-x-4 my-4 md:my-0">
            <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
            <a href="/terms-of-service" className="hover:underline">Terms of Service</a>
            <a href="/contact" className="hover:underline">Contact</a>
          </div>
          <div className="flex space-x-4">
            {/* Add your social media icons and links */}
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            {/* Add more social media links as needed */}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
