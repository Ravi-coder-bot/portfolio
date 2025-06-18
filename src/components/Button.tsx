import React from 'react';

const Button = () => {
  return (
    <div className="relative w-[120px] h-[40px] group">
      <button className="relative z-10 w-full h-full flex items-center justify-center text-white bg-black rounded-lg px-4 py-2 border-none cursor-pointer">
        Button
      </button>

      {/* ::before */}
      <div className="absolute -left-1 -top-[4px] w-[128px] h-[48px] rounded-[10px] bg-gradient-to-tr from-[#e81cff] to-[#40c9ff] transition-transform duration-[600ms] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] z-0 group-hover:rotate-[-180deg] group-active:scale-75"></div>

      {/* ::after */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#fc00ff] to-[#00dbde] transform scale-95 blur-[20px] z-[-1] group-hover:blur-[30px]"></div>
    </div>
  );
};

export default Button;
  