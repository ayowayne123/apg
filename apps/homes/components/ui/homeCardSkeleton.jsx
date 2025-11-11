"use client";
import React from "react";

export default function HomeCardSkeleton() {
  return (
    <div className=" overflow-hidden shadow-md bg-white animate-pulse rounded-[20px] hover:shadow-lg transition shrink-0 sm:w-[300px] sm:h-[450px]">
      <div className="h-52 bg-gray-200" />
      <div className="p-4 space-y-3">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
        <div className="flex justify-between items-center mt-3">
          <div className="h-4 bg-gray-200 rounded w-16"></div>
          <div className="flex gap-3">
            <div className="h-3 bg-gray-200 rounded w-8"></div>
            <div className="h-3 bg-gray-200 rounded w-8"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
