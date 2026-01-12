import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "h-10 w-10" }) => {
  return (
    <svg 
      viewBox="0 0 120 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      aria-label="GanttGo Logo"
    >
      <defs>
        <linearGradient id="logo_gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0073ea" /> {/* monday blue */}
          <stop offset="100%" stopColor="#a25ddc" /> {/* monday purple */}
        </linearGradient>
        <filter id="glass_glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      
      {/* Top Row - Short */}
      <circle cx="12" cy="20" r="8" fill="#0073ea" />
      <rect x="32" y="12" width="50" height="16" rx="8" fill="url(#logo_gradient)" />
      
      {/* Middle Row - Medium */}
      <circle cx="12" cy="50" r="8" fill="#0073ea" />
      <rect x="32" y="42" width="75" height="16" rx="8" fill="url(#logo_gradient)" />
      
      {/* Bottom Row - Long */}
      <circle cx="12" cy="80" r="8" fill="#0073ea" />
      <rect x="32" y="72" width="95" height="16" rx="8" fill="url(#logo_gradient)" />
    </svg>
  );
};