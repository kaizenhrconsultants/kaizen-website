interface IconProps {
  className?: string;
}

export function RecruitmentIcon({ className = "w-16 h-16" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="recGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4F46E5" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="20" r="8" stroke="url(#recGrad)" strokeWidth="2.5" fill="none" />
      <path d="M 20 32 Q 20 28 24 28 L 40 28 Q 44 28 44 32 L 44 44 Q 44 48 40 48 L 24 48 Q 20 48 20 44 Z" stroke="url(#recGrad)" strokeWidth="2.5" fill="none" />
      <path d="M 28 38 L 32 42 L 38 34" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ConsultingIcon({ className = "w-16 h-16" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="conGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4F46E5" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="18" stroke="url(#conGrad)" strokeWidth="2.5" fill="none" />
      <path d="M 32 20 L 32 32 L 40 40" stroke="#4F46E5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="32" cy="32" r="3" fill="#06B6D4" />
    </svg>
  );
}

export function ExecutiveSearchIcon({ className = "w-16 h-16" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="execGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4F46E5" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
      <circle cx="26" cy="26" r="14" stroke="url(#execGrad)" strokeWidth="2.5" fill="none" />
      <path d="M 36 36 L 46 46" stroke="#4F46E5" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="26" cy="26" r="6" fill="#06B6D4" opacity="0.3" />
    </svg>
  );
}

export function PayrollIcon({ className = "w-16 h-16" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="payGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4F46E5" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
      <rect x="16" y="20" width="32" height="24" rx="2" stroke="url(#payGrad)" strokeWidth="2.5" fill="none" />
      <line x1="16" y1="28" x2="48" y2="28" stroke="#06B6D4" strokeWidth="2" />
      <circle cx="32" cy="36" r="4" fill="#4F46E5" />
      <text x="32" y="39" fontSize="8" fill="#fff" textAnchor="middle" fontWeight="bold">$</text>
    </svg>
  );
}

export function TrainingIcon({ className = "w-16 h-16" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="trainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4F46E5" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
      <path d="M 20 28 L 32 20 L 44 28 L 44 42 L 32 50 L 20 42 Z" stroke="url(#trainGrad)" strokeWidth="2.5" fill="none" />
      <path d="M 26 34 L 30 38 L 38 30" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ComplianceIcon({ className = "w-16 h-16" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="compGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4F46E5" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
      <path d="M 32 16 L 18 24 L 18 34 Q 18 42 32 48 Q 46 42 46 34 L 46 24 Z" stroke="url(#compGrad)" strokeWidth="2.5" fill="none" />
      <path d="M 26 32 L 30 36 L 38 28" stroke="#4F46E5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PerformanceIcon({ className = "w-16 h-16" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="perfGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4F46E5" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
      <path d="M 16 44 L 24 36 L 32 40 L 40 28 L 48 32" stroke="url(#perfGrad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="24" cy="36" r="3" fill="#06B6D4" />
      <circle cx="32" cy="40" r="3" fill="#06B6D4" />
      <circle cx="40" cy="28" r="3" fill="#4F46E5" />
      <circle cx="48" cy="32" r="3" fill="#4F46E5" />
    </svg>
  );
}

export function EmployeeRelationsIcon({ className = "w-16 h-16" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="empGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4F46E5" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="6" stroke="url(#empGrad)" strokeWidth="2" fill="none" />
      <circle cx="40" cy="24" r="6" stroke="url(#empGrad)" strokeWidth="2" fill="none" />
      <path d="M 16 40 Q 16 36 20 36 L 28 36 Q 32 36 32 40 L 32 46" stroke="#06B6D4" strokeWidth="2" fill="none" />
      <path d="M 32 40 Q 32 36 36 36 L 44 36 Q 48 36 48 40 L 48 46" stroke="#4F46E5" strokeWidth="2" fill="none" />
    </svg>
  );
}

export function BenefitsIcon({ className = "w-16 h-16" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="benGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4F46E5" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
      <path d="M 32 18 L 28 22 L 22 22 L 22 28 L 18 32 L 22 36 L 22 42 L 28 42 L 32 46 L 36 42 L 42 42 L 42 36 L 46 32 L 42 28 L 42 22 L 36 22 Z" stroke="url(#benGrad)" strokeWidth="2.5" fill="none" />
      <circle cx="32" cy="32" r="6" fill="#4F46E5" opacity="0.3" />
    </svg>
  );
}

export function WorkforcePlanningIcon({ className = "w-16 h-16" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="workGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4F46E5" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
      <rect x="18" y="18" width="28" height="28" rx="2" stroke="url(#workGrad)" strokeWidth="2.5" fill="none" />
      <line x1="18" y1="26" x2="46" y2="26" stroke="#06B6D4" strokeWidth="2" />
      <line x1="26" y1="26" x2="26" y2="46" stroke="#06B6D4" strokeWidth="2" />
      <circle cx="32" cy="36" r="3" fill="#4F46E5" />
      <circle cx="38" cy="36" r="2" fill="#06B6D4" />
    </svg>
  );
}
