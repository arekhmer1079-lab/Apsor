import * as React from "react";

export const Input = React.forwardRef(({ className = "", ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={
        "px-3 py-2 rounded-md border border-gray-700 bg-gray-900 text-white outline-none focus:ring-2 focus:ring-purple-600 " +
        className
      }
      {...props}
    />
  );
});
Input.displayName = "Input";