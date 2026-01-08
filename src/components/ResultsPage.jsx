import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { phonesData } from '../data/phone';

function ResultsPage() {
  const { range } = useParams();
  const data = phonesData[range];

  // Error handling
  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            404 – Price Range Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            The price range <strong>{range}</strong> does not exist.
          </p>
          <Link 
            to="/" 
            className="text-[#1877F2] font-bold hover:underline"
          >
            ← Go back to Home
          </Link>
        </div>
      </div>
    );
  }
 
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <nav className=" ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
          <Link to="/">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1877F2] hover:opacity-80 transition">
              📱 PhoneHerau
            </h1>
          </Link>
        </div>
      </nav>

      {/* Page Title Section */}
      <div className="max-w-4xl mx-auto px-4 mt-8 sm:mt-12">
        <div className="bg-[#1877F2] px-6 py-6 sm:px-8 sm:py-8 rounded-2xl shadow-lg">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl text-center font-bold text-white mb-2">
            Best Phones for NPR {range}
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-center text-blue-100">
            Find the best phones for your budget
          </p>
        </div>
      </div>

      {/* Content Area */}
      <div className="px-4 sm:px-6 lg:px-8 py-8 mt-8">
        
        {/* Top Pick Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 rounded-2xl shadow-xl border-2 border-gray-100 hover:border-[#1877F2] transition-all duration-300">
          
          {/* Title */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl text-center font-bold mb-8 text-[#1877F2]">
            🏆 Our Top Pick
          </h1>
          
          {/* Two Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            
            {/* LEFT SIDE - Image */}
            <div className="flex items-center justify-center">
              <div className="bg-gray-100 rounded-lg w-full h-64 md:h-80 flex items-center justify-center">
                <span className="text-6xl">📱</span>
              </div>
            </div>
            
            {/* RIGHT SIDE - Info */}
            <div className="flex flex-col">
              
              {/* Phone Name */}
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                {data.topPick.name}
              </h2>
              
              {/* Price */}
              <div className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#1877F2] mb-6">
                NPR {data.topPick.price.toLocaleString()}
              </div>

              {/* Why This is Smart Section */}
              <div className="mb-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  Why This is Smart:
                </h4>
                <ul className="space-y-2 mb-4">
                  {data.topPick.whySmart.map((reason, index) => {
                    return (
                      <li className="flex gap-2 text-sm md:text-base" key={index}>
                        <span className="text-green-600 font-bold flex-shrink-0">✓</span> 
                        <span className="text-gray-700 leading-relaxed">{reason}</span>
                      </li>
                    )
                  })}
                </ul>

                {/* Trade-offs Warning Box */}
                {data.topPick.tradeOffs && (
                  <div className="mb-4">
                    <div className="flex gap-2">
                      <span className="text-orange-600 flex-shrink-0">⚠️</span>
                      <span className="text-sm text-orange-800">
                        <strong>Trade-off:</strong> {data.topPick.tradeOffs}
                      </span>
                    </div>
                  </div>
                )}

                {/* Best For Badge */}
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="bg-[#1877F2] text-white px-3 py-1.5 rounded-full text-sm font-semibold">
                    👤 Best For
                  </span>
                  <span className="text-sm md:text-base text-gray-700 font-medium">
                    {data.topPick.bestFor}
                  </span>
                </div>
              </div>
            
              {/* Specifications Section */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <h4 className="text-base font-bold text-[#1877F2] mb-3 flex items-center gap-2">
                  <span>📊</span> Specifications
                </h4>
                
                <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
                  <span className="text-sm font-semibold text-gray-600">Processor:</span>
                  <span className="text-sm text-gray-900">{data.topPick.specs.processor}</span>
                  
                  <span className="text-sm font-semibold text-gray-600">RAM:</span>
                  <span className="text-sm text-gray-900">{data.topPick.specs.ram}</span>
                  
                  <span className="text-sm font-semibold text-gray-600">Storage:</span>
                  <span className="text-sm text-gray-900">{data.topPick.specs.storage}</span>
                  
                  <span className="text-sm font-semibold text-gray-600">Display:</span>
                  <span className="text-sm text-gray-900">{data.topPick.specs.display}</span>
                  
                  <span className="text-sm font-semibold text-gray-600">Camera:</span>
                  <span className="text-sm text-gray-900">{data.topPick.specs.camera}</span>
                  
                  <span className="text-sm font-semibold text-gray-600">Battery:</span>
                  <span className="text-sm text-gray-900">{data.topPick.specs.battery}</span>
                  
                  <span className="text-sm font-semibold text-gray-600">OS:</span>
                  <span className="text-sm text-gray-900">{data.topPick.specs.os}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-6">
                <button className="flex-1 bg-[#1877F2] hover:bg-[#166FE5] text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg">
                  See Details
                </button>
                <button className="flex-1 border-2 border-[#1877F2] text-[#1877F2] hover:bg-[#1877F2] hover:text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300">
                  Compare
                </button>
              </div>

            </div>
            
          </div>
        </div>

        {/* Featured Section - Placeholder */}
       

        {/* Hidden Gems Section - Placeholder */}
        {/* You'll build this next */}

      </div>
    </div>
  );
}

export default ResultsPage;