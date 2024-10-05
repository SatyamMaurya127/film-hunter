"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-row justify-between items-center px-10 py-5 border-t">
      <h2 className="text-lg font-extrabold tracking-wide">
        &copy; FILM HUNTER
      </h2>
      <h2 className="text-lg font-light text-gray-400 tracking-wide">
        Designed & Developed By{" "}
        <Link href="https://satyam-portfolio-five.vercel.app" target="_blank">
          <b className="text-white font-extrabold underline">Satyam Maurya</b>
        </Link>
      </h2>
    </footer>
  );
};

export default Footer;
