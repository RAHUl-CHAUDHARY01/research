import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Modal from 'react-modal';
import { FiX, FiSend, FiBook, FiAward, FiCheckCircle, FiUser, FiPhone, FiMail, FiFileText, FiArrowRight } from 'react-icons/fi';

// Set modal root for accessibility
Modal.setAppElement('#root');

const ResearchPublicationPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    researchArea: '',
    query: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    emailjs.send(
      'service_pabogee',
      'template_z5vds4e',
      formData,
      'pHF5mGVBTEu6WvxxW'
    )
    .then(() => {
      setIsSuccess(true);
    })
    .catch(() => {
      alert('Failed to send message. Please try again.');
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
    setIsSuccess(false);
    setFormData({
      name: '',
      mobile: '',
      email: '',
      researchArea: '',
      query: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="relative w-full min-h-screen bg-gray-900 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-gray-900/70" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-28">
        {/* Header/Navigation would go here */}
        
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-300">
              Publish Your Research Paper
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8">
            Get expert guidance to publish in top Conference, Scopus, SCI, and Indexed Journals
          </p>
          <button 
            onClick={openModal}
            className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl group shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-r from-blue-700 to-purple-700 group-hover:opacity-100"></span>
            <span className="relative flex items-center">
              <FiSend className="mr-2" /> Get Publication Support
            </span>
          </button>
        </div>

        {/* Value Propositions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 md:mb-24 max-w-6xl mx-auto">
          {[
            { 
              icon: <FiBook className="w-8 h-8 mb-3 mx-auto text-blue-400" />, 
              title: "Comprehensive Journal Network", 
              text: "Access to 1000+ indexed journals and conferences across all disciplines" 
            },
            { 
              icon: <FiAward className="w-8 h-8 mb-3 mx-auto text-purple-400" />, 
              title: "High Acceptance Rates", 
              text: "90%+ acceptance rate for properly prepared papers with our guidance" 
            },
            { 
              icon: <FiCheckCircle className="w-8 h-8 mb-3 mx-auto text-green-400" />, 
              title: "End-to-End Support", 
              text: "From paper preparation to final publication and indexing" 
            }
          ].map((item, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-blue-400/30 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="text-center">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white text-center">{item.title}</h3>
              <p className="text-blue-100 text-center">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Testimonials/Process Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-4xl mx-auto border border-white/10 mb-16 md:mb-24">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">Our Publication Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { step: "1", title: "Consultation", desc: "Initial research evaluation" },
              { step: "2", title: "Targeting", desc: "Journal/conference selection" },
              { step: "3", title: "Preparation", desc: "Paper refinement" },
              { step: "4", title: "Submission", desc: "Final publication" }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold mb-2">
                  {item.step}
                </div>
                <h4 className="font-medium text-white">{item.title}</h4>
                <p className="text-sm text-blue-200">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Secondary CTA */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to publish your research?</h3>
          <button 
            onClick={openModal}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-300"
          >
            Get Started Now <FiArrowRight className="ml-2" />
          </button>
        </div>
      </div>

      {/* Publication Support Modal */}
      <Modal
  isOpen={isOpen}
  onRequestClose={closeModal}
  className="modal"
  overlayClassName="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-start justify-center p-4 overflow-y-auto"
  closeTimeoutMS={300}
  style={{
    content: {
      position: 'relative',
      top: 'auto',
      left: 'auto',
      right: 'auto',
      bottom: 'auto',
      margin: '1rem auto',
      padding: '0',
      border: 'none',
      background: 'transparent',
      overflow: 'visible',
    }
  }}
>
  <div className="relative bg-white rounded-xl shadow-2xl max-w-2xl w-full mx-auto my-8 animate-scale-in">
    {isSuccess ? (
      <div className="p-6 md:p-8 text-center">
        <div className="mx-auto flex items-center justify-center h-16 w-16 md:h-20 md:w-20 rounded-full bg-green-50 mb-4 md:mb-6">
          <FiCheckCircle className="h-8 w-8 md:h-10 md:w-10 text-green-600" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Submission Received!</h2>
        <p className="text-gray-600 mb-4 md:mb-6 max-w-md mx-auto">
          Thank you for your interest in our publication services. Our team will review your request and contact you within 24 hours with personalized guidance.
        </p>
        <div className="bg-blue-50 rounded-lg p-3 md:p-4 mb-4 md:mb-6 text-left max-w-md mx-auto">
          <h3 className="font-medium text-blue-800 mb-1 md:mb-2">Next Steps:</h3>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>Initial consultation call within 24 hours</li>
            <li>Personalized journal/conference recommendations</li>
            <li>Paper preparation guidance document</li>
          </ul>
        </div>
        <button
          onClick={closeModal}
          className="px-6 py-2 md:px-8 md:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 font-medium"
        >
          Close Window
        </button>
      </div>
    ) : (
      <div className='relative'>
        <div className="bg-gradient-to-r from-blue-700 to-purple-700 p-4 md:p-6 text-white sticky top-0 z-10 rounded-t-[10px]">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-xl md:text-2xl font-bold">Research Publication Support</h2>
              <p className="text-blue-100 mt-1 md:mt-2 text-sm md:text-base">
                Complete this form to receive personalized guidance from our publication experts
              </p>
            </div>
            <button 
              onClick={closeModal}
              className="p-1 md:p-2 rounded-full hover:bg-white/20 transition"
              aria-label="Close"
            >
              <FiX className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>
        </div>
        
        <div className="p-4 md:p-6 max-h-[calc(100vh-200px)] overflow-y-auto">
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700 flex items-center">
                  <FiUser className="mr-2 text-blue-600" /> Full Name*
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 md:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition mt-1"
                  placeholder="Dr. Jane Doe"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700 flex items-center">
                  <FiPhone className="mr-2 text-blue-600" /> Mobile No.*
                </label>
                <input
                  type="tel"
                  name="mobile"
                  required
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full p-2 md:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition mt-1"
                  placeholder="+1 (123) 456-7890"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700 flex items-center">
                  <FiMail className="mr-2 text-blue-600" /> Email Address*
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 md:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition mt-1"
                  placeholder="researcher@university.edu"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700 flex items-center">
                  <FiBook className="mr-2 text-blue-600" /> Research Area*
                </label>
                <input
                  type="text"
                  name="researchArea"
                  required
                  value={formData.researchArea}
                  onChange={handleChange}
                  className="w-full p-2 md:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition mt-1"
                  placeholder="e.g. Machine Learning, Nanotechnology"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700 flex items-center">
                <FiFileText className="mr-2 text-blue-600" /> Publication Requirements*
              </label>
              <textarea
                name="query"
                required
                value={formData.query}
                onChange={handleChange}
                className="w-full p-2 md:p-3 border border-gray-300 rounded-lg h-32 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none transition mt-1"
                placeholder="Please describe your research, target publications, timeline, and any specific requirements..."
              />
              <p className="text-xs text-gray-500 mt-1">
                Be as specific as possible to help us provide tailored recommendations
              </p>
            </div>

            <div className="pt-2 flex flex-col-reverse sm:flex-row justify-between items-center">
              <div className="text-sm text-gray-500 mt-3 sm:mt-0">
                * Required fields
              </div>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 md:px-5 md:py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition duration-300 font-medium w-full sm:w-auto"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-4 py-2 md:px-6 md:py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 font-medium flex items-center justify-center disabled:opacity-70 min-w-[120px] w-full sm:w-auto"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend className="mr-2" /> Submit Request
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )}
  </div>
</Modal>
    </div>
  );
};

export default ResearchPublicationPage;