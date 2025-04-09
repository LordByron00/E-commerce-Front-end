import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center bg-white p-8 md:p-16">
      {/* Image Placeholder */}
      <div className="w-[525px] h-[412px] bg-gray-300"></div>

      {/* Text Content */}
      <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-8 text-center md:text-left">
        <h2 className="text-gray-700 font-bold text-sm">Company Name</h2>
        <h3 className="text-gray-900 font-bold text-2xl mt-2">About Us</h3>
        <p className="text-gray-600 mt-4 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;