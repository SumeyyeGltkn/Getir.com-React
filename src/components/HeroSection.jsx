import { useState } from "react";
import Slider from "react-slick";
import ReactFlagsSelect from "react-flags-select";
import { BsFacebook } from "react-icons/bs";

export default function HeroSection() {
  const [selected, setSelected] = useState("TR");

  const phones = {
    US: "+1",
    DE: "+40",
    TR: "+90",
    IT: "+7",
    IN: "+14,",
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "linear",
  };
  return (
    <div className="relative h-[500px] before: bg-gradient-to-r before:from-primary-brand-color before: to-transparent  before: inset-0 before:h-full mr-0  before:z-20">
      <Slider {...settings}>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-1.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-2.jpg"
            alt=""
          />
        </div>
      </Slider>
      <div className="container ml-3 flex justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 mt-20  ">
        <div>
          <img
            src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"
            alt=""
          />
          <h3 className="mt-4 ml-4 text-4xl font-semibold text-white">
            Dakikalar içinde <br /> kapınızda <br />
          </h3>
        </div>
        <div className="w-[400px] rounded-lg bg-gray-50 mr-10 p-6 ">
          <h4 className="text-primary-brand-color text-center font-semibold mb-4">
            Giriş yap veya kayıt ol
          </h4>
          <div className="grid gap-y-4">
            <div className="flex gap-x-2">
              <ReactFlagsSelect
                countries={Object.keys(phones)}
                customLabels={{
                  phones,
                }}
                onSelect={(code) => setSelected(code)}
                selected={selected}
                className="flag-select"
              />
              <label className="flex-1 relative block">
                <input
                  required
                  className="h-14 px-4 border-2 border-gray-200 rounded w-full transition-color hover:border-primary-brand-color focus:border-primary-brand-color outline-none peer text-sm pt-2
              "
                />
                <span className="absolute top-0 left-0 h-full px-4 flex items-center text-gray-700 transition-all peer-focus:text-primary-brand-color  peer-focus:h-7 peer-focus:text-xs peer-valid:text-primary-brand-color  peer-valid:h-7 peer-valid:text-xs">
                  Telefon Numarası
                </span>
              </label>
            </div>
            <button className="bg-brand-yellow transition-colors hover:bg-primary-brand-color hover:text-brand-yellow h-12 flex items-center justify-center rounded-md w-full text-sm font-semibold text-primary-brand-color">
              Telefon numarası ile devam et
            </button>
            <hr className="h-[1px] bg-gray-300 my-2" />
            <button className="bg-blue-800 bg-opacity-10 text-blue-700 px-7 text-opacity-80 transition-colors hover:bg-blue-700 hover:text-white h-12 flex items-center  rounded-md w-full text-sm font-semibold ">
              <BsFacebook size={20} />
              <span className="mx-auto"> Facebook ile devam et</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
