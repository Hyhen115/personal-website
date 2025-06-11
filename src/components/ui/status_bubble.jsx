import React from "react";

const StatusBubble = ({ status, size = "default" }) => {
  // Define styles for different statuses
  const statusStyles = {
    AI: {
      border: "border-blue-500",
      color: "text-blue-600",
      background: "bg-blue-50 dark:bg-blue-900/20"
    },
    Blockchain: {
      border: "border-green-500",
      color: "text-green-600",
      background: "bg-green-50 dark:bg-green-900/20"
    },
    Cloud: {
      border: "border-amber-500",
      color: "text-amber-600",
      background: "bg-amber-50 dark:bg-amber-900/20"
    },
    Web: {
      border: "border-purple-500",
      color: "text-purple-600",
      background: "bg-purple-50 dark:bg-purple-900/20"
    },
    App: {
      border: "border-pink-500",
      color: "text-pink-600",
      background: "bg-pink-50 dark:bg-pink-900/20"
    },
    Algorithm: {
        border: "border-yellow-500",
        color: "text-yellow-600",
        background: "bg-yellow-50 dark:bg-yellow-900/20"
    }
    // add more status as needed
  };

  // Size variants
  const sizeStyles = {
    small: "text-xs px-2 py-0.5",
    default: "text-sm px-2.5 py-1",
    large: "text-base px-3 py-1.5"
  };

  // Get the style for the status or use default if not found
  const style = statusStyles[status.toLowerCase()] || statusStyles.default;
  const sizeStyle = sizeStyles[size] || sizeStyles.default;

  return (
    <span
      className={`inline-flex items-center justify-center rounded-full ${style.border} ${style.color} ${style.background} font-medium ${sizeStyle}`}
    >
      {status}
    </span>
  );
};

export default StatusBubble;