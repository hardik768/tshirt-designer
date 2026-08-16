"use client";

import { useState } from "react";
import { Shirt, Palette, Type, Download, Share2 } from "lucide-react";

const SHIRT_COLORS = [
  { name: "White", value: "#ffffff" },
  { name: "Black", value: "#1a1a1a" },
  { name: "Navy", value: "#1e3a8a" },
  { name: "Crimson", value: "#be123c" },
  { name: "Forest", value: "#166534" },
  { name: "Heather", value: "#9ca3af" },
];

export default function Home() {
  const [shirtColor, setShirtColor] = useState(SHIRT_COLORS[0].value);
  const [customText, setCustomText] = useState("Your Design Here");
  const [textColor, setTextColor] = useState("#1a1a1a");

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <div className="bg-indigo-600 p-2 rounded-lg">
            <Shirt className="text-white w-5 h-5" />
          </div>
          <h1 className="text-xl font-bold text-gray-900 tracking-tight">
            T-Shirt Studio
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
            <Share2 className="w-4 h-4" />
            Share
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors shadow-sm">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        {/* Sidebar Tools */}
        <aside className="w-full lg:w-80 bg-white border-r border-gray-200 overflow-y-auto flex-shrink-0 shadow-[4px_0_24px_rgba(0,0,0,0.02)] z-0">
          <div className="p-6 space-y-8">
            {/* Color Section */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Palette className="w-5 h-5 text-indigo-600" />
                <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                  Shirt Color
                </h2>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {SHIRT_COLORS.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setShirtColor(color.value)}
                    className={`group flex flex-col items-center gap-2 p-2 rounded-xl border-2 transition-all ${
                      shirtColor === color.value
                        ? "border-indigo-600 bg-indigo-50/50"
                        : "border-transparent hover:bg-gray-50"
                    }`}
                  >
                    <div
                      className="w-10 h-10 rounded-full shadow-sm border border-gray-200/50 group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: color.value }}
                    />
                    <span className="text-xs font-medium text-gray-600">
                      {color.name}
                    </span>
                  </button>
                ))}
              </div>
            </section>

            <hr className="border-gray-100" />

            {/* Text Section */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Type className="w-5 h-5 text-indigo-600" />
                <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                  Custom Text
                </h2>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1.5">
                    Text Content
                  </label>
                  <input
                    type="text"
                    value={customText}
                    onChange={(e) => setCustomText(e.target.value)}
                    placeholder="Enter your text..."
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-all text-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1.5">
                    Text Color
                  </label>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setTextColor("#1a1a1a")}
                      className={`flex-1 py-2 rounded-lg border text-sm font-medium transition-all ${
                        textColor === "#1a1a1a"
                          ? "bg-gray-900 text-white border-gray-900 shadow-md"
                          : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
                      }`}
                    >
                      Dark
                    </button>
                    <button
                      onClick={() => setTextColor("#ffffff")}
                      className={`flex-1 py-2 rounded-lg border text-sm font-medium transition-all ${
                        textColor === "#ffffff"
                          ? "bg-gray-900 text-white border-gray-900 shadow-md"
                          : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
                      }`}
                    >
                      Light
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </aside>

        {/* Canvas Area */}
        <section className="flex-1 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-gray-50/50 p-8 flex items-center justify-center relative overflow-hidden">
          {/* Decorative background circle */}
          <div className="absolute w-[600px] h-[600px] bg-white rounded-full shadow-[0_0_60px_rgba(0,0,0,0.02)] opacity-50 pointer-events-none" />
          
          <div className="relative w-full max-w-2xl aspect-square flex items-center justify-center group">
            {/* The Shirt Icon (serving as mockup) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
               <svg
                viewBox="0 0 24 24"
                className="w-full h-full max-w-[500px] max-h-[500px] drop-shadow-2xl transition-colors duration-500 ease-out"
                style={{ color: shirtColor }}
                fill="currentColor"
                stroke="rgba(0,0,0,0.1)"
                strokeWidth="0.5"
              >
                <path d="M20.9 9.5 16 5h-2.1l-1.3 1.9c-.3.4-.8.6-1.3.6h-2.6c-.5 0-1-.2-1.3-.6L6.1 5H4L.1 9.5c-.3.4-.2 1 .2 1.3l2.8 2v8.2c0 .6.4 1 1 1h15.8c.6 0 1-.4 1-1v-8.2l2.8-2c.4-.3.5-.9.2-1.3z" />
              </svg>
            </div>

            {/* Draggable/Positioned Text Area (simplified as centered for now) */}
            <div 
              className="absolute z-10 flex items-center justify-center w-[40%] h-[50%] mt-8 flex-col"
            >
              {customText && (
                <div 
                  className="font-bold text-center tracking-tight leading-tight break-words w-full"
                  style={{ 
                    color: textColor,
                    fontSize: "clamp(1.5rem, 4cqw, 3rem)",
                    textShadow: shirtColor === textColor ? "0 0 4px rgba(128,128,128,0.5)" : "none",
                  }}
                >
                  {customText}
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
