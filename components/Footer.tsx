import { useState } from 'react'; 
import emailjs from 'emailjs-com'; 

export default function Footer() {
  const [fromName, setFromName] = useState(''); 
  const [toName] = useState('Panna Bali'); 
  const [message, setMessage] = useState(''); 
  const [statusMessage, setStatusMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs.send('service_ut9eusk', 'template_06zcrji', {
      from_name: fromName, 
      to_name: toName, 
      message: message,
    }, 'xn7eOu8wBoz7EU0Cf')
    .then((response) => {
      console.log('Email sent successfully!', response.status, response.text);
      setStatusMessage('Your message has been successfully sent, thank you!');
      setShowAlert(true);
    })
    .catch((err) => {
      console.error('Failed to send email. Error: ', err);
      setStatusMessage('Your message failed to send, try again!');
      setShowAlert(true);
    });
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <footer id="footer" className="w-full bg-dark-blue">
      <div className="container mx-auto px-4 py-20">
        <div className="flex gap-20">
          <div className="w-1/2 text-white">
            <div className="inline-block">
              <h6 className="text-xl md:text-4xl font-bold text-white uppercase tracking-wider">
                Office
              </h6>
              <div className="h-1 bg-white mt-4"></div>
            </div>
            <div className="space-y-6 pt-5">
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">Address</h3>
                <p className="text-gray-300 text-sm md:text-lg">
                  Jl. White Diamond V Jelupang, Serpong Utara<br />
                  South Tangerang, Banten<br />
                  Indonesia
                </p>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">Phone</h3>
                <p className="text-gray-300 text-sm md:text-lg">+62 818 708 211</p>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-300 text-sm md:text-lg">panna.bali@potensi.net</p>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">Marketplace</h3>
                <a 
                  href="https://www.tokopedia.com/rdlabs" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 text-sm md:text-lg hover:text-white transition-colors"
                >
                  Tokopedia
                </a>
              </div>
            </div>
          </div>

          <div className="w-1/2">
            <div className="mb-6">
              <div className="inline-block">
                <h6 className="text-xl md:text-4xl font-bold text-white uppercase tracking-wider">
                  Send Message!
                </h6>
                <div className="h-1 bg-white mt-4"></div>
              </div>
            </div>
            <form className="space-y-4" onSubmit={sendEmail}>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-2 py-1 md:px-4 md:py-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-white"
                value={fromName}
                onChange={(e) => setFromName(e.target.value)}
              />
              <textarea
                placeholder="Your message"
                rows={4}
                className="w-full px-2 py-1 md:px-4 md:py-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-white"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <button
                type="submit"
                className="bg-white text-gray-800 px-4 py-1 text-sm md:px-8 md:py-3 md:text-lg rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                Send Message
              </button>
            </form>
            {showAlert && (
              <div className="fixed top-0 left-0 right-0 flex justify-center items-center h-screen bg-black bg-opacity-50">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <p className="text-black">{statusMessage}</p>
                  <div className="flex justify-end">
                    <button 
                      onClick={handleCloseAlert} 
                      className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                    >
                      OK
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="w-full bg-white">
        <div className="container mx-auto px-2 pb-4 pt-2 md:px-4 md:py-2">
          <div className="flex justify-between items-center text-xs md:text-sm text-black">
            <div className="flex gap-4">
              <a href="#" className="hover:text-gray-900 transition-colors">Sitemap</a>
              <span>|</span>
              <a href="#" className="hover:text-gray-900 transition-colors">Terms & Conditions</a>
              <span>|</span>
              <a href="#" className="hover:text-gray-900 transition-colors">FAQ</a>
            </div>
            <div className='text-xs md:text-sm'>
              © 2024 RED DIAMONDS LAB
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
