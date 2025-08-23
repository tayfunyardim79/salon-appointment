import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6">
        <h1 className="text-5xl font-extrabold text-pink-600 mb-4">
          Welcome to Glamour Salon
        </h1>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl">
          Discover beauty, style, and relaxation. Book your appointments easily
          with just a few clicks.
        </p>
        <div className="flex gap-4">
          <Link
            href="/signup"
            className="px-6 py-3 rounded-xl bg-pink-500 text-white font-semibold hover:bg-pink-600 transition"
          >
            Sign Up
          </Link>
          <Link
            href="/login"
            className="px-6 py-3 rounded-xl border border-pink-500 text-pink-500 font-semibold hover:bg-pink-50 transition"
          >
            Log In
          </Link>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="max-w-3xl mx-auto text-center px-6 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
        <p className="text-gray-600 leading-relaxed">
          At <span className="font-semibold text-pink-600">Glamour Salon</span>,
          we specialize in hair styling, nail care, skin treatments, and spa
          services. Our expert team is dedicated to helping you look and feel
          your absolute best. 🌸
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* Hair Styling */}
          <div className="bg-pink-50 rounded-2xl shadow-md overflow-hidden">
            <Image
              src="/images/hair.jpg"
              alt="Hair Styling"
              width={400}
              height={250}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-pink-600 mb-2">Hair Styling</h3>
              <p className="text-gray-600">
                Trendy cuts, coloring, and treatments tailored to your personal
                style.
              </p>
            </div>
          </div>

          {/* Nail Care */}
          <div className="bg-pink-50 rounded-2xl shadow-md overflow-hidden">
            <Image
              src="/images/nails.jpg"
              alt="Nail Care"
              width={400}
              height={250}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-pink-600 mb-2">Nail Care</h3>
              <p className="text-gray-600">
                Manicures, pedicures, and nail art that keep your hands and feet
                looking flawless.
              </p>
            </div>
          </div>

          {/* Spa Treatments */}
          <div className="bg-pink-50 rounded-2xl shadow-md overflow-hidden">
            <Image
              src="/images/spa.jpg"
              alt="Spa Treatments"
              width={400}
              height={250}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-pink-600 mb-2">Spa Treatments</h3>
              <p className="text-gray-600">
                Relax and rejuvenate with our calming massages and spa therapies.
              </p>
            </div>
          </div>

          {/* You can add more services here */}
        </div>
      </section>
    </main>
  );
}
