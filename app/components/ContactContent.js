import { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function ContactContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_d29ijgj', 
      'template_ahpqodt', 
      formData, 
      'user_OAwOOo2rDsu6jWBOML5qZ'
    )
    .then((response) => {
      setStatusMessage('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => {
        setStatusMessage('');
      }, 5000); // Message will disappear after 5 seconds
    })
    .catch((error) => {
      setStatusMessage('Failed to send the message, please try again.');
      setTimeout(() => {
        setStatusMessage('');
      }, 5000); // Message will disappear after 5 seconds
    });
  };

  return (
    <div className="bg-peach-500 p-8 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      
      {/* Contact Form */}
      <form className="mb-8" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            id="name" 
            type="text" 
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange} 
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            id="email" 
            type="email" 
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange} 
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            id="message" 
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange} 
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button 
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
            type="submit"
          >
            Send
          </button>
        </div>
        {statusMessage && <p className="mt-4 text-white">{statusMessage}</p>}
      </form>

      {/* Contact Details */}
      <div className="text-gray-700 mb-8">
        <p>Email: leannemgoldsmith@gmail.com</p>
        <p>Mobile: 07496355196</p>
      </div>

      {/* Social Links */}
      <div className="flex space-x-4">
        <a href="https://github.com/leannegoldsmith" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-white">
          <FaGithub size={24} />
        </a>
        <a href="https://linkedin.com/in/leannegoldsmith" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-white">
          <FaLinkedin size={24} />
        </a>
      </div>
    </div>
  );
}
