"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 flex justify-between items-center px-8 py-4 bg-white shadow">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="Salon Logo" width={200} height={200} />
         
        </div>

          {/* Greeting + Explanation */}
  <div className="text-center max-w-xl">
    <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800">
      Welcome to Our Salon ✨
    </h1>
    <p className="text-gray-700 text-base md:text-lg mt-2">
      Where beauty meets relaxation — discover our professional services tailored just for you.
    </p>
  </div>

  {/* Auth Buttons */}
  <div className="flex gap-4">
    <button className="px-6 py-3 border-2 border-pink-600 rounded-xl text-pink-600 font-semibold text-lg hover:bg-pink-50 transition">
      Login
    </button>
    <button className="px-6 py-3 bg-pink-600 text-white rounded-xl font-semibold text-lg hover:bg-pink-700 transition">
      Sign Up
    </button>
  </div>
  </header>

      {/* Main Section */}
      <main className="flex-1 px-8 py-12 bg-gray-50">
        <h1 className="text-3xl font-bold text-center mb-8">Our Services</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service: Haircut */}
          <div className="bg-white shadow rounded-xl p-6 text-center">
            <Image
              src="/images/haircut.jpg"
              alt="Haircut"
              width={300}
              height={200}
              className="rounded-lg mx-auto"
            />
            <h2 className="text-xl font-semibold mt-4">Haircut</h2>
            <p className="text-gray-600 mt-2">
              Professional haircut styles tailored to you.
            </p>
          </div>

          {/* Service: Nail Care */}
          <div className="bg-white shadow rounded-xl p-6 text-center">
            <Image
              src="/images/nails.jpg"
              alt="Nail Care"
              width={300}
              height={200}
              className="rounded-lg mx-auto"
            />
            <h2 className="text-xl font-semibold mt-4">Nail Care</h2>
            <p className="text-gray-600 mt-2">
              Beautiful manicures and pedicures for every occasion.
            </p>
          </div>

          {/* Service: Massage */}
          <div className="bg-white shadow rounded-xl p-6 text-center">
            <Image
              src="/images/massage.jpg"
              alt="Massage"
              width={300}
              height={200}
              className="rounded-lg mx-auto"
            />
            <h2 className="text-xl font-semibold mt-4">Massage</h2>
            <p className="text-gray-600 mt-2">
              Relaxing massages to ease stress and refresh your body.
            </p>
          </div>
        </div>
      </main>

     <footer className="bg-gray-900 text-gray-200 py-10 mt-12">
  <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Salon Info */}
    <div>
      <h2 className="text-xl font-bold text-white mb-3">My Salon</h2>
      <p className="text-gray-400 text-sm">
        Bringing you the best in beauty, style, and relaxation.  
        Visit us to transform your look and feel your best.
      </p>
    </div>

    {/* Contact */}
    <div>
      <h3 className="text-lg font-semibold text-white mb-2">Contact Us</h3>
      <p className="text-gray-400">📍 123 Main Street, Your City</p>
      <p className="text-gray-400">📞 +90 555 123 4567</p>
      <p className="text-gray-400">✉️ contact@mysalon.com</p>
    </div>

    {/* Opening Hours */}
    <div>
      <h3 className="text-lg font-semibold text-white mb-2">Opening Hours</h3>
      <p className="text-gray-400">Mon – Fri: 9:00 – 20:00</p>
      <p className="text-gray-400">Sat: 10:00 – 18:00</p>
      <p className="text-gray-400">Sun: Closed</p>
    </div>
  </div>

  {/* Bottom bar */}
  <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
    © {new Date().getFullYear()} My Salon. All rights reserved.
  </div>
</footer>

    </div>
  );
}
