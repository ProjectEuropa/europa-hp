import type React from "react";

interface CyberCardProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export default function CyberCard({
  children,
  title,
  className = "",
}: CyberCardProps) {
  return (
    <div
      className={`relative border border-cyber-blue shadow-[0_0_20px_rgba(38,218,253,0.4)] mb-8 overflow-hidden pt-1 group animate-frame-appear ${className}`}
    >
      {/* Top Pulse Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-cyber-blue shadow-[0_0_10px_#26dafd] animate-pulse" />

      {/* Bottom Pulse Line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-cyber-blue shadow-[0_0_10px_#26dafd] animate-pulse" />

      {/* Corners */}
      <div className="absolute top-[-1px] left-[-1px] w-4 h-4 border-t border-l border-cyber-blue z-10" />
      <div className="absolute top-[-1px] right-[-1px] w-4 h-4 border-t border-r border-cyber-blue z-10" />
      <div className="absolute bottom-[-1px] left-[-1px] w-4 h-4 border-b border-l border-cyber-blue z-10" />
      <div className="absolute bottom-[-1px] right-[-1px] w-4 h-4 border-b border-r border-cyber-blue z-10" />

      {/* Side Lines */}
      <div className="absolute top-4 bottom-4 left-0 w-[1px] bg-cyber-blue shadow-[0_0_10px_#26dafd]" />
      <div className="absolute top-4 bottom-4 right-0 w-[1px] bg-cyber-blue shadow-[0_0_10px_#26dafd]" />

      {/* Heading */}
      {title && (
        <div className="relative text-cyber-blue font-mono text-xs uppercase tracking-widest border-b border-cyber-blue py-3 px-6 mt-[5px] flex items-center bg-transparent">
          <span className="text-cyber-light mr-2 animate-blink">&gt;</span>
          {title}
        </div>
      )}

      {/* Content */}
      <div className="relative z-[1] p-6 text-center animate-text-appear [animation-delay:200ms] bg-transparent">
        {children}
      </div>
    </div>
  );
}
