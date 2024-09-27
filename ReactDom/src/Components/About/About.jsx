import React from "react"; 
function About() {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">About Us</h1>
          
          <p className="text-gray-600 text-lg mb-6 text-center">
            Welcome to our platform! We are dedicated to providing high-quality services to our customers. Our team is passionate about delivering the best experience and continually improving our offerings.
          </p>
  
          <div className="flex justify-center mb-6">
            <img
              src="./images/nature.jpg"
              alt="About Us"
              className="rounded-lg shadow-md"
            />
          </div>
  
          <p className="text-gray-600 text-lg">
            We have been in business for over a decade, working with clients from various industries. Our mission is to create solutions that meet your unique needs and help you achieve your goals. With a dedicated team and cutting-edge technology, we ensure the highest level of customer satisfaction.
          </p>
        </div>
      </div>
    );
  }
  
  export default About;