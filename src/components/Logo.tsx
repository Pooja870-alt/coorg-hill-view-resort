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
      {/* Logo image */}
      <img
        src="/logo.png"
        alt="Coorg Heritage Hill View Resort logo"
        className={`shrink-0 object-contain ${compact ? 'h-12 w-auto' : 'h-16 w-auto'}`}
      />

      {/* Typography */}
      <div className="flex flex-col text-left">
        <div
          className={`font-serif tracking-[0.08em] font-bold leading-tight uppercase ${
            compact ? 'text-base sm:text-lg' : 'text-lg sm:text-xl'
          } ${isLight ? 'text-white' : 'text-[#0A2016]'}`}
        >
          Coorg Heritage
        </div>
        <div
          className={`font-sans tracking-[0.22em] font-semibold uppercase leading-none mt-0.5 text-[10px] sm:text-[11px] ${
            isLight ? 'text-[#E2C98F]' : 'text-[#B8863A]'
          }`}
        >
          Hill View Resort
        </div>
        {!compact && (
          <div
            className={`font-sans tracking-[0.16em] uppercase text-[9px] mt-0.5 font-medium ${
              isLight ? 'text-white/60' : 'text-stone-500'
            }`}
          >
            Madikeri • Coorg
          </div>
        )}
      </div>
    </div>
  );
};
