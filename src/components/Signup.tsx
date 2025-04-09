import React from "react";

const Signup: React.FC = () => {
  return (
    <div className="bg-gray-200 min-h-screen flex flex-col items-center justify-center">
      {/* Signup Card */}
      <div className="bg-gray-100 w-[400px] md:w-[450px] p-12 rounded-2xl shadow-lg">
        {/* Title */}
        <h1 className="text-2xl font-bold text-center text-gray-800">Register</h1>

        {/* Form */}
        <form className="mt-6">
          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 pl-3" // Added padding-left
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full mt-1 px-4 py-2 rounded-full bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
            />
          </div>

          {/* Username */}
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 pl-3" // Added padding-left
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full mt-1 px-4 py-2 rounded-full bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your username"
            />
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 pl-3" // Added padding-left
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full mt-1 px-4 py-2 rounded-full bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 pl-3" // Added padding-left
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full mt-1 px-4 py-2 rounded-full bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-4">
            <label
              htmlFor="confirm-password"
              className="block text-sm font-medium text-gray-700 pl-3" // Added padding-left
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              className="w-full mt-1 px-4 py-2 rounded-full bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Confirm your password"
            />
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full bg-gray-500 text-white py-2 rounded-full hover:bg-gray-600 transition"
          >
            Signup
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 text-center text-gray-500">-- Or Sign up with --</div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4">
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Signup;