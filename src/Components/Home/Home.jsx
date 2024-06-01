import React from 'react';

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/4226123/pexels-photo-4226123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          opacity: 0.75, 
        }}
      ></div>
      <div className="relative max-w-4xl text-center text-black">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">Brain Tumour Detection System</h1>
        <p className="text-lg md:text-xl lg:text-3xl font-bold mb-8">Using advanced image processing and CNN model</p>
      </div>
    </div>
  );
}

export default Home;
