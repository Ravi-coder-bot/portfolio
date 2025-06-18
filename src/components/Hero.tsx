'use client';

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-black text-white text-center px-4 py-2 bg-gradient-to-bl from-[#0f1a2f] to-transparent ">
      <p className="text-blue-400 font-medium mb-2">Design in <span className="underline underline-offset-4">Details</span></p>
      
      <h1 className="text-6xl sm:text-8xl font-extrabold tracking-tight relative">
        PORTFOLIO
        <span className="absolute left-1/2 transform -translate-x-1/2 text-[10rem] text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white">
          {/* You can insert a 3D logo overlay here or use a component */}
        </span>
      </h1>

      <p className="text-yellow-400 mt-4 text-xl font-signature">Ravi</p>
    </section>
  );
};

export default Hero;
