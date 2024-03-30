import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Facilities = () => {
  return (
    <>
    <Navbar/>
       <div className="container mx-auto px-4 py-8">
        
        <h1 className="text-3xl font-bold text-center mb-8">Our Gym Facilities</h1>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Facility Card 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="https://plus.unsplash.com/premium_photo-1683121008092-7c4e5c75f2ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FyZGlvJTIwbWFjaGluZXN8ZW58MHx8MHx8fDA%3D" alt="Facility 1" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">Cardio Area</h2>
              <p className="text-gray-600">State-of-the-art cardio machines to enhance your workout experience.</p>
            </div>
          </div>
  
          {/* Facility Card 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="https://images.unsplash.com/photo-1508215885820-4585e56135c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdlaWdodCUyMGxpZnRpbmd8ZW58MHx8MHx8fDA%3D" alt="Facility 2" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">Weightlifting Zone</h2>
              <p className="text-gray-600">Equipments and free weights for strength training and muscle building.</p>
            </div>
          </div>
  
          {/* Facility Card 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="https://images.unsplash.com/photo-1588286840104-8957b019727f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z3ltJTIwY2xhc3N8ZW58MHx8MHx8fDA%3D" alt="Facility 3" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">Group Exercise Classes</h2>
              <p className="text-gray-600">Variety of group exercise classes including yoga, Zumba, and more.</p>
            </div>
          </div>
        </div>
  
        {/* Additional Content */}
        <div className="mt-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Join Us Today!</h2>
          <p className="text-gray-700">
            Whether you're looking to build strength, improve cardio fitness, or join group classes, our gym facilities
            cater to all your fitness needs. Join us today and start your fitness journey!
          </p>
        </div>
      </div>
      <Footer/>
    </>
 
  );
};

export default Facilities;
