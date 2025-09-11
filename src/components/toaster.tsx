"use client";

import { Toaster } from "react-hot-toast";

export default function AppToaster() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        style: {
          background: "#0b040c",
          color: "#fff",
          border: "1px solid #ffffff22",
        },
      }}
    />
  );
}


