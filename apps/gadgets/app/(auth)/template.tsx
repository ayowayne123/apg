"use client";

import { Suspense } from "react";

export default function AuthTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Suspense fallback={<LoadingFallback />}>{children}</Suspense>;
}

// Simple animated loading spinner
function LoadingFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center space-y-3">
        <div className="w-10 h-10 border-4 border-gray-300 border-t-primary rounded-full animate-spin"></div>
        <p className="text-gray-500 text-sm">Loading...</p>
      </div>
    </div>
  );
}
