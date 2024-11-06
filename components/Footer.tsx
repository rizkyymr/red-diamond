export default function Footer() {
  return (
    <footer id="footer" className="w-full bg-custom-red1">
        <div className="container mx-auto px-4 py-20">

          <div className="flex gap-20">
            <div className="w-1/2 text-white">
              <div className="inline-block">
              <h6 className="text-4xl font-bold text-white uppercase tracking-wider">
                Office
              </h6>
              <div className="h-1 bg-white mt-4"></div>
          </div>
              <div className="space-y-6 pt-5">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Address</h3>
                  <p className="text-gray-300">
                    Jl. White Diamond V Jelupang, Kec.Serpong Utara<br />
                    Tanggerang Selatan, Banten<br />
                    Indonesia
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Phone</h3>
                  <p className="text-gray-300">+62 818 708 211</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Email</h3>
                  <p className="text-gray-300">example@gmail.com</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Marketplace</h3>
                  <a 
                    href="https://www.tokopedia.com/reddiamondlab" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Tokopedia
                  </a>
                </div>
              </div>
            </div>

            <div className="w-1/2">
              <div className="mb-6">
                <div className="inline-block">
                  <h6 className="text-4xl font-bold text-white uppercase tracking-wider">
                    Send Message!
                  </h6>
                  <div className="h-1 bg-white mt-4"></div>
                </div>
              </div>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-white"
                />
                <textarea
                  placeholder="Your message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-white"
                ></textarea>
                <button
                  type="submit"
                  className="bg-white text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="w-full bg-custom-red3">
          <div className="container mx-auto px-4 py-2">
            <div className="flex justify-between items-center text-sm text-white">
              <div className="flex gap-4">
                <a href="#" className="hover:text-gray-900 transition-colors">Sitemap</a>
                <span>|</span>
                <a href="#" className="hover:text-gray-900 transition-colors">Terms & Conditions</a>
                <span>|</span>
                <a href="#" className="hover:text-gray-900 transition-colors">FAQ</a>
              </div>
              <div>
                © 2024 RED DIAMONDS LAB
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
}
