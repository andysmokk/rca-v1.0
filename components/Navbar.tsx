import Link from "next/link";
import Image from "next/image";

import { CustomButton } from "@/components";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav
        className="max-w-[1440px] mx-auto flex justify-between items-center
      sm:px-16 px-6 py-4"
      >
        <Link href="/">
          <Image
            src="./logo.svg"
            alt="Car hub logo"
            height={18}
            width={118}
            className="object-contain"
          />
        </Link>

        <CustomButton
          title="Sign In"
          btnType="button"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px] btn-hover-focus"
        />
      </nav>
    </header>
  );
};

export default Navbar;
