import "./App.css";
import { Disclosure } from "@headlessui/react";
import Menu from "../src/components/nabvar";

import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { Ripple, initTWE } from "tw-elements";

initTWE({ Ripple });

var swiper = new Swiper(".fraction-slide-carousel", {
  loop: true,
  fraction: true,
  navigation: {
    nextEl: ".fraction-slide-carousel .swiper-button-next",
    prevEl: ".fraction-slide-carousel .swiper-button-prev",
  },
  pagination: {
    el: ".fraction-slide-carousel .swiper-pagination",
    type: "fraction",
    formatFractionCurrent: function (number) {
      return number;
    },
  },
});

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function App() {
  return (
    <div className="App">
      {/* Barra de navegación */}
      <Menu />
      {/* Carrusel de imágenes */}
      <div className="w-full relative">
        <div className="swiper fraction-slide-carousel swiper-container relative">
          <div className="swiper-wrapper h-97mb sm:h-97">
            <div className="swiper-slide">
              <div className="bg-indigo-50 h-97 flex justify-center items-center overflow-hidden">
                <img
                  src="https://i.pinimg.com/originals/aa/96/94/aa9694d4a2e2db1a5dfbabac200cc349.png"
                  alt="Descripción de la imagen 1"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="bg-indigo-50 h-97 flex justify-center items-center overflow-hidden">
                <img
                  src="https://i.pinimg.com/originals/d5/52/d0/d552d04d267525ab2cda53ff83f2c833.jpg"
                  alt="Descripción de la imagen 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="bg-indigo-50 h-97 flex justify-center items-center overflow-hidden">
                <img
                  src="https://64.media.tumblr.com/3ec70568f090c4fd2902a542b85c11c6/920acd6e6d068e7f-d4/s2560x500/77c26d4d260e290b01eb4d174d1c850a8689ae2d.png"
                  alt="Descripción de la imagen 3"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-8 lg:justify-start justify-center">
            <button
              id="slider-button-left"
              className="swiper-button-prev group flex justify-center items-center !w-12 !h-12 transition-all duration-500 rounded-full !top-2/4 text-white !-translate-y-8 !left-5 hover:text-gray-700"
              data-carousel-prev
            ></button>
            <button
              id="slider-button-right"
              className="swiper-button-next group flex justify-center items-center !w-12 !h-12 transition-all duration-500 rounded-full !top-2/4 !-translate-y-8 !right-5 hover:text-gray-700"
              data-carousel-next
            ></button>
          </div>
        </div>
      </div>

      {/* Banner promocional */}
      <div className="bg-gray-800">
        <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between lg:flex-row lg:justify-center">
            <div className="flex flex-1 items-center lg:mr-3 lg:flex-none">
              <p className="ml-3 text-center font-medium text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="mr-2 hidden h-6 w-6 lg:inline"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                  ></path>
                </svg>
                To celebrate our
                <span className="font-semibold">Big Version 3</span> release,
                use
                <span className="font-black">VERSION3</span> code to get{" "}
                <span className="font-black">50% off</span>
              </p>
            </div>
            <div className="mt-2 w-full flex-shrink-0 lg:mt-0 lg:w-auto">
              <a
                className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-900 hover:text-gray-200"
                href="#pricing"
              >
                Buy now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Productos */}
      <div className="bg-gray-200">
        <div className="p-5 grid grid-cols-2 gap-x-12 gap-y-12 sm:p-10 md:p-10 lg:p-15 sm:grid-cols-2 lg:grid-cols-4 xl:p-20 justify-items-center">
          {/* P1 */}
          <div className="relative max-w-xs bg-gray-700 rounded-2xl transition-all duration-500">
            <div className="block overflow-hidden rounded-tl-2xl rounded-tr-2xl">
              <img
                className="opacity-80 transition duration-300 ease-in-out hover:opacity-100 hover:scale-110"
                src="https://i.pinimg.com/474x/a3/72/0d/a3720d50be0084cd88a10952a81ca82c.jpg"
                alt="Card image"
              />
            </div>
            <div className="p-4 border-t-4 border-solid border-gray-200">
              <h4 className="text-base font-semibold text-gray-50 mb-2 capitalize transition-all duration-500">
                Fast Transaction
              </h4>
              <p className="text-sm font-normal text-gray-100 transition-all duration-500 leading-5 mb-5">
                Provides faster transaction, so money arrives in realtime
              </p>
              <button className="bg-gray-100 shadow-sm rounded-full py-2 px-5 text-xs text-gray-900 font-semibold hover:bg-gray-900 hover:text-gray-100">
                Ordenar
              </button>
            </div>
          </div>
          {/* P2 */}
          <div className="relative max-w-xs bg-gray-700 rounded-2xl transition-all duration-500">
            <div className="block overflow-hidden rounded-tl-2xl rounded-tr-2xl">
              <img
                className="opacity-90 transition duration-300 ease-in-out hover:opacity-100 hover:scale-110"
                src="https://www.chaynikam.info/prevgame/World_of_Warcraft-ver.jpg"
                alt="Card image"
              />
            </div>
            <div className="p-4 border-t-4 border-solid border-gray-200">
              <h4 className="text-base font-semibold text-gray-50 mb-2 capitalize transition-all duration-500">
                Fast Transaction
              </h4>
              <p className="text-sm font-normal text-gray-100 transition-all duration-500 leading-5 mb-5">
                Provides faster transaction, so money arrives in realtime
              </p>
              <button className="bg-gray-100 shadow-sm rounded-full py-2 px-5 text-xs text-gray-900 font-semibold hover:bg-gray-900 hover:text-gray-100">
                Ordenar
              </button>
            </div>
          </div>
          {/* P3 */}
          <div className="relative max-w-xs bg-gray-700 rounded-2xl transition-all duration-500">
            <div className="block overflow-hidden rounded-tl-2xl rounded-tr-2xl">
              <img
                className="opacity-90 transition duration-300 ease-in-out hover:opacity-100 hover:scale-110"
                src="https://www.chaynikam.info/prevgame/World_of_Warcraft-ver.jpg"
                alt="Card image"
              />
            </div>
            <div className="p-4 border-t-4 border-solid border-gray-200">
              <h4 className="text-base font-semibold text-gray-50 mb-2 capitalize transition-all duration-500">
                Fast Transaction
              </h4>
              <p className="text-sm font-normal text-gray-100 transition-all duration-500 leading-5 mb-5">
                Provides faster transaction, so money arrives in realtime
              </p>
              <button className="bg-gray-100 shadow-sm rounded-full py-2 px-5 text-xs text-gray-900 font-semibold hover:bg-gray-900 hover:text-gray-100">
                Ordenar
              </button>
            </div>
          </div>
          {/* P4 */}
          <div className="relative max-w-xs bg-gray-700 rounded-2xl transition-all duration-500">
            <div className="block overflow-hidden rounded-tl-2xl rounded-tr-2xl">
              <img
                className="opacity-90 transition duration-300 ease-in-out hover:opacity-100 hover:scale-110"
                src="https://www.chaynikam.info/prevgame/World_of_Warcraft-ver.jpg"
                alt="Card image"
              />
            </div>
            <div className="p-4 border-t-4 border-solid border-gray-200">
              <h4 className="text-base font-semibold text-gray-50 mb-2 capitalize transition-all duration-500">
                Fast Transaction
              </h4>
              <p className="text-sm font-normal text-gray-100 transition-all duration-500 leading-5 mb-5">
                Provides faster transaction, so money arrives in realtime
              </p>
              <button className="bg-gray-100 shadow-sm rounded-full py-2 px-5 text-xs text-gray-900 font-semibold hover:bg-gray-900 hover:text-gray-100">
                Ordenar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 p-4 mt-10 text-white">
        <div className="flex justify-between">
          <div>© 2024 Mi Pollería</div>
          <div className="text-sm">Todos los derechos reservados</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
