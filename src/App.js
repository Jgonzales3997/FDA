import "./App.css";
import { Disclosure } from "@headlessui/react";

import Swiper from "swiper/bundle";

import "swiper/css/bundle";
import { Ripple, initTWE } from "tw-elements";

initTWE({ Ripple });

const navigation = [
  { name: "Dashboard", href: "#", current: false },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
  { name: "Reports", href: "#", current: false },
];

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
    /* Head 1 */
    /* Div barra 1 */
    <div className="App">
      {/* FIN div 1 */}
      {/* ------------------------------------------------------------------ */}
      {/* Div barra negra */}
      <div className="min-h-full  ">
        <header className="bg-gray-800  flex-no-wrap fixed top-0 z-10 flex w-full items-center justify-center py-2 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-center lg:py-4">
          <div className="shrink-0">
            <img
              alt="Your Company"
              src="https://png.pngtree.com/png-vector/20230512/ourmid/pngtree-lion-head-black-pattern-vector-png-image_7095274.png"
              className="size-13"
            />
          </div>
          <div className="hidden md:block ">
            <div className="ml-10 flex items-baseline justify-center space-x-4 p-1 pb-1.5 ">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className={classNames(
                    item.current
                      ? "bg-gray-800 text-gray-100"
                      : "text-gray-100 hover:bg-gray-100 hover:text-gray-800",
                    "rounded-md px-3 py-2 text-xl font-bold"
                  )}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </header>
      </div>

      {/* CARUSELLLLLLLLLL */}
      <div className="w-full relative">
        <div className="swiper fraction-slide-carousel swiper-container relative">
          <div className="swiper-wrapper   h-97mb sm:h-97 ">
            <div className="swiper-slide  ">
              <div className="bg-indigo-50 h-97  flex justify-center items-center overflow-hidden">
                {" "}
                {/* Agrega overflow-hidden */}
                <img
                  src="https://i.pinimg.com/originals/aa/96/94/aa9694d4a2e2db1a5dfbabac200cc349.png"
                  alt="Descripción de la imagen 1"
                  className=" w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="bg-indigo-50 h-97 flex justify-center items-center overflow-hidden">
                {" "}
                {/* Agrega overflow-hidden */}
                <img
                  src="https://i.pinimg.com/originals/d5/52/d0/d552d04d267525ab2cda53ff83f2c833.jpg"
                  alt="Descripción de la imagen 2"
                  className=" w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="bg-indigo-50 h-97 flex justify-center items-center overflow-hidden">
                {" "}
                {/* Agrega overflow-hidden */}
                <img
                  src="https://64.media.tumblr.com/3ec70568f090c4fd2902a542b85c11c6/920acd6e6d068e7f-d4/s2560x500/77c26d4d260e290b01eb4d174d1c850a8689ae2d.png"
                  alt="Descripción de la imagen 3"
                  className=" w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-8 lg:justify-start justify-center ">
            <button
              id="slider-button-left"
              className="swiper-button-prev group  flex justify-center items-center !w-12 !h-12 transition-all duration-500 rounded-full !top-2/4 text-white !-translate-y-8 !left-5 hover:text-gray-700"
              data-carousel-prev
            ></button>
            <button
              id="slider-button-right"
              className="swiper-button-next group  flex justify-center items-center !w-12 !h-12 transition-all duration-500 rounded-full !top-2/4 !-translate-y-8 !right-5 hover:text-gray-700"
              data-carousel-next
            ></button>
          </div>
        </div>
      </div>
      {/* CARUSELLLLLLLLLL */}
      {/*FIN DASHBOARD*/}

      <div className="flex flex-wrap items-center justify-center bg-gray-200 gap-x-4 gap-y-4">
        <p className="text-sm/6 text-gray-900 m-4">
          Promociones zzzzzzzzzzzzzzzzzzzzzz
        </p>
      </div>

      {/*Productos */}
      <div className="bg-gray-900">
        <div class="p-5  grid grid-cols-2 gap-x-12 gap-y-12 sm:p-10 md:p-10 lg:p-15 sm:grid-cols-2 lg:grid-cols-4 xl:p-20 justify-items-center">
          {/* P1 */}
          <div class="relative max-w-xs border border-solid bg-gray-700 border-gray-200 rounded-2xl transition-all duration-500 ">
            <div class="block overflow-hidden rounded-tl-2xl rounded-tr-2xl hover">
              <img
                class=" opacity-80 transition duration-300 ease-in-out hover:opacity-100 hover:scale-110"
                src="https://i.pinimg.com/474x/a3/72/0d/a3720d50be0084cd88a10952a81ca82c.jpg"
                alt="Card image"
              />
            </div>
            <div class="p-4">
              <h4 class="text-base font-semibold text-gray-50 mb-2 capitalize transition-all duration-500 ">
                Fast Transaction
              </h4>
              <p class="text-sm font-normal text-gray-100 transition-all duration-500 leading-5 mb-5">
                {" "}
                Provides faster transaction, so money arrives in realtime{" "}
              </p>
              <button class="bg-gray-100 shadow-sm rounded-full py-2 px-5 text-xs text-gray-900 font-semibold hover:bg-gray-900 hover:text-gray-100">
                Read More
              </button>
            </div>
          </div>
          {/* P2 */}
          <div class="relative max-w-xs border border-solid bg-gray-700 border-gray-200 rounded-2xl transition-all duration-500 ">
            <div class="block overflow-hidden rounded-tl-2xl rounded-tr-2xl">
              <img
                class=" opacity-90 transition duration-300 ease-in-out hover:opacity-100 hover:scale-110"
                src="https://www.chaynikam.info/prevgame/World_of_Warcraft-ver.jpg"
                alt="Card image"
              />
            </div>
            <div class="p-4">
              <h4 class="text-base font-semibold text-gray-50 mb-2 capitalize transition-all duration-500 ">
                Fast Transaction
              </h4>
              <p class="text-sm font-normal text-gray-100 transition-all duration-500 leading-5 mb-5">
                {" "}
                Provides faster transaction, so money arrives in realtime{" "}
              </p>
              <button class="bg-gray-100 shadow-sm rounded-full py-2 px-5 text-xs text-gray-900 font-semibold hover:bg-gray-900 hover:text-gray-100">
                Read More
              </button>
            </div>
          </div>
          {/* P3 */}
          <div class="relative max-w-xs border border-solid bg-gray-700 border-gray-200 rounded-2xl transition-all duration-500 ">
            <div class="block overflow-hidden rounded-tl-2xl rounded-tr-2xl">
              <img
                class=" opacity-90 transition duration-300 ease-in-out hover:opacity-100 hover:scale-110"
                src="https://digiseller.mycdn.ink/img.ashx?idc=1078"
                alt="Card image"
              />
            </div>
            <div class="p-4">
              <h4 class="text-base font-semibold text-gray-50 mb-2 capitalize transition-all duration-500 ">
                Fast Transaction
              </h4>
              <p class="text-sm font-normal text-gray-100 transition-all duration-500 leading-5 mb-5">
                {" "}
                Provides faster transaction, so money arrives in realtime{" "}
              </p>
              <button class="bg-gray-100 shadow-sm rounded-full py-2 px-5 text-xs text-gray-900 font-semibold hover:bg-gray-900 hover:text-gray-100">
                Read More
              </button>
            </div>
          </div>
          {/* P4 */}
          <div class="relative max-w-xs border border-solid bg-gray-700 border-gray-200 rounded-2xl transition-all duration-500 ">
            <div class="block overflow-hidden rounded-tl-2xl rounded-tr-2xl">
              <img
                class=" opacity-90 transition duration-300 ease-in-out hover:opacity-100 hover:scale-110"
                src="https://digiseller.mycdn.ink/img.ashx?idc=986"
                alt="Card image"
              />
            </div>
            <div class="p-4">
              <h4 class="text-base font-semibold text-gray-50 mb-2 capitalize transition-all duration-500 ">
                Fast Transaction
              </h4>
              <p class="text-sm font-normal text-gray-100 transition-all duration-500 leading-5 mb-5">
                {" "}
                Provides faster transaction, so money arrives in realtime{" "}
              </p>
              <button class="bg-gray-100 shadow-sm rounded-full py-2 px-5 text-xs text-gray-900 font-semibold hover:bg-gray-900 hover:text-gray-100">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*Fin productos */}

      <div className="flex w-full flex-col border-opacity-50">
        <div className="card bg-base-300 rounded-box grid h-20 place-items-center">
          content
        </div>
        <div className="divider">OR</div>
        <div className="card bg-base-300 rounded-box grid h-20 place-items-center">
          content
        </div>
      </div>
      <footer class="footer bg-neutral text-neutral-content p-10">
        <nav>
          <h6 class="footer-title">Services</h6>
          <a class="link link-hover">Branding</a>
          <a class="link link-hover">Design</a>
          <a class="link link-hover">Marketing</a>
          <a class="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 class="footer-title">Company</h6>
          <a class="link link-hover">About us</a>
          <a class="link link-hover">Contact</a>
          <a class="link link-hover">Jobs</a>
          <a class="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 class="footer-title">Legal</h6>
          <a class="link link-hover">Terms of use</a>
          <a class="link link-hover">Privacy policy</a>
          <a class="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
}

export default App;
