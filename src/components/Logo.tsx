import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  compact?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', variant = 'dark', compact = false }) => {
  const isLight = variant === 'light';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Mountain & Sun Vector Badge */}
      <div className="relative shrink-0 flex items-center justify-center">
        <svg
          viewBox="0 0 60 50"
          className={compact ? "w-9 h-7" : "w-11 h-9"}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle Sun Halo */}
          <circle cx="28" cy="22" r="14" fill="#F4E9D5" fillOpacity={isLight ? "0.25" : "0.75"} />
          
          {/* Sunset / Location Pin circle */}
          <circle cx="27" cy="18" r="4.5" fill="#D95338" />

          {/* Left / Primary Peak */}
          <polygon
            points="24,11 6,44 42,44"
            fill="#1E4D38"
          />
          {/* Left Peak Shade Facet */}
          <polygon
            points="24,11 24,44 42,44"
            fill="#143928"
          />

          {/* Right Smaller Peak */}
          <polygon
            points="42,27 30,44 54,44"
            fill="#234E3C"
          />
          <polygon
            points="42,27 42,44 54,44"
            fill="#163829"
          />
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col text-left">
        <div className={`font-serif tracking-[0.08em] font-bold leading-tight uppercase ${
          compact ? "text-base sm:text-lg" : "text-lg sm:text-xl"
        } ${isLight ? "text-white" : "text-[#0A2016]"}`}>
          Coorg Heritage
        </div>
        <div className={`font-sans tracking-[0.22em] font-semibold uppercase leading-none mt-0.5 text-[10px] sm:text-[11px] ${
          isLight ? "text-[#E2C98F]" : "text-[#B8863A]"
        }`}>
          Hill View Resort
        </div>
        {!compact && (
          <div className={`font-sans tracking-[0.16em] uppercase text-[9px] mt-0.5 font-medium ${
            isLight ? "text-white/60" : "text-stone-500"
          }`}>
            Madikeri • Coorg
          </div>
        )}
      </div>
    </div>
  );
};
