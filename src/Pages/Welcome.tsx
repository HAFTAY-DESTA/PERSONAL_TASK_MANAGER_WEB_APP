// src/pages/Dashboard.tsx
function Illustration() {
  return (
    <svg
      viewBox="0 0 640 360"
      xmlns="http://www.w3.org/2000/svg"
      className="w-80 mt-8 rounded-xl shadow-lg animate-fade-in-up"
      role="img"
      aria-label="Welcome illustration"
    >
      <defs>
        <linearGradient id="grad" x1="0" x2="1">
          <stop offset="0%" stopColor="#eef2ff" />
          <stop offset="100%" stopColor="#e0e7ff" />
        </linearGradient>
      </defs>

      {/* Card background */}
      <rect x="20" y="20" width="600" height="320" rx="18" fill="url(#grad)" />

      {/* Top bar */}
      <rect x="40" y="40" width="560" height="36" rx="10" fill="#1e293b" />
      <circle cx="58" cy="58" r="6" fill="#ef4444" />
      <circle cx="78" cy="58" r="6" fill="#f59e0b" />
      <circle cx="98" cy="58" r="6" fill="#22c55e" />

      {/* Sidebar */}
      <rect x="40" y="88" width="140" height="232" rx="12" fill="#ffffff" />
      <rect x="56" y="104" width="108" height="14" rx="6" fill="#c7d2fe" />
      <rect x="56" y="130" width="92" height="10" rx="5" fill="#e5e7eb" />
      <rect x="56" y="150" width="92" height="10" rx="5" fill="#e5e7eb" />
      <rect x="56" y="170" width="92" height="10" rx="5" fill="#e5e7eb" />
      <rect x="56" y="210" width="108" height="14" rx="6" fill="#c7d2fe" />
      <rect x="56" y="236" width="92" height="10" rx="5" fill="#e5e7eb" />
      <rect x="56" y="256" width="92" height="10" rx="5" fill="#e5e7eb" />
      <rect x="56" y="276" width="92" height="10" rx="5" fill="#e5e7eb" />

      {/* Main panel */}
      <rect x="200" y="88" width="400" height="232" rx="12" fill="#ffffff" />

      {/* Bar chart */}
      <rect x="230" y="270" width="36" height="40" rx="6" fill="#22c55e" />
      <rect x="280" y="240" width="36" height="70" rx="6" fill="#f59e0b" />
      <rect x="330" y="210" width="36" height="100" rx="6" fill="#ef4444" />
      <rect x="380" y="235" width="36" height="75" rx="6" fill="#6366f1" />
      <rect x="430" y="195" width="36" height="115" rx="6" fill="#0ea5e9" />
      <rect x="480" y="250" width="36" height="60" rx="6" fill="#84cc16" />

      {/* Line chart */}
      <polyline
        points="220,220 270,245 320,210 370,230 420,190 470,205 520,180"
        fill="none"
        stroke="#6366f1"
        strokeWidth="4"
        strokeLinejoin="round"
        strokeLinecap="round"
        opacity="0.8"
      />

      {/* Mini legend pills */}
      <rect x="220" y="120" width="90" height="20" rx="10" fill="#eef2ff" />
      <circle cx="235" cy="130" r="5" fill="#6366f1" />
      <text x="248" y="134" fontSize="12" fill="#334155">
        Velocity
      </text>

      <rect x="320" y="120" width="90" height="20" rx="10" fill="#fef3c7" />
      <circle cx="335" cy="130" r="5" fill="#f59e0b" />
      <text x="348" y="134" fontSize="12" fill="#334155">
        In Progress
      </text>

      <rect x="420" y="120" width="90" height="20" rx="10" fill="#dcfce7" />
      <circle cx="435" cy="130" r="5" fill="#22c55e" />
      <text x="448" y="134" fontSize="12" fill="#334155">
        Done
      </text>
    </svg>
  );
}

export default function Welcome() {
  return (
    <div className="flex flex-col items-Top justify-Top min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 p-6">
      <h1 className="text-4xl font-bold text-blue-700 mb-4 animate-fade-in-down">
        Welcome to the Personal Task Manager Web-App 🎉
      </h1>

      <p className="text-gray-700 text-lg max-w-xl text-center animate-fade-in">
        This is your personal space where you can manage tasks, track progress,
        and stay organized. Let’s make your journey more productive 🚀
      </p>

      <Illustration />
    </div>
  );
}
