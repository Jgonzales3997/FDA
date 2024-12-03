import "./App.css";
import { Disclosure } from "@headlessui/react";

import Swiper from "swiper/bundle";

import "swiper/css/bundle";

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

const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-02.jpg",
    imageAlt: "Front of men's Basic Tee in white.",
    price: "$35",
    color: "White",
  },
  {
    id: 3,
    name: "Vintage Jeans",
    href: "#",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-03.jpg",
    imageAlt: "Front of men's Vintage Jeans in blue.",
    price: "$50",
    color: "Blue",
  },
  {
    id: 4,
    name: "Casual Shirt",
    href: "#",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-04.jpg",
    imageAlt: "Front of men's Casual Shirt in red.",
    price: "$40",
    color: "Red",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function App() {
  return (
    /* Head 1 */
    /* Div barra 1 */
    <div className="App">
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-4">
        <p className="text-sm/6 text-gray-900 m-4">
          Promociones zzzzzzzzzzzzzzzzzzzzzz
        </p>
      </div>

      {/* FIN div 1 */}
      {/* ------------------------------------------------------------------ */}
      {/* Div barra negra */}
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-900">
          <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-8">
            <div className="flex h-20 items-center justify-between">
              <div className="flex items-center">
                <div className="shrink-0">
                  <img
                    alt="Your Company"
                    src="https://png.pngtree.com/png-vector/20230512/ourmid/pngtree-lion-head-black-pattern-vector-png-image_7095274.png"
                    className="size-13"
                  />
                </div>
              </div>
            </div>
          </div>
        </Disclosure>

        <header className="bg-gray-800">
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline justify-center space-x-4 p-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className={classNames(
                    item.current
                      ? "bg-gray-800 text-gray-100"
                      : "text-gray-100 hover:bg-gray-900 hover:text-gray-100",
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
      <div class="w-full relative">
        <div class="swiper fraction-slide-carousel swiper-container relative">
          <div class="swiper-wrapper">
            <div className="swiper-slide">
              <div className="bg-indigo-50  h-96 flex justify-center items-center">
                <img
                  src="https://i.pinimg.com/originals/aa/96/94/aa9694d4a2e2db1a5dfbabac200cc349.png" // Reemplaza esta URL con la URL de tu imagen
                  alt="Descripción de la imagen 1" // Asegúrate de proporcionar un texto alternativo
                  className="h-full w-full object-cover   " // Ajusta las clases según sea necesario
                />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="bg-indigo-50  h-96 flex justify-center items-center">
                <img
                  src="https://i.pinimg.com/originals/d5/52/d0/d552d04d267525ab2cda53ff83f2c833.jpg" // Reemplaza esta URL con la URL de tu imagen
                  alt="Descripción de la imagen 2" // Asegúrate de proporcionar un texto alternativo
                  className="h-full w-full object-cover " // Ajusta las clases según sea necesario
                />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="bg-indigo-50  h-96 flex justify-center items-center">
                <img
                  src="https://64.media.tumblr.com/3ec70568f090c4fd2902a542b85c11c6/920acd6e6d068e7f-d4/s2560x500/77c26d4d260e290b01eb4d174d1c850a8689ae2d.png" // Reemplaza esta URL con la URL de tu imagen
                  alt="Descripción de la imagen 3" // Asegúrate de proporcionar un texto alternativo
                  className="h-full w-full object-cover " // Ajusta las clases según sea necesario
                />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-8 lg:justify-start justify-center mt-4">
            <button
              id="slider-button-left"
              className="swiper-button-prev group !p-2 flex justify-center items-center  !w-12 !h-12 transition-all duration-500 rounded-full !top-2/4 text-white !-translate-y-8 !left-5 hover:text-gray-700"
              data-carousel-prev
            ></button>
            <button
              id="slider-button-right"
              className="swiper-button-next group !p-2 flex justify-center items-center !w-12 !h-12 transition-all duration-500 rounded-full !top-2/4 !-translate-y-8 !right-5 hover:text-gray-700"
              data-carousel-next
            ></button>
          </div>
        </div>
      </div>
      {/* CARUSELLLLLLLLLL */}
      {/*FIN DASHBOARD*/}

      <div className="bg-slate-500">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-0 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Customers also purchased
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-4 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                />
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.color}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

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
