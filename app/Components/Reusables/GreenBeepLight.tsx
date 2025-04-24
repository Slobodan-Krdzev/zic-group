import React from "react";

const GreenBeepLight = () => {
  return (
    <div
      className="flex items-center gap-2"
      role="status"
      aria-live="polite"
      aria-label="Online status: We're available"
    >
      <span className="relative flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
      </span>
      <span className="text-sm font-medium text-green-700">
        We&apos;re available
      </span>
    </div>
  );
};

export default GreenBeepLight;
