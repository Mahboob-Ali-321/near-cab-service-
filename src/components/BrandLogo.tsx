import React from "react";

interface BrandLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ className = "", size = "md" }) => {
  const sizeMap = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  return (
    <div
      className={`${sizeMap[size]} rounded-xl bg-[#00152f] flex items-center justify-center p-1.5 shadow-sm border border-[#0f2a4a] text-white flex-shrink-0 ${className}`}
      aria-label="Near Cabs Logo"
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Rounded square container */}
        <rect width="100" height="100" rx="22" fill="#00152f" />
        
        {/* Cab rooftop light */}
        <path
          d="M40 22H60V29H40V22Z"
          fill="#febb14"
          rx="2"
        />
        
        {/* Cab Upper Body / Windshield Area */}
        <path
          d="M28 48L37 32H63L72 48H28Z"
          fill="#febb14"
        />
        {/* Windshield window cut */}
        <path
          d="M34 46L40 36H60L66 46H34Z"
          fill="#00152f"
        />
        
        {/* Cab Main Body Lower */}
        <path
          d="M22 48H78C81 48 83 51 82 54L77 68C76 71 73 73 70 73H30C27 73 24 71 23 68L18 54C17 51 19 48 22 48Z"
          fill="#febb14"
        />
        
        {/* Wheels / Headlights */}
        <circle cx="34" cy="74" r="9" fill="#00152f" stroke="#febb14" strokeWidth="5" />
        <circle cx="66" cy="74" r="9" fill="#00152f" stroke="#febb14" strokeWidth="5" />
      </svg>
    </div>
  );
};
