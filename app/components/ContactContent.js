import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function ContactContent() {
  return (
    <div className="bg-peach-500 p-8 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      
      {/* Contact Form */}
      <form className="mb-8">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your name" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your email" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Your message"></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Send
          </button>
        </div>
      </form>

      {/* Contact Details */}
      <div className="text-gray-700 mb-8">
        <p>Email: leannemgoldsmith@gmail.com</p>
        <p>Mobile: 0749655196</p>
      </div>

      {/* Social Links */}
      <div className="flex space-x-4">
        <a href="https://github.com/leannegoldsmith" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
          <FaGithub size={24} />
        </a>
        <a href="https://linkedin.com/in/leannegoldsmith" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
          <FaLinkedin size={24} />
        </a>
      </div>
    </div>
  );
}
