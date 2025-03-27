import React from "react";

export default function Equaliser() {
  return (
    <div className="flex h-full w-full flex-col gap-y-4 rounded-4xl bg-gradient-to-br from-[#1D1D1D] via-[#130000] to-[#4d2e2e] px-8 py-4 shadow-md">
      <h1 className="text-xl font-normal text-gray-200">Top artists</h1>

      <div className="flex items-center justify-evenly gap-4">
        <img
          src="/assets/artists/arjeet.jpeg"
          alt="Arjeet Singh"
          className="h-16 w-16 rounded-lg"
        />
        <img
          src="/assets/artists/coldplay.jpeg"
          alt="Arjeet Singh"
          className="h-16 w-16 rounded-lg"
        />
        <img
          src="/assets/artists/taylor-swift.jpeg"
          alt="Arjeet Singh"
          className="h-16 w-16 rounded-lg"
        />
      </div>

      <div className="mt-6 flex items-center justify-evenly gap-4">
        <img
          src="/assets/artists/shankar.jpeg"
          alt="Arjeet Singh"
          className="h-16 w-16 rounded-lg"
        />
        <img
          src="/assets/artists/sonu-nigam.jpeg"
          alt="Arjeet Singh"
          className="h-16 w-16 rounded-lg"
        />
        <img
          src="/assets/artists/modern-talking.jpeg"
          alt="Arjeet Singh"
          className="h-16 w-16 rounded-lg"
        />
      </div>
    </div>
  );
}
