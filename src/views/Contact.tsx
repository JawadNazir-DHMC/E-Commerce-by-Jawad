import React from "react";
import logo from "/public/logo.webp";
import Image from "next/image";
import { Facebook } from "lucide-react";
import { Twitter } from "lucide-react";
import { Linkedin } from "lucide-react";

import Link from "next/link";
const Contact = () => {
  return (
    <div className="flex  ">
      <div className=" flex gap-x-64">
      <div >
        <Image src={logo} alt="logo" />
        <p className="mt-10">Small, artisan label that offers a</p>
        <p>thoughtfully curated collection of high</p>
        <p>quality everyday essentials made.</p>
        <div className="mt-3 flex gap-x-3">
          <Link href={"./"}>
            <Facebook />
          </Link>
          <Link href={"./"}>
            <Twitter />
          </Link>
          <Link href={"./"}>
            <Linkedin />
          </Link>
        </div>
        </div>
        <div className="flex gap-x-28 mt-4">
          <div>
            <h3 className="font-bold text-lg text-gray-600 leading-5 tracking-wider">Company</h3>
            <ul className="mt-4">
                <Link href={"./"}>
              <li className="mt-3"> About</li>
              </Link>
              <Link href={"./"}>
                <li className="mt-3">Terms of Use</li>
              </Link>
              <Link href={"./"}>
              <li className="mt-3">Privacy Policy</li>
              </Link>
              <Link href={"./"}>
              <li className="mt-3">How it Works</li>
              </Link>
              <Link href={"./"}>
              <li className="mt-3">Contact US</li>
              </Link>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg text-gray-600 leading-5 tracking-wider">Support</h3>
            <ul className="mt-4">
                <Link href={"./"}>
              <li className="mt-3"> Support Career</li>
              </Link>
              <Link href={"./"}>
              <li className="mt-3">24h Service</li>
              </Link>
              <Link href={"./"}>
              <li className="mt-3">Quick Chat</li>
              </Link>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg text-gray-600 leading-5 tracking-wider">Contact</h3>
            <ul className="mt-4">
                <Link href={"./"}>
              <li className="mt-3"> Whatsapp</li>
              </Link>
              <Link href={"./"}>
              <li className="mt-3">Support 24h</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
