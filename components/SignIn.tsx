import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookF,
  faGoogle,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons'

const SignIn = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Side - Login Form */}
      <div className="flex-1 bg-white p-10 md:p-20">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mt-4">
              Login to Your Account
            </h2>
            <p className="text-gray-500 mt-2">Login using social networks</p>
            <div className="flex justify-center space-x-3 mt-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full shadow-lg transition">
                <FontAwesomeIcon icon={faFacebookF} className="w-5 h-5" />
              </button>
              <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full shadow-lg transition">
                <FontAwesomeIcon icon={faGoogle} className="w-5 h-5" />
              </button>
              <button className="bg-blue-800 hover:bg-blue-900 text-white py-2 px-4 rounded-full shadow-lg transition">
                <FontAwesomeIcon icon={faLinkedinIn} className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="text-center text-gray-500 my-6">OR</div>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <span className="absolute right-3 top-3 cursor-pointer">
                {/* Eye icon */} 👁️
              </span>
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg shadow-lg transition"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>

      {/* Right Side - Sign Up */}
      <div className="flex-1 bg-gradient-to-r from-green-400 to-blue-500 p-10 md:p-20 text-white flex flex-col justify-center">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">New Here?</h2>
          <p className="mt-4 text-base md:text-lg">
            Sign up and discover a great amount of new opportunities!
          </p>
          <Link href="/signup">
            <a className="inline-block bg-white text-green-500 py-3 px-6 rounded-lg mt-6 shadow-lg hover:bg-gray-100 transition">
              Sign Up
            </a>
          </Link>
        </div>
      </div>

      {/* Floating Facebook Button */}
      <button className="fixed bottom-5 right-5 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full shadow-lg flex items-center space-x-2 transition">
        <FontAwesomeIcon icon={faFacebookF} className="w-5 h-5" />
        <span>Follow Facebook Page</span>
      </button>
    </div>
  )
}

export default SignIn
