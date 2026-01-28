import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      {/* Navigation Header */}
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🌾</span>
              <span className="text-2xl font-bold text-green-600">AgriPet</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-gray-700 hover:text-green-600">Home</a>
              <a href="#" className="text-gray-700 hover:text-green-600">Services</a>
              <a href="#" className="text-gray-700 hover:text-green-600">About</a>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                Login
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Sign Up
              </button>
            </div>
            <button className="md:hidden text-gray-700">
              ☰
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            🌾 AgriPet: Smart Healthcare for Your Farm Animals
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            AI-powered disease detection • Vet appointments • Emergency care for pets and livestock
          </p>
          
          {/* Quick Action Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
            <button className="bg-green-600 text-white p-6 rounded-xl hover:bg-green-700 transition-colors">
              <div className="text-3xl mb-2">📸</div>
              <div className="font-semibold">Upload Image</div>
              <div className="text-sm">for Detection</div>
            </button>
            <button className="bg-blue-600 text-white p-6 rounded-xl hover:bg-blue-700 transition-colors">
              <div className="text-3xl mb-2">📅</div>
              <div className="font-semibold">Book</div>
              <div className="text-sm">Appointment</div>
            </button>
            <button className="bg-purple-600 text-white p-6 rounded-xl hover:bg-purple-700 transition-colors">
              <div className="text-3xl mb-2">🎤</div>
              <div className="font-semibold">Voice</div>
              <div className="text-sm">Support</div>
            </button>
            <button className="bg-orange-600 text-white p-6 rounded-xl hover:bg-orange-700 transition-colors">
              <div className="text-3xl mb-2">🆘</div>
              <div className="font-semibold">Emergency</div>
              <div className="text-sm">Help</div>
            </button>
          </div>

          {/* Login Options */}
          <div className="flex justify-center space-x-4">
            <button className="bg-white border-2 border-green-600 text-green-600 px-6 py-3 rounded-lg hover:bg-green-50 transition-colors">
              👤 Login as Farmer
            </button>
            <button className="bg-white border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
              👨‍⚕️ Login as Doctor
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Disease Detection */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">📸</div>
            <h3 className="text-xl font-bold mb-2">Disease Detection</h3>
            <p className="text-gray-600 mb-4">Upload photos for instant AI analysis</p>
            <button className="text-green-600 font-semibold hover:text-green-700">
              Try Now →
            </button>
          </div>

          {/* Appointment Booking */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">📅</div>
            <h3 className="text-xl font-bold mb-2">Book Appointment</h3>
            <p className="text-gray-600 mb-4">Schedule visits with expert veterinarians</p>
            <button className="text-blue-600 font-semibold hover:text-blue-700">
              Book Now →
            </button>
          </div>

          {/* AI Chatbot */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-bold mb-2">AI Chatbot</h3>
            <p className="text-gray-600 mb-4">24/7 intelligent assistance for your queries</p>
            <button className="text-purple-600 font-semibold hover:text-purple-700">
              Chat Now →
            </button>
          </div>

          {/* Voice Support */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">🎤</div>
            <h3 className="text-xl font-bold mb-2">Voice Support</h3>
            <p className="text-gray-600 mb-4">Regional language support for farmers</p>
            <button className="text-orange-600 font-semibold hover:text-orange-700">
              Start Talking →
            </button>
          </div>

          {/* Emergency Care */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">🚑</div>
            <h3 className="text-xl font-bold mb-2">Emergency Care</h3>
            <p className="text-gray-600 mb-4">24/7 emergency veterinary assistance</p>
            <button className="text-red-600 font-semibold hover:text-red-700">
              Get Help →
            </button>
          </div>

          {/* Medicine Tracking */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">💊</div>
            <h3 className="text-xl font-bold mb-2">Medicine Tracking</h3>
            <p className="text-gray-600 mb-4">Never miss medication schedules</p>
            <button className="text-teal-600 font-semibold hover:text-teal-700">
              Track Now →
            </button>
          </div>

          {/* Doctor Consult */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">📞</div>
            <h3 className="text-xl font-bold mb-2">Consult Doctors</h3>
            <p className="text-gray-600 mb-4">Video calls with expert veterinarians</p>
            <button className="text-indigo-600 font-semibold hover:text-indigo-700">
              Consult Now →
            </button>
          </div>

          {/* Find Vets */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">👨‍⚕️</div>
            <h3 className="text-xl font-bold mb-2">Find Vets</h3>
            <p className="text-gray-600 mb-4">Locate veterinarians near you</p>
            <button className="text-cyan-600 font-semibold hover:text-cyan-700">
              Find Now →
            </button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📸</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Upload Photo</h3>
              <p className="text-gray-600">Take or upload a clear photo of your pet's affected area</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤖</span>
              </div>
              <h3 className="text-xl font-bold mb-2">AI Analysis</h3>
              <p className="text-gray-600">Our AI analyzes the image for disease patterns and symptoms</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💡</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Get Results</h3>
              <p className="text-gray-600">Receive instant results with treatment recommendations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Trusted by Farmers</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-green-600 mb-2">10,000+</div>
            <div className="text-gray-600">Animals Treated</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600">Vets Available</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-purple-600 mb-2">99%</div>
            <div className="text-gray-600">Accuracy Rate</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-orange-600 mb-2">15+</div>
            <div className="text-gray-600">Languages Supported</div>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <div className="text-2xl font-bold text-yellow-500">
            ⭐⭐⭐⭐⭐ 4.8/5 Rating from 2,000+ Happy Farmers
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get Started Today</h2>
          <p className="text-xl text-white mb-8">Join 10,000+ farmers protecting their livestock</p>
          
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
              📱 Download App
            </button>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600">
              💻 Web Version
            </button>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600">
              📞 Call Support
            </button>
          </div>
          
          <div className="mt-8 text-white">
            🆘 Need immediate help? Call: <span className="font-bold">1800-AGRI-PET</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-2xl">🌾</span>
                <span className="text-xl font-bold">AgriPet</span>
              </div>
              <p className="text-gray-400">Smart healthcare for your farm animals</p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Disease Detection</a></li>
                <li><a href="#" className="hover:text-white">Booking</a></li>
                <li><a href="#" className="hover:text-white">Emergency</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Help</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 AgriPet | Privacy | Terms | Language: 🌍 EN/हिं/తె/தமி</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
