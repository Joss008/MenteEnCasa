import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'horizontal' | 'icon-only';
  theme?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'horizontal',
  theme = 'light',
  size = 'md',
  showTagline = false
}) => {
  const isDark = theme === 'dark';
  const blueColor = isDark ? '#A3C7D6' : '#23526E';
  const greenColor = isDark ? '#A8C9B0' : '#3D614A';
  const textColor = isDark ? '#FAF7F2' : '#1F2421';
  const subtextColor = isDark ? '#D1E0D7' : '#3D614A';

  const sizeMap = {
    sm: { icon: 72, text: 'text-lg', subtext: 'text-[9px]' },
    md: { icon: 84, text: 'text-xl sm:text-2xl', subtext: 'text-[10px]' },
    lg: { icon: 100, text: 'text-2xl sm:text-3xl', subtext: 'text-xs' },
    xl: { icon: 100, text: 'text-3xl sm:text-4xl', subtext: 'text-sm' }
  };

  const currentSize = sizeMap[size];

  const LogoImage = ({ width, height }: { width: number; height: number }) => (
    <img
      src="/Logo2.png"
      alt=""
      width={width}
      height={height}
      className="shrink-0 transition-transform group-hover:scale-105 duration-300 object-contain rounded-lg"
      aria-hidden="true"
    />
  );

  if (variant === 'icon-only') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`} role="img" aria-label="Logo de Mente en Casa">
        <LogoImage width={currentSize.icon} height={currentSize.icon} />
      </div>
    );
  }

  if (variant === 'full') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`} role="img" aria-label="Logo de Mente en Casa">
        <LogoImage width={currentSize.icon * 1.5} height={currentSize.icon * 1.5} />
        <div className={`mt-3 font-serif-editorial font-bold tracking-tight ${currentSize.text}`}>
          <span style={{ color: blueColor }}>Mente </span>
          <span style={{ color: blueColor }}>en </span>
          <span style={{ color: greenColor }}>Casa</span>
        </div>
        <div className="mt-1 flex items-center justify-center gap-2">
          <span className="w-6 h-[1px] bg-current opacity-60" style={{ color: blueColor }} />
          <span
            className="font-sans font-bold tracking-[0.25em] text-[10px] sm:text-xs uppercase"
            style={{ color: blueColor }}
          >
            PSICOLOGÍA
          </span>
          <span className="w-6 h-[1px] bg-current opacity-60" style={{ color: blueColor }} />
        </div>
        {(showTagline || size === 'lg' || size === 'xl') && (
          <p
            className="mt-2 font-sans font-medium text-xs sm:text-sm tracking-wide"
            style={{ color: subtextColor }}
          >
            Psicología que acompaña, transforma y sana.
          </p>
        )}
      </div>
    );
  }

  // horizontal (default)
  return (
    <div className={`flex items-center gap-3 ${className}`} role="img" aria-label="Logo de Mente en Casa">
      <LogoImage width={currentSize.icon} height={currentSize.icon} />
      <div className="flex flex-col text-left">
        <div className={`font-serif-editorial font-bold tracking-tight leading-tight ${currentSize.text}`}>
          <span style={{ color: blueColor }}>Mente </span>
          <span style={{ color: blueColor }}>en </span>
          <span style={{ color: greenColor }}>Casa</span>
        </div>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span
            className="font-sans font-bold tracking-[0.2em] text-[9px] sm:text-[10px] uppercase"
            style={{ color: blueColor }}
          >
            PSICOLOGÍA
          </span>
        </div>
      </div>
    </div>
  );
};
