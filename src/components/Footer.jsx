import Menu from "../components/ui/Menu";
import { HiOutlineGlobe } from "react-icons/hi";

import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const menus = [
    {
      title: "Getir'i keşfedin",
      items: [
        {
          title: "Hakkımızda",
        },
        {
          title: "Kariyer",
        },
        {
          title: "Teknoloji Kariyerleri",
        },
        {
          title: "İletişim",
        },
        {
          title: "Sosyal Sorumluluk Projeleri",
        },
      ],
    },
    {
      title: "Yardıma mı ihtiyacınız var?",
      items: [
        {
          title: "Sıkça Sorulan Sorular",
        },
        {
          title: "Kişisel Verilerin Korunması",
        },
        {
          title: "Gizlilik Politikası",
        },
        {
          title: "Kullanım Koşulları",
        },
        {
          title: "Çerez Politikası",
        },
      ],
    },
    {
      title: "İş Ortağımız Olun",
      items: [
        {
          title: "Bayimiz Olun",
        },
        {
          title: "Deponuzu Kiralayın",
        },
        {
          title: "GetirYemek Restoranı Olun",
        },
        {
          title: "GetirÇarşı İşletmesi Olun",
        },
        {
          title: "Zincir Restoranlar",
        },
      ],
    },
  ];

  return (
    <div className="bg-white mt-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-4 pt-10">
          <section>
            <nav className="grid gap-y-4">
              <h6 className="text-lg text-primary-brand-color">
                Getir'i indirin!
              </h6>
              <img
                src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
                alt=""
              />
              <img
                src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
                alt=""
              />
              <img
                src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
                alt=""
              />
            </nav>
          </section>
          {menus.map((menu, index) => (
            <Menu key={index} {...menu} />
          ))}
        </div>
        <div className="flex justify-between items-center border-t border-gray-300 mt-6 pt-6 py-6">
          <div className="text-m text-gray-700 flex gap-x-6">
            {" "}
            © 2022 Getir
            <a href="a" className="text-primary-brand-color hover:underline">
              Bilgi Toplumu Hizmetleri
            </a>
          </div>
          <nav className="flex gap-x-4">
            <a
              href="f"
              className="w-8 h-8 rounded-lg text-gray-700 transition-colors hover:text-primary-brand-color hover:bg-primary-brand-color hover:bg-opacity-10 flex items-center justify-center"
            >
              <FaFacebook size={30} />
            </a>
            <a
              href="t"
              className="w-8 h-8 rounded-lg text-gray-700 transition-colors hover:text-primary-brand-color hover:bg-primary-brand-color hover:bg-opacity-10 flex items-center justify-center"
            >
              <FaTwitter size={30} />
            </a>
            <a
              href="i"
              className="w-8 h-8 rounded-lg text-gray-700 transition-colors hover:text-primary-brand-color hover:bg-primary-brand-color hover:bg-opacity-10 flex items-center justify-center"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="t"
              className="h-8 flex items-center px-5 transition-colors hover:text-primary-brand-color hover:bg-primary-brand-color hover:bg-opacity-10  text-m rounded text-gray-500  border border-gray-100"
            >
              <HiOutlineGlobe size={25} className="mr-2" /> Türkçe (TR)
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
