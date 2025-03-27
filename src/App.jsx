import React, { useState } from "react";
import Player from "./components/Player";
import Sidebar from "./components/Sidebar";
import SongList from "./components/SongList";
import { SongProvider } from "./context/SongContext";
import TodayPlaylist from "./components/TodayPlaylist";
import TopArtists from "./components/TopArtists";

function App() {
  const [category, setCategory] = useState("trending"); // Default category
  return (
    <SongProvider>
      <div className="flex h-screen flex-col bg-[#131313]">
        {/* Main Layout */}
        <div className="flex flex-1 flex-col md:flex-row">
          {/* Sidebar */}
          <div className="w-full bg-[#131313] md:w-1/5">
            <Sidebar setCategory={setCategory} category={category} />
          </div>

          {/* Main Content */}
          <div className="flex-1 bg-[#131313] px-4 py-2">
            <div className="h-full w-full rounded-4xl border border-gray-700 bg-gradient-to-br from-[#313131]/80 via-[#473338]/80 to-[#2c4e52]/80">
              <div className="flex h-full w-full flex-col md:flex-row">
                <div className="flex h-full w-full flex-col md:w-[35%]">
                  <div className="h-[40%] w-full pt-4 pr-2 pb-2 pl-4">
                    <TodayPlaylist />
                  </div>
                  <div className="w-full flex-1 pt-2 pr-2 pb-4 pl-4">
                    <div className="flex h-full w-full rounded-4xl border border-gray-700 bg-[#1D1D1D]/50">
                      <TopArtists />
                    </div>
                  </div>
                </div>

                {/* Songs list */}
                <div className="h-full w-full flex-1 py-4 pr-4 pl-2 md:w-64">
                  <div className="flex h-full w-full rounded-4xl border border-gray-700 bg-[#1D1D1D]/70 p-6">
                    <SongList category={category} />
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
