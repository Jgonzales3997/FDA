import "./App.css";
import { Disclosure } from "@headlessui/react";

import Swiper from "swiper/bundle";

import "swiper/css/bundle";
import { Ripple, initTWE } from "tw-elements";

initTWE({ Ripple });

const navigation = [
  { name: "Carta", href: "#", current: false },
  { name: "Promociones", href: "#", current: false },
  { name: "Nosotros", href: "#", current: false },
  { name: "Delivery", href: "#", current: false },
  /*{ name: "Reports", href: "#", current: false },*/
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
              className="size-13 transition duration-300 ease-in-out hover:scale-110"
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

      <div className="">
        <div className="bg-gray-800">
          <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between lg:flex-row lg:justify-center">
              <div className="flex flex-1 items-center lg:mr-3 lg:flex-none">
                <p className="ml-3 text-center font-medium text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="mr-2 hidden h-6 w-6 lg:inline"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
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
                  className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-gray-800 shadow-sm  hover:bg-gray-900 hover:text-gray-200"
                  href="#pricing"
                >
                  Buy now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Productos */}
      <div className="bg-gray-200">
        <div class="p-5  grid grid-cols-2 gap-x-12 gap-y-12 sm:p-10 md:p-10 lg:p-15 sm:grid-cols-2 lg:grid-cols-4 xl:p-20 justify-items-center">
          {/* P1 */}
          <div class="relative max-w-xs bg-gray-700 rounded-2xl transition-all duration-500 ">
            <div class="block overflow-hidden rounded-tl-2xl rounded-tr-2xl ">
              <img
                class="opacity-80 transition duration-300 ease-in-out hover:opacity-100 hover:scale-110"
                src="https://i.pinimg.com/474x/a3/72/0d/a3720d50be0084cd88a10952a81ca82c.jpg"
                alt="Card image"
              />
            </div>
            <div class="p-4 border-t-4 border-solid border-gray-200">
              <h4 class="text-base font-semibold text-gray-50 mb-2 capitalize transition-all duration-500 ">
                Fast Transaction
              </h4>
              <p class="text-sm font-normal text-gray-100 transition-all duration-500 leading-5 mb-5">
                {" "}
                Provides faster transaction, so money arrives in realtime{" "}
              </p>
              <button class="bg-gray-100 shadow-sm rounded-full py-2 px-5 text-xs text-gray-900 font-semibold hover:bg-gray-900 hover:text-gray-100">
                Ordenar
              </button>
            </div>
          </div>
          {/* P2 */}
          <div class="relative max-w-xs bg-gray-700 rounded-2xl transition-all duration-500 ">
            <div class="block overflow-hidden rounded-tl-2xl rounded-tr-2xl">
              <img
                class=" opacity-90 transition duration-300 ease-in-out hover:opacity-100 hover:scale-110"
                src="https://www.chaynikam.info/prevgame/World_of_Warcraft-ver.jpg"
                alt="Card image"
              />
            </div>
            <div class="p-4 border-t-4 border-solid border-gray-200">
              <h4 class="text-base font-semibold text-gray-50 mb-2 capitalize transition-all duration-500 ">
                Fast Transaction
              </h4>
              <p class="text-sm font-normal text-gray-100 transition-all duration-500 leading-5 mb-5">
                {" "}
                Provides faster transaction, so money arrives in realtime{" "}
              </p>
              <button class="bg-gray-100 shadow-sm rounded-full py-2 px-5 text-xs text-gray-900 font-semibold hover:bg-gray-900 hover:text-gray-100">
                Ordenar
              </button>
            </div>
          </div>
          {/* P3 */}
          <div class="relative max-w-xs bg-gray-700 rounded-2xl transition-all duration-500 ">
            <div class="block overflow-hidden rounded-tl-2xl rounded-tr-2xl">
              <img
                class=" opacity-90 transition duration-300 ease-in-out hover:opacity-100 hover:scale-110"
                src="https://digiseller.mycdn.ink/img.ashx?idc=1078"
                alt="Card image"
              />
            </div>
            <div class="p-4 border-t-4 border-solid border-gray-200">
              <h4 class="text-base font-semibold text-gray-50 mb-2 capitalize transition-all duration-500 ">
                Fast Transaction
              </h4>
              <p class="text-sm font-normal text-gray-100 transition-all duration-500 leading-5 mb-5">
                {" "}
                Provides faster transaction, so money arrives in realtime{" "}
              </p>
              <button class="bg-gray-100 shadow-sm rounded-full py-2 px-5 text-xs text-gray-900 font-semibold hover:bg-gray-900 hover:text-gray-100">
                Ordenar
              </button>
            </div>
          </div>
          {/* P4 */}
          <div class="relative max-w-xs bg-gray-700 rounded-2xl transition-all duration-500 ">
            <div class="block overflow-hidden rounded-tl-2xl rounded-tr-2xl">
              <img
                class=" opacity-90 transition duration-300 ease-in-out hover:opacity-100 hover:scale-110"
                src="https://digiseller.mycdn.ink/img.ashx?idc=986"
                alt="Card image"
              />
            </div>
            <div class="p-4  border-t-4 border-solid border-gray-200">
              <h4 class="text-base font-semibold text-gray-50 mb-2 capitalize transition-all duration-500  ">
                Fast Transaction
              </h4>
              <p class="text-sm font-normal text-gray-100 transition-all duration-500 leading-5 mb-5">
                {" "}
                Provides faster transaction, so money arrives in realtime{" "}
              </p>
              <button class="bg-gray-100 shadow-sm rounded-full py-2 px-5 text-xs text-gray-900 font-semibold hover:bg-gray-900 hover:text-gray-100">
                Ordenar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*Fin productos */}

      {/*Banner Hover (chivas) */}
      <div className="flex justify-center  ">
        <div className="block overflow-hidden w-full ">
          <img
            alt="Banner *wssp* ? "
            src="https://sommelier.com.pe/wp-content/uploads/Banner-1400-x-200-px.jpg"
            className="transition duration-300 ease-in-out hover:scale-110 w-full h-auto "
          />
        </div>
      </div>

      {/*Banner Hover (chivas) */}

      {/*Apartado *Nosotros / Mapa */}

      <section className="overflow-hidden bg-gray-800 py-8 sm:py-16 ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-indigo-200">
                  Apartado de *Nosotros*
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
                  zzz
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-200">
                  We've built an API that allows you to scale your podcast
                  production workflow.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-200 lg:max-w-none">
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-200"
                      >
                        <path d="M3.196 12.87l-.825.483a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.758 0l7.25-4.25a.75.75 0 000-1.294l-.825-.484-5.666 3.322a2.25 2.25 0 01-2.276 0L3.196 12.87z"></path>
                        <path d="M3.196 8.87l-.825.483a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.758 0l7.25-4.25a.75.75 0 000-1.294l-.825-.484-5.666 3.322a2.25 2.25 0 01-2.276 0L3.196 8.87z"></path>
                        <path d="M10.38 1.103a.75.75 0 00-.76 0l-7.25 4.25a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.76 0l7.25-4.25a.75.75 0 000-1.294l-7.25-4.25z"></path>
                      </svg>
                      Template driven
                    </dt>
                    <dd className="inline">
                      Inspired by Sendgrid, Mailchimp, and Postmark, we allow
                      you to create and apply templated content to your media.
                    </dd>
                  </div>
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-200"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      Simple, REST
                    </dt>
                    <dd className="inline">
                      A simple REST API that allows you to create, generate, and
                      manage your content.
                    </dd>
                  </div>
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-200"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M14.5 10a4.5 4.5 0 004.284-5.882c-.105-.324-.51-.391-.752-.15L15.34 6.66a.454.454 0 01-.493.11 3.01 3.01 0 01-1.618-1.616.455.455 0 01.11-.494l2.694-2.692c.24-.241.174-.647-.15-.752a4.5 4.5 0 00-5.873 4.575c.055.873-.128 1.808-.8 2.368l-7.23 6.024a2.724 2.724 0 103.837 3.837l6.024-7.23c.56-.672 1.495-.855 2.368-.8.096.007.193.01.291.01zM5 16a1 1 0 11-2 0 1 1 0 012 0z"
                          clip-rule="evenodd"
                        ></path>
                        <path d="M14.5 11.5c.173 0 .345-.007.514-.022l3.754 3.754a2.5 2.5 0 01-3.536 3.536l-4.41-4.41 2.172-2.607c.052-.063.147-.138.342-.196.202-.06.469-.087.777-.067.128.008.257.012.387.012zM6 4.586l2.33 2.33a.452.452 0 01-.08.09L6.8 8.214 4.586 6H3.309a.5.5 0 01-.447-.276l-1.7-3.402a.5.5 0 01.093-.577l.49-.49a.5.5 0 01.577-.094l3.402 1.7A.5.5 0 016 3.31v1.277z"></path>
                      </svg>
                      Developer friendly{" "}
                    </dt>
                    <dd className="inline">
                      Documented and easy to use, we make it easy to integrate
                      with your existing workflow.
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            {/*Mapaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa */}
            <div className="py-12">
              <div className="relative w-full h-96">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15607.290857599939!2d-77.06050120120499!3d-12.055716010906636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8d5bb96145b%3A0x921d91976c9090b2!2sLas%20Cucardas!5e0!3m2!1ses-419!2spe!4v1733428231108!5m2!1ses-419!2spe"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                ></iframe>
              </div>
            </div>
            {/*Mapaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa */}
          </div>
        </div>
      </section>

      <footer class="footer  text-neutral-content p-10 bg-gray-200">
        <nav>
          <h6 class="footer-title text-gray-800">Contacto</h6>
          <a class="link link-hover  text-gray-700"># 1</a>
          <a class="link link-hover  text-gray-700"># 2</a>
        </nav>

        <nav>
          <h6 class="footer-title  text-gray-800">Direccion</h6>
          <a class=" text-gray-700"> #1 </a>
        </nav>
      </footer>
    </div>
  );
}

export default App;
