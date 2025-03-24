import React from "react";
import Player from "./components/Player";
import Sidebar from "./components/Sidebar";
import SongList from "./components/SongList";
import { SongProvider } from "./context/SongContext";

function App() {
  return (
    <SongProvider>
      <div className="flex h-screen flex-col bg-[#131313]">
        {/* Main Layout */}
        <div className="flex flex-1">
          {/* Sidebar */}
          <div className="w-1/5 bg-[#131313]">
            <Sidebar />
          </div>

          {/* Main Content */}
          <div className="flex-1 bg-[#131313] px-4 py-2">
            <div className="h-full w-full rounded-4xl border border-gray-600 bg-[#292929]">
              <div className="flex h-full w-full">
                <div className="flex h-full w-[35%] flex-col">
                  <div className="h-[40%] w-full p-4">
                    <div className="flex h-full w-full rounded-4xl bg-[#1D1D1D]"></div>
                  </div>
                  <div className="w-full flex-1 p-4">
                    <div className="flex h-full w-full rounded-4xl bg-[#1D1D1D]"></div>
                  </div>
                </div>

                {/* Songs list */}
                <div className="h-full w-64 flex-1 p-4">
                  <div className="flex h-full w-full rounded-4xl bg-[#1D1D1D] p-6">
                    <SongList />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Player */}
        <div className="bg-[#131313] px-4 py-4">
          <Player />
        </div>
      </div>
    </SongProvider>
  );
}

export default App;
