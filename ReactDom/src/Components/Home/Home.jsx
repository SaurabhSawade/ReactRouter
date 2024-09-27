import React from "react";
import { Link } from "react-router-dom";
import Login from "../Login/Login";

function Home() {
    return (
      <div className="min-h-screen bg-gray-100">
        {/* Hero Section */}
        <div className="bg-blue-600 text-white py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
            <p className="text-lg mb-8">We provide the best services to help you grow your business.</p>
            <Link to="Login">
            <button className="bg-white text-blue-600 font-bold py-2 px-4 rounded-lg hover:bg-gray-100 transition duration-300">
              Get Started
            </button>
            </Link>
          </div>
        </div>
  
        {/* Features Section */}
        <div className="container mx-auto py-16">
          <h2 className="text-3xl font-bold text-center mb-10">Our Features</h2>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Feature One</h3>
              <p className="text-gray-600">
                Description of feature one. We offer amazing tools to help you succeed.
              </p>
            </div>
  
            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Feature Two</h3>
              <p className="text-gray-600">
                Description of feature two. Our platform makes everything easier.
              </p>
            </div>
  
            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Feature Three</h3>
              <p className="text-gray-600">
                Description of feature three. We provide top-notch customer support.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;