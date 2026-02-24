import * as React from "react";

export function Button({ className = "", children, ...props }) {
  return (
    <button
      className={
        "px-4 py-2 rounded-md font-medium bg-purple-600 hover:bg-purple-700 text-white transition " +
        className
      }
      {...props}
    >
      {children}
    </button>
  );
}