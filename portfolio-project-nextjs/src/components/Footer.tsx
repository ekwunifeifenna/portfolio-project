import React from "react";
import { FaLinkedin, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="px-6 md:px-0 mt-12 text-white/70 py-8 max-w-[1000px] mx-auto border-t border-gray-700 pt-4 flex justify-between items-center">


        <h1 className="text-2xl font-bold">Ifenna Ekwunife</h1>
        <div className="flex space-x-6 mt-4">

            <a href="#" className="hover:text-gray-300">
                <FaLinkedin size={30} className="mx-2" />
            </a>
            <a href="#" className="hover:text-gray-300">
                <FaTwitter size={30} className="mx-2" />
            </a>
            <a href="#" className="hover:text-gray-300">
                <FaInstagram size={30} className="mx-2" />
            </a>
        </div>

    </div>
  )
}

export default Footer