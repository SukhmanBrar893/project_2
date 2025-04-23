"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800 bg-white">
      {/* Navbar */}
      <div className="z-50 fixed top-0 left-0 w-full bg-white shadow">
        <Navbar />
      </div>

      {/* Hero Section */}
      <header className="relative h-screen bg-[url('/images/hero-bg.jpg')] bg-cover bg-center flex items-center justify-center">
        <div className="relative z-10 bg-black bg-opacity-50 text-white text-center px-6 py-10 rounded-xl max-w-xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Welcome to Brar Sports Club</h1>
          <p className="text-lg mb-6">
            Where champions are built —{" "}
            <span className="text-emerald-300 font-semibold">Fit Life, Healthy Life</span>
          </p>
          <Link
            href="/register"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition"
          >
            Join the Club
          </Link>
        </div>
      </header>

      {/* Games Section */}
      <main className="py-20 px-4 max-w-6xl mx-auto w-full">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">🏅 Explore Our Games</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { name: "Baseball", img: "baseball.jpg" },
            { name: "Soccer", img: "soccer.jpg" },
            { name: "Tennis", img: "tennis.jpg" },
            { name: "Cricket", img: "cricket.jpg" },
          ].map((game, index) => (
            <div key={index} className="border rounded-xl overflow-hidden shadow hover:shadow-md transition">
              <Image
                src={`/games/${game.img}`}
                alt={game.name}
                width={400}
                height={250}
                className="w-full h-56 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-blue-700">{game.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-6 mt-auto">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} Brar Health Sports Club. All rights reserved.</p>
          <div className="flex gap-4 mt-3 md:mt-0">
            <Link href="/about" className="hover:underline">
              About
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
            <Link href="/privacy" className="hover:underline">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
