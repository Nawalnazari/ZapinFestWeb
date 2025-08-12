import { useState } from "react";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import SponsorBar from "../partials/SponsorBar";
import MainMenu from "../partials/MainMenu";

// Contoh gambar untuk slideshow
const images = [
  "/images/zapin1.png",
  "/images/zapin2.jpg",
  "/images/zapin3.jpg"
];

function Main() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  // Fungsi untuk tukar gambar
  const nextSlide = () => setCurrent((current + 1) % images.length);
  const prevSlide = () =>
    setCurrent((current - 1 + images.length) % images.length);

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-violet-100 via-white to-violet-300 dark:from-gray-900 dark:via-gray-800 dark:to-violet-900">
      {/* Sidebar hanya untuk mobile */}
      {!window.matchMedia("(min-width: 768px)").matches && (
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      )}
      <MainMenu />
      {/* Header hanya untuk mobile */}
      <div className="md:hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      </div>
      {/* Banner penuh lebar di bawah menu */}
      {/* <img
        src="/src/images/zapinFestBanner.png"
        alt="Zapin Festival Logo"
        className="w-full h-[350px] object-cover mb-8"
      /> */}
      {/* Jadikan content scrollable */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden">
        <img
          src="/images/zapinFestBanner.png"
          alt="Zapin Festival Logo"
          className="w-full h-[350px] object-cover mb-8"
        />
        <main className="flex flex-col items-center justify-center min-h-[80vh]">
          <div className="w-full max-w-2xl mx-auto text-center">
            {/* <img
              src="/src/images/zapinFestBanner.png"
              alt="Zapin Festival Logo"
              className="mx-auto"
            /> */}
            <h1 className="text-5xl font-extrabold mb-4 text-violet-700 dark:text-violet-300 drop-shadow-lg">
              Zapin Festival Malaysia 2026
            </h1>
            <p className="text-lg mb-8 text-gray-700 dark:text-gray-200">
              Selamat datang ke festival tarian Zapin terbesar di Malaysia!
              Sertai kami untuk menyaksikan keindahan budaya, pertandingan
              tarian, bengkel, persembahan muzik dan banyak lagi.
            </p>
            <div className="flex flex-col items-center mt-8">
              <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                Lokasi: Dewan Budaya, Kompleks Kebudayaan Negeri Johor, Johor
                Bahru
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Tarikh: 10 - 11 Ogos 2025
              </span>
            </div>
            {/* Slideshow */}
            <div className="mt-8 flex flex-col items-center">
              <div className="relative w-full max-w-lg h-64 rounded-lg overflow-hidden shadow-lg">
                <img
                  src={images[current]}
                  alt={`Zapin ${current + 1}`}
                  className="object-cover w-full h-full transition-all duration-500"
                />
                <button
                  onClick={prevSlide}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-violet-600 text-white rounded-full p-2 shadow hover:bg-violet-800"
                  aria-label="Sebelum"
                >
                  &#8592;
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-violet-600 text-white rounded-full p-2 shadow hover:bg-violet-800"
                  aria-label="Seterusnya"
                >
                  &#8594;
                </button>
              </div>
              <div className="flex gap-2 mt-4 justify-center">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrent(idx)}
                    className={`w-3 h-3 rounded-full ${
                      idx === current
                        ? "bg-violet-700"
                        : "bg-violet-300 dark:bg-violet-900"
                    }`}
                    aria-label={`Pilih gambar ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </main>
        {/* Footer */}
        <footer className="bg-transparent border-t border-gray-300 pt-8 pb-4">
          <div className="flex flex-col items-center justify-center gap-6">
            {/* Sponsor logos */}
            <div className="flex flex-col items-center gap-2 mb-4">
              <div className="flex gap-4">
                <img
                  src="/images/kementerianPelancongan.png"
                  alt="Kementerian Pelancongan"
                  className="h-12"
                />
                <img
                  src="/images/visitJohor.jpeg"
                  alt="Visit Johor"
                  className="h-12"
                />
                <img
                  src="/images/majuJohor.jpeg"
                  alt="Maju Johor"
                  className="h-12"
                />
                <img
                  src="/images/malaysiaAirlines.png"
                  alt="Malaysia Airlines"
                  className="h-12"
                />
                <img
                  src="/images/tourismMalaysia.png"
                  alt="Tourisme Malaysia"
                  className="h-12"
                />
              </div>
            </div>
            {/* Social icons */}
            <div className="flex gap-6 mb-4">
              <a href="#" aria-label="Facebook">
                <img
                  src="/images/facebook.png"
                  alt="Facebook"
                  className="h-5 w-5"
                />
              </a>
              <a href="#" aria-label="Twitter">
                <img
                  src="/images/twitter-sign.png"
                  alt="Twitter"
                  className="h-5 w-5"
                />
              </a>
              <a href="#" aria-label="Instagram">
                <img
                  src="/images/instagram.png"
                  alt="Instagram"
                  className="h-5 w-5"
                />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Main;
