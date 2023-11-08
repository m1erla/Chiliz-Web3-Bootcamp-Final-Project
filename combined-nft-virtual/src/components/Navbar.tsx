import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 bg-gray sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <ul className="hidden md:flex gap-x-6 text-white">
              <li>
                <Link href="/aboutUs">
                  <p>About Us</p>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <p>Services</p>
                </Link>
              </li>
              <li>
                <Link href="/contacts">
                  <p>Contacts</p>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <p>NFT Thirdweb3</p>
                </Link>
              </li>
              <li>
                <Link href="/indexChiliz">
                  <p>Marketplace Moralis</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
