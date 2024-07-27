import React from 'react';
import videoBg from '../assets/video.mp4';

const Home = ({ theme }) => {
  return (
    <div className={`relative w-full h-screen overflow-hidden ${theme}`}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Dark overlay */}
      <video
        src={videoBg}
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="relative z-10 flex items-center justify-center h-full text-white">
        {/* Add your content here if needed */}
      </div>
    </div>
  );
};

export default Home;
