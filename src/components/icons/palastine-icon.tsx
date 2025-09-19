import React from "react";

interface PalestineIconProps {
  className?: string;
}

export const PalestineIcon: React.FC<PalestineIconProps> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className ? `block ${className}` : "block"}
    >
      {/* Palestinian flag representation - fills entire outline and centers */}
      <rect x="0" y="0" width="24" height="8" fill="#000000" />
      <rect x="0" y="8" width="24" height="8" fill="#FFFFFF" />
      <rect x="0" y="16" width="24" height="8" fill="#009639" />
      <polygon points="0,0 0,24 12,12" fill="#CE1126" />
    </svg>
  );
};
