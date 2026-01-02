function Footer(){
    return(
        <>
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
        </>
    )
}
export default Footer;