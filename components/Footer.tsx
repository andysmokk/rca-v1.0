import Link from "next/link";
import Image from "next/image";

import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <footer
      className="flex flex-col text-black-100 mt-5 border-t
    border-gray- 100"
    >
      <div
        className="flex max-md:flex-col flex-wrap selection:justify-between
      gap-5 sm:px-16 px-6 py-10"
      >
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
          <p className="text-base text-gray-700">
            RentCar 2024 <br />
            All rights reserved &copy;
          </p>
        </div>

        <div className="footer__links">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-gray-500 hover:text-blue-700 
                  hover:underline focus:text-blue-700 focus:underline"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div
        className="justify-between items-center flex-wrap mt-10 border-t
      border-gray-100 sm:px-16 sm:flex px-6 py-10"
      >
        <p className="flex justify-center">
          @2024 RentCar. All rights reserved
        </p>
        <div className="footer__copyrights-link">
          <Link
            href="/"
            className="text-gray-500 hover:text-blue-700 hover:underline 
            focus:text-blue-700 focus:underline mt-5 sm:mt-0"
          >
            Privacy Policy
          </Link>
          <Link
            href="/"
            className="text-gray-500 hover:text-blue-700 hover:underline 
            focus:text-blue-700 focus:underline mt-5 sm:mt-0"
          >
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
