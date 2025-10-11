const CircularProgress = ({ progress }) => {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative w-24 h-24">
      <svg className="absolute top-0 left-0 w-full h-full">
        <circle
          cx="50%"
          cy="50%"
          r={radius}
          stroke="#e5e7eb"
          strokeWidth="8"
          fill="none"
        />
        <circle
          cx="50%"
          cy="50%"
          r={radius}
          stroke="#2563eb"
          strokeWidth="8"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform="rotate(-90 60 60)"
        />
      </svg>
      <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
        <span className="text-sm font-semibold text-blue-700">{progress}</span>
      </div>
    </div>
  );
};

export default CircularProgress;
