import React,{useState} from 'react';
import { useParams, Link } from 'react-router-dom';
import { phonesData } from '../data/phone';

function ResultsPage() {
  const { range } = useParams();
  const data = phonesData[range];
  const [modalOpen, setmodalOpen] = useState(false);
  const [selectedPhone, setSelectedPhone]= useState(null);


  const handleViewDetails = (phone) => {
    setSelectedPhone(phone);
    setmodalOpen(true);
  }

  const handleCloseModal = () =>{
    setmodalOpen(false);
    setSelectedPhone(null);
  }

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
    <div className="min-h-screen bg-gray-300">
      {/* Header */}
      <nav className="">
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
      <div className=" px-4 sm:px-6 lg:px-8 py-8 mt-8">
        
        {/* Top Pick Section */}
        <div className="bg-white max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 rounded-2xl shadow-xl border-2 border-gray-100 hover:border-[#1877F2] transition-all duration-300">
          
          {/* Title */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl text-center font-bold mb-8 text-[#1877F2]">
            🏆 Our Top Pick
          </h1>
          
          {/* Two Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            
            {/* LEFT SIDE - Image */}
            <div className="flex items-center justify-center">
              <div className="bg-white rounded-lg w-full h-64 md:h-80 flex items-center justify-center">
                <img 
                     src={data.topPick.image} 
                     alt={data.topPick.name}
                     className="w-full h-full object-contain"
                    />
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
                  <div className="bg-orange-50 border-l-4 border-orange-400 p-3 rounded-r mb-4">
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
                
                <button className="flex-1 border-2 border-[#1877F2] text-[#1877F2] hover:bg-[#1877F2] hover:text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300">
                  Compare
                </button>
              </div>

            </div>
            
          </div>
        </div>

        {/* Featured Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-8 rounded-2xl shadow-xl border-2 border-gray-100 hover:border-[#1877F2] transition-all duration-300">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl text-center font-bold mb-8 text-[#1877F2]">
            📱 Other Solid Choices
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.featured.map((phone) => (
              <div 
                key={phone.id}
                className="bg-white p-6 rounded-xl border-2 border-gray-200 shadow-lg hover:shadow-2xl hover:border-[#1877F2] transition-all duration-300"
              >
                {/* Image */}
                <div className="bg-gray-100 rounded-lg h-48 md:h-56 flex items-center justify-center mb-4">
                  
                    <img 
                     src={phone.image} 
                     alt={phone.name}
                     className="w-full h-full object-contain"
                    />
                  
                </div>

                {/* Phone Name */}
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                  {phone.name}
                </h3>

                {/* Price */}
                <div className="text-xl md:text-2xl font-bold text-[#1877F2] mb-4">
                  NPR {phone.price.toLocaleString()}
                </div>

                {/* Why Smart - First 3 Only */}
                <ul className="space-y-2 mb-4">
                  {phone.whySmart.slice(0, 3).map((reason, i) => (
                    <li className="flex gap-2 text-sm" key={i}>
                      <span className="text-green-600 font-bold flex-shrink-0">✓</span>
                      <span className="text-gray-700 leading-relaxed">{reason}</span>
                    </li>
                  ))}
                </ul>

                {/* Best For Badge */}
                <div className="flex items-center gap-2 mb-4 flex-wrap">
                  <span className="bg-blue-100 text-[#1877F2] px-2 py-1 rounded-full text-xs font-semibold">
                    👤 Best For
                  </span>
                  <span className="text-xs text-gray-700 font-medium">
                    {phone.bestFor}
                  </span>
                </div>

                {/* View Details Button */}
                <button onClick ={()=>handleViewDetails(phone)} className="w-full bg-[#1877F2] hover:bg-[#166FE5] text-white py-2.5 px-4 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg text-sm">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Hidden Gems Section - Placeholder */}
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-8 rounded-2xl shadow-xl border-2 border-gray-100 hover:border-[#1877F2] transition-all duration-300">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl text-center font-bold mb-8 text-[#1877F2]">
           💎Hidden Gems
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.hiddenGems.map((phone) => (
              <div 
                key={phone.id}
                className="bg-white p-6 rounded-xl border-2 border-gray-200 shadow-lg hover:shadow-2xl hover:border-[#1877F2] transition-all duration-300"
              >
                {/* Image */}
                <div className="bg-gray-100 rounded-lg h-48 md:h-56 flex items-center justify-center mb-4">
                  
                     <img 
                      src={phone.image} 
                      alt={phone.name}
                       className="w-full h-full object-contain"/>
                  
                </div>

                {/* Phone Name */}
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                  {phone.name}
                </h3>

                {/* Price */}
                <div className="text-xl md:text-2xl font-bold text-[#1877F2] mb-4">
                  NPR {phone.price.toLocaleString()}
                </div>

                {/* Why Smart - First 3 Only */}
                <ul className="space-y-2 mb-4">
                  {phone.whySmart.map((reason, i) => (
                    <li className="flex gap-2 text-sm" key={i}>
                      <span className="text-green-600 font-bold flex-shrink-0">✓</span>
                      <span className="text-gray-700 leading-relaxed">{reason}</span>
                    </li>
                  ))}
                </ul>

                {/* Best For Badge */}
                <div className="flex items-center gap-2 mb-4 flex-wrap">
                  <span className="bg-blue-100 text-[#1877F2] px-2 py-1 rounded-full text-xs font-semibold">
                    👤 Best For
                  </span>
                  <span className="text-xs text-gray-700 font-medium">
                    {phone.bestFor}
                  </span>
                </div>

                {/* View Details Button */}
                <button onClick ={()=>handleViewDetails(phone)} className="w-full bg-[#1877F2] hover:bg-[#166FE5] text-white py-2.5 px-4 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg text-sm">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>


<div>
  {/* Modal that shows conditionally */}
  {modalOpen && selectedPhone && (
    <div 
      className='flex items-center justify-center fixed inset-0 bg-black/40 backdrop-blur-sm z-50'
      onClick={handleCloseModal} // Close when clicking outside
    >
      <div onClick={(e) => e.stopPropagation()}> {/* Prevent closing when clicking inside */}
        <div className="max-w-2xl max-h-[90vh] overflow-auto m-4 p-6 mx-auto shadow-2xl rounded-2xl bg-white border-2 border-gray-200 hover:border-[#1877F2] relative">
          
          {/* Close Button at Top Right */}
          <button 
            onClick={handleCloseModal}
            className="sticky -top-3 right-4 w-8 h-8 flex items-center justify-center rounded-full  hover:bg-red-500 hover:text-white transition-all duration-300 text-red-500 font-bold text-2xl"
            aria-label="Close"
          >
            ×
          </button>

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
                {selectedPhone.name}
              </h2>
              
              {/* Price */}
              <div className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#1877F2] mb-6">
                NPR {selectedPhone.price.toLocaleString()}
              </div>

              {/* Why This is Smart Section */}
              <div className="mb-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  Why This is Smart:
                </h4>
                <ul className="space-y-2 mb-4">
                  {selectedPhone.whySmart.map((reason, index) => {
                    return (
                      <li className="flex gap-2 text-sm md:text-base" key={index}>
                        <span className="text-green-600 font-bold flex-shrink-0">✓</span> 
                        <span className="text-gray-700 leading-relaxed">{reason}</span>
                      </li>
                    )
                  })}
                </ul>

                {/* Trade-offs Warning Box */}
                {selectedPhone.tradeOffs && (
                  <div className="bg-orange-50 border-l-4 border-orange-400 p-3 rounded-r mb-4">
                    <div className="flex gap-2">
                      <span className="text-orange-600 flex-shrink-0">⚠️</span>
                      <span className="text-sm text-orange-800">
                        <strong>Trade-off:</strong> {selectedPhone.tradeOffs}
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
                    {selectedPhone.bestFor}
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
                  <span className="text-sm text-gray-900">{selectedPhone.specs.processor}</span>
                  
                  <span className="text-sm font-semibold text-gray-600">RAM:</span>
                  <span className="text-sm text-gray-900">{selectedPhone.specs.ram}</span>
                  
                  <span className="text-sm font-semibold text-gray-600">Storage:</span>
                  <span className="text-sm text-gray-900">{selectedPhone.specs.storage}</span>
                  
                  <span className="text-sm font-semibold text-gray-600">Display:</span>
                  <span className="text-sm text-gray-900">{selectedPhone.specs.display}</span>
                  
                  <span className="text-sm font-semibold text-gray-600">Camera:</span>
                  <span className="text-sm text-gray-900">{selectedPhone.specs.camera}</span>
                  
                  <span className="text-sm font-semibold text-gray-600">Battery:</span>
                  <span className="text-sm text-gray-900">{selectedPhone.specs.battery}</span>
                  
                  <span className="text-sm font-semibold text-gray-600">OS:</span>
                  <span className="text-sm text-gray-900">{selectedPhone.specs.os}</span>
                </div>
              </div>
                  {/* Action Buttons */}
             <button onClick={()=>handleCloseModal()} className='bg-red-500  mt-5 md:hidden text-center px-2 py-1 rounded-full text-sm text-white hover:scale-105 transition-all duration-300'>Close</button>
            
            
            </div>
            
          </div>
        </div>  
      </div>
    </div>
  )}
</div>

      </div>
    </div>
  );
}

export default ResultsPage;