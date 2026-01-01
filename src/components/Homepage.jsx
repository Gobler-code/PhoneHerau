import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Homepage() {
  const [budget, setBudget] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (budget) {
      const budgetNum = parseInt(budget);
      let range = '';
      
      if (budgetNum >= 20000 && budgetNum < 30000) {
        range = '20k-30k';
      } else if (budgetNum >= 30000 && budgetNum < 40000) {
        range = '30k-40k';
      } else if (budgetNum >= 40000 && budgetNum < 50000) {
        range = '40k-50k';
      } else if (budgetNum >= 50000 && budgetNum < 70000) {
        range = '50k-70k';
      } else if (budgetNum >= 70000) {
        range = '70k-100k';
      } else {
        alert('Please enter a budget above NPR 20,000');
        return;
      }
      
      navigate(`/results/${range}`);
    }
  };

  const handleQuickBudget = (range) => {
    navigate(`/results/${range}`);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header - Facebook Blue */}
      <nav className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1877F2]">
            📱 PhoneHerau
          </h1>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="text-center max-w-4xl mx-auto">
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            What's Your <span className="text-[#1877F2]">Budget</span>?
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 sm:mb-12 lg:mb-16 px-4">
            We'll find you the best phones - including hidden flagship gems
          </p>

          {/* Search Bar - Large and Beautiful */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <div className="relative max-w-3xl mx-auto group">
              <div className="absolute -inset-1 bg-[#1877F2] rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-gray-100">
                <div className="flex items-center">
                  <span className="pl-4 sm:pl-6 lg:pl-8 text-gray-500 text-lg sm:text-xl lg:text-2xl font-semibold">NPR</span>
                  <input
                    type="number"
                    placeholder="Enter your budget (e.g., 35000)"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="flex-1 px-3 sm:px-4 lg:px-6 py-4 sm:py-5 lg:py-7 text-base sm:text-lg lg:text-2xl text-gray-900 placeholder:text-gray-400 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                  <button
                    onClick={handleSearch}
                    className="m-2 sm:m-3 px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-5 bg-[#1877F2] hover:bg-[#166FE5] text-white text-base sm:text-lg lg:text-xl font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 whitespace-nowrap"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Budget Buttons */}
          <div className="space-y-4 sm:space-y-5 mb-12 sm:mb-16 lg:mb-20">
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 font-semibold">Or choose a range:</p>
            <div className="flex flex-wrap gap-2 sm:gap-3 lg:gap-4 justify-center">
              {['20k - 30k', '30k - 40k', '40k - 50k', '50k - 70k', '70k - 100k+'].map((range, index) => {
                const rangeMap = ['20k-30k', '30k-40k', '40k-50k', '50k-70k', '70k-100k'];
                return (
                  <button
                    key={index}
                    onClick={() => handleQuickBudget(rangeMap[index])}
                    className="px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 text-sm sm:text-base lg:text-lg bg-white text-[#1877F2] font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-[#1877F2] hover:bg-[#1877F2] hover:text-white"
                  >
                    {range}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 text-left">
            {/* Card 1 */}
            <div className="group bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-2 border-gray-100 hover:border-[#1877F2]">
              <div className="text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-4 group-hover:scale-105 transition-transform duration-300">🏆</div>
              <h3 className="font-bold text-base sm:text-lg lg:text-xl mb-2 text-gray-900">Expert Picks</h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">
                Hand-picked best value phones for every budget
              </p>
            </div>

            {/* Card 2 */}
            <div className="group bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-2 border-gray-100 hover:border-[#1877F2]">
              <div className="text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-4 group-hover:scale-105 transition-transform duration-300">💎</div>
              <h3 className="font-bold text-base sm:text-lg lg:text-xl mb-2 text-gray-900">Hidden Gems</h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">
                Older flagships that beat new mid-rangers
              </p>
            </div>

            {/* Card 3 */}
            <div className="group bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-2 border-gray-100 hover:border-[#1877F2] sm:col-span-2 lg:col-span-1">
              <div className="text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-4 group-hover:scale-105 transition-transform duration-300">📊</div>
              <h3 className="font-bold text-base sm:text-lg lg:text-xl mb-2 text-gray-900">Smart Comparisons</h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">
                Real explanations, not just spec dumps
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer - Facebook Blue */}
      <footer className="bg-[#1877F2] text-white mt-12 sm:mt-16 lg:mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
            {/* About */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">PhoneHerau</h3>
              <p className="text-xs sm:text-sm lg:text-base text-blue-100 leading-relaxed">
                Nepal's most trusted phone price comparison platform. Find the best deals and make smart purchases.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-2 sm:space-y-3">
              <h4 className="text-base sm:text-lg lg:text-xl font-semibold mb-3 sm:mb-4">Quick Links</h4>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm lg:text-base text-blue-100">
                <li><a href="#" className="hover:text-white transition-colors duration-200">Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">All Phones</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Compare</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">About Us</a></li>
              </ul>
            </div>

            
            {/* Contact */}
            <div className="space-y-2 sm:space-y-3">
              <h4 className="text-base sm:text-lg lg:text-xl font-semibold mb-3 sm:mb-4">Contact</h4>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm lg:text-base text-blue-100">
                <li>📧 info@phoneherau.com</li>
                <li>📱 +977 98XXXXXXXX</li>
                <li>📍 Kathmandu, Nepal</li>
              </ul>
              <div className="flex gap-3 sm:gap-4 pt-3 sm:pt-4">
                <a href="#" className="text-xl sm:text-2xl hover:scale-110 transition-transform duration-200">📘</a>
                <a href="#" className="text-xl sm:text-2xl hover:scale-110 transition-transform duration-200">📷</a>
                <a href="#" className="text-xl sm:text-2xl hover:scale-110 transition-transform duration-200">🐦</a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-blue-400 mt-6 sm:mt-8 lg:mt-12 pt-6 sm:pt-8 text-center">
            <p className="text-xs sm:text-sm lg:text-base text-blue-100">
              © 2025 PhoneHerau. All rights reserved. Made in Nepal
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Homepage;