export function ContactIllustration() {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      aria-label="Contact us"
    >
      <defs>
        <linearGradient id="contactGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4F46E5" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
      
      {/* Message envelope */}
      <rect x="40" y="60" width="120" height="80" rx="4" stroke="url(#contactGrad)" strokeWidth="3" fill="none" />
      <path d="M 40 60 L 100 100 L 160 60" stroke="#4F46E5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      
      {/* Connection dots */}
      <circle cx="80" cy="40" r="4" fill="#06B6D4" />
      <circle cx="120" cy="40" r="4" fill="#06B6D4" />
      <path d="M 80 40 L 100 55" stroke="#06B6D4" strokeWidth="1.5" opacity="0.5" />
      <path d="M 120 40 L 100 55" stroke="#06B6D4" strokeWidth="1.5" opacity="0.5" />
      
      {/* Communication waves */}
      <path d="M 25 100 Q 30 100 30 95" stroke="#4F46E5" strokeWidth="2" opacity="0.4" strokeLinecap="round" fill="none" />
      <path d="M 25 100 Q 30 100 30 105" stroke="#4F46E5" strokeWidth="2" opacity="0.4" strokeLinecap="round" fill="none" />
      <path d="M 175 100 Q 170 100 170 95" stroke="#06B6D4" strokeWidth="2" opacity="0.4" strokeLinecap="round" fill="none" />
      <path d="M 175 100 Q 170 100 170 105" stroke="#06B6D4" strokeWidth="2" opacity="0.4" strokeLinecap="round" fill="none" />
    </svg>
  );
}
