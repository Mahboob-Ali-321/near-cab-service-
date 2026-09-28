import React from "react";
import { Car, Landmark, Navigation, Train, Mountain, Camera } from "lucide-react";

interface NeutralPlaceholderProps {
  type: "sedan" | "muv" | "temple" | "route" | "station" | "sightseeing" | string;
  title: string;
  subtitle?: string;
  badgeText?: string;
  className?: string;
  imageUrl?: string;
}

export const NeutralPlaceholder: React.FC<NeutralPlaceholderProps> = ({
  type,
  title,
  subtitle,
  badgeText = "Client photo here",
  className = "",
  imageUrl,
}) => {
  // If a valid image URL (not starting with placeholder-) is provided in config, render real image with fallback
  if (imageUrl && !imageUrl.startsWith("placeholder-")) {
    return (
      <div className={`relative overflow-hidden bg-slate-100 ${className}`}>
        <img
          src={imageUrl}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#00152f]/85 via-black/20 to-transparent flex flex-col justify-end p-4">
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-black/40 backdrop-blur-sm text-white w-fit mb-1 border border-white/20">
            {badgeText}
          </span>
          <p className="text-white font-bold text-sm md:text-base leading-tight drop-shadow-sm">
            {title}
          </p>
          {subtitle && (
            <p className="text-slate-200 text-xs mt-0.5 drop-shadow-sm">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    );
  }

  // Renders a high-quality neutral placeholder labeled "Client photo here"
  const getIcon = () => {
    switch (type) {
      case "muv":
      case "placeholder-muv":
        return <Car className="w-12 h-12 text-[#febb14]" />;
      case "sedan":
      case "placeholder-sedan":
        return <Car className="w-12 h-12 text-[#0f2a4a]" />;
      case "temple":
      case "placeholder-temple":
        return <Landmark className="w-12 h-12 text-[#7b5800]" />;
      case "station":
      case "placeholder-station":
        return <Train className="w-12 h-12 text-[#00152f]" />;
      case "sightseeing":
      case "placeholder-sightseeing":
        return <Mountain className="w-12 h-12 text-[#00a74c]" />;
      case "route":
      case "placeholder-route":
      default:
        return <Navigation className="w-12 h-12 text-[#0f2a4a]" />;
    }
  };

  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 flex flex-col items-center justify-center p-6 text-center shadow-inner group select-none ${className}`}
    >
      {/* Decorative background road dash accent */}
      <div className="absolute inset-0 opacity-10 pointer-events-none flex justify-center items-center">
        <div className="w-full border-t-2 border-dashed border-[#00152f]"></div>
      </div>

      {/* Top Tag: "Client photo here" */}
      <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full border border-slate-300 shadow-xs text-xs font-semibold text-slate-700">
        <Camera className="w-3.5 h-3.5 text-amber-600" />
        <span>{badgeText}</span>
      </div>

      {/* Center Graphic */}
      <div className="w-20 h-20 rounded-2xl bg-white shadow-sm border border-slate-200 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-300">
        {getIcon()}
      </div>

      {/* Title & Subtitle */}
      <h4 className="font-bold text-slate-900 text-sm md:text-base tracking-tight max-w-[90%]">
        {title}
      </h4>
      {subtitle && (
        <p className="text-xs text-slate-600 mt-1 max-w-[85%]">
          {subtitle}
        </p>
      )}

      {/* Bottom hint */}
      <div className="absolute bottom-2 right-3 text-[10px] text-slate-600 font-mono">
        Config-driven
      </div>
    </div>
  );
};
