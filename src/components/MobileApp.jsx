export default function MobileApp() {
  return (
    <div className="bg-primary-brand-color flex justify-between items-center bg-mobile-app  mt-6 rounded-lg text-white">
      <div className="flex flex-col gap-y-6 p-4">
        <h3 className="text-3xl font-bold pl-4">Getir'i İndirin!</h3>
        <p className=" font-semibold text-xl pl-4">
          İstediğiniz ürünleri dakikalar içinde kapınıza <br /> getirelim.
        </p>
        <nav className="mt-5 flex gap-x-3 pl-4">
          <a href="g" className="transition-all trasform hover:scale-105">
            <img
              src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
              alt=""
            />
          </a>
          <a href="g" className="transition-all trasform hover:scale-105">
            <img
              src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
              alt=""
            />
          </a>
          <a href="g" className="transition-all trasform hover:scale-105">
            <img
              src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
              alt=""
            />
          </a>
        </nav>
      </div>
      <picture className="pt-11 ">
        <img
          src="https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png"
          alt=""
        />
      </picture>
    </div>
  );
}
