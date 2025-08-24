import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-pink-50 to-white">
      {/* HEADER */}
      <header className="w-full flex items-center justify-between px-8 py-4 shadow bg-white">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Glamour Salon Logo"
            width={40}
            height={40}
          />
          <span className="text-xl font-bold text-pink-600">Glamour Salon</span>
        </div>

        {/* Auth Buttons */}
        <div className="flex gap-4">
          <Link
            href="/login"
            className="px-4 py-2 rounded-lg border border-pink-500 text-pink-500 hover:bg-pink-50 transition"
          >
            Log In
          </Link>
          <Link
            href="/signup"
            className="px-4 py-2 rounded-lg bg-pink-500 text-white hover:bg-pink-600 transition"
          >
            Sign Up
          </Link>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-grow">
        {/* Hero / Welcome Section */}
        <section className="text-center py-16 px-6">
          <h1 className="text-5xl font-extrabold text-pink-600 mb-6">
            Welcome to Glamour Salon
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Discover beauty, style, and relaxation. Book your appointments
            online and let our experts pamper you with professional care.
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
                <h3 className="text-xl font-semibold text-pink-600 mb-2">
                  Hair Styling
                </h3>
                <p className="text-gray-600">
                  Trendy cuts, coloring, and treatments tailored to your style.
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
                <h3 className="text-xl font-semibold text-pink-600 mb-2">
                  Nail Care
                </h3>
                <p className="text-gray-600">
                  Manicures, pedicures, and nail art that keep your hands and
                  feet flawless.
                </p>
              </div>
            </div>

            {/* Spa */}
            <div className="bg-pink-50 rounded-2xl shadow-md overflow-hidden">
              <Image
                src="/images/spa.jpg"
                alt="Spa Treatments"
                width={400}
                height={250}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-pink-600 mb-2">
                  Spa Treatments
                </h3>
                <p className="text-gray-600">
                  Relax with massages and therapies designed to refresh your
                  body and soul.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-pink-600 text-white py-6 text-center">
        <p className="mb-2">© {new Date().getFullYear()} Glamour Salon</p>
        <p className="text-sm">123 Beauty Street, Istanbul | +90 555 123 4567</p>
      </footer>
    </div>
  );
}
