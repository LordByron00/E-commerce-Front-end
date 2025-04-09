import React from "react";

const Login: React.FC = () => {
  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      {/* Login Card */}
      <div className="bg-gray-300 w-[400px] md:w-[450px] p-12 rounded-2xl shadow-lg border-1">
        {/* Title */}
        <h1 className="text-2xl font-bold text-center text-gray-800">Login</h1>
        <p className="text-center text-gray-600 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        {/* Form */}
        <form className="mt-6">
          {/* Username */}
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 pl-4"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full mt-1 px-4 py-2 rounded-full bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"

            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 pl-4"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full mt-1 px-4 py-2 rounded-full bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Forgot Password */}
          <div className="text-right mb-4">
            <a
              href="#"
              className="text-sm text-blue-500 hover:underline"
            >
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-full hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 text-center text-gray-500">-- Or Sign in with --</div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4">
          <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
          <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
          <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
          <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
        </div>

        {/* Signup Link */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?{" "}
          <a
            href="#"
            className="text-blue-500 hover:underline"
          >
            SIGNUP
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;