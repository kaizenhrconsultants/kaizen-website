export function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 600 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      aria-label="Connecting talent with opportunity"
    >
      <defs>
        <linearGradient id="primaryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4F46E5" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
      
      {/* Central connecting hub */}
      <circle cx="300" cy="250" r="40" fill="url(#primaryGrad)" opacity="0.2" />
      <circle cx="300" cy="250" r="25" fill="#4F46E5" />
      
      {/* Talent nodes (left side) */}
      <circle cx="120" cy="150" r="20" fill="#06B6D4" opacity="0.8" />
      <circle cx="100" cy="250" r="18" fill="#06B6D4" opacity="0.8" />
      <circle cx="140" cy="350" r="22" fill="#06B6D4" opacity="0.8" />
      
      {/* Opportunity nodes (right side) */}
      <circle cx="480" cy="130" r="24" fill="#4F46E5" opacity="0.8" />
      <circle cx="500" cy="250" r="20" fill="#4F46E5" opacity="0.8" />
      <circle cx="460" cy="370" r="22" fill="#4F46E5" opacity="0.8" />
      
      {/* Connection lines from talent to hub */}
      <path
        d="M 135 155 Q 220 180 275 235"
        stroke="#06B6D4"
        strokeWidth="2"
        opacity="0.4"
        fill="none"
      />
      <path
        d="M 118 250 L 275 250"
        stroke="#06B6D4"
        strokeWidth="2"
        opacity="0.4"
      />
      <path
        d="M 158 345 Q 220 310 275 265"
        stroke="#06B6D4"
        strokeWidth="2"
        opacity="0.4"
        fill="none"
      />
      
      {/* Connection lines from hub to opportunities */}
      <path
        d="M 325 235 Q 400 170 456 140"
        stroke="#4F46E5"
        strokeWidth="2"
        opacity="0.4"
        fill="none"
      />
      <path
        d="M 325 250 L 480 250"
        stroke="#4F46E5"
        strokeWidth="2"
        opacity="0.4"
      />
      <path
        d="M 325 265 Q 390 330 438 365"
        stroke="#4F46E5"
        strokeWidth="2"
        opacity="0.4"
        fill="none"
      />
      
      {/* Animated pulse circles */}
      <circle cx="300" cy="250" r="40" fill="none" stroke="url(#primaryGrad)" strokeWidth="2" opacity="0.3">
        <animate attributeName="r" from="25" to="50" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" from="0.5" to="0" dur="2s" repeatCount="indefinite" />
      </circle>
      
      {/* Small connecting dots */}
      <circle cx="200" cy="200" r="4" fill="#4F46E5" opacity="0.6" />
      <circle cx="220" cy="280" r="4" fill="#06B6D4" opacity="0.6" />
      <circle cx="380" cy="190" r="4" fill="#06B6D4" opacity="0.6" />
      <circle cx="400" cy="310" r="4" fill="#4F46E5" opacity="0.6" />
    </svg>
  );
}
