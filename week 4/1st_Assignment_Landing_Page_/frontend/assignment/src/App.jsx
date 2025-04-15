import React, { useState } from 'react';
import { FaBars, FaTimes, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const products = [
  { id: 1, name: 'Sneakers', price: '$49.99', image: 'https://backend.orbitvu.com/sites/default/files/image/sport-shoe-white-background.jpeg' },
  { id: 2, name: 'Headphones', price: '$19.99', image: 'https://burst.shopifycdn.com/photos/wireless-headphones.jpg?width=1000&format=pjpg&exif=0&iptc=0' },
  { id: 3, name: 'Watch', price: '$39.99', image: 'https://previews.123rf.com/images/vitalytyagunov/vitalytyagunov1510/vitalytyagunov151000491/46332373-men-s-watches-on-a-white-background.jpg' },
  { id: 4, name: 'T-Shirt', price: '$10.99', image: 'https://veirdo.in/cdn/shop/files/54_1.jpg?v=1723446311' },
  { id: 5, name: 'Jeans', price: '$15.99', image: 'https://d118ps6mg0w7om.cloudfront.net/media/catalog/product/1/_/fit-in/1000x1333/1_mft-29888-u-167-dark-indigo-blue_2.jpg' },
  { id: 6, name: 'Gaming Keyboard', price: '$40.99', image: 'https://m.media-amazon.com/images/I/616fdRSET7L.jpg' },
  { id: 7, name: 'Backpack', price: '$26.99', image: 'https://arcticfox.com/cdn/shop/products/FRONT.png?v=1601559856' },
  { id: 8, name: 'Shirt', price: '$32.99', image: 'https://shop.mango.com/assets/rcs/pics/static/T8/fotos/S/87082889_50.jpg?imwidth=2048&imdensity=1&ts=1730387015350' },
];

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen font-sans scroll-smooth">
      {/* Navbar */}
      <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center relative">
        <div className="text-2xl font-bold text-gray-800">MyShop</div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800 focus:outline-none">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Nav Links */}
        <ul className={`absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent md:flex md:items-center gap-6 px-6 md:px-0 transition-all duration-300 ease-in-out ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <li className="py-2 md:py-0"><a href="/" className="text-gray-700 hover:text-blue-500">Home</a></li>
          <li className="py-2 md:py-0"><a href="#products" className="text-gray-700 hover:text-blue-500">Products</a></li>
          <li className="py-2 md:py-0"><a href="#contact" className="text-gray-700 hover:text-blue-500">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="bg-blue-50 py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 leading-tight mb-6">
            Discover Quality & Style at <span className="text-blue-600">MyShop</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Explore a curated collection of premium products designed to meet your needs and elevate your lifestyle.
          </p>
          <a
            href="#products"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-medium text-sm sm:text-base hover:bg-blue-700 transition"
          >
            Shop Now
          </a>
        </div>
      </section>


      {/* Product Section */}
      <section id="products" className="mx-10 py-12 px-4 bg-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <div key={product.id} className="border rounded-xl p-4 shadow hover:shadow-lg transition">
            <img src={product.image} alt={product.name} className="w-full h-70 object-cover rounded mb-4" />
            <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
            <p className="text-blue-600 font-bold">{product.price}</p>
          </div>
        ))}
      </section>
      

      {/* Footer */}
      <footer id='contact' className="bg-gray-900 text-white py-10 px-6 mt-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">

          {/* About */}
          <div>
            <h4 className="text-lg font-semibold mb-3">About MyShop</h4>
            <p className="text-gray-400">
              MyShop brings you the best quality products at unbeatable prices. Shop with confidence and ease.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-400">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400">Products</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
            <p className="text-gray-400">Email: support@myshop.com</p>
            <p className="text-gray-400">Phone: +1 (234) 567-890</p>
            <p className="text-gray-400">Location: New York, USA</p>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
            <div className="flex gap-4 mt-2">
              <a href="#" className="text-white hover:text-blue-400"><FaFacebook size={20} /></a>
              <a href="#" className="text-white hover:text-blue-400"><FaTwitter size={20} /></a>
              <a href="#" className="text-white hover:text-blue-400"><FaInstagram size={20} /></a>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center text-gray-500 text-xs">
          &copy; 2025 MyShop. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
