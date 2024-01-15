import React from "react";

const {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} = require("react-icons/bs");

export default function Foot() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 px-24 py-6 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="mb-8 md:mb-0">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              alt="Flowbite Logo"
              className="w-16 px-4h-auto"
            />
            <div className="flex space-x-6 py-6">
              <a href="#" className="text-white hover:text-gray-400">
                <BsFacebook />
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <BsInstagram />
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <BsTwitter />
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <BsGithub />
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <BsDribbble />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 md:grid-cols-1 lg:grid-cols-3">
            <div>
              <h5 className="font-semibold mb-2">About</h5>
              <ul>
                <li>
                  <a href="#" className="hover:underline">
                    Flowbite
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Tailwind CSS
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-2">Follow Us</h5>
              <ul>
                <li>
                  <a href="#" className="hover:underline">
                    Github
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-2">Legal</h5>
              <ul>
                <li>
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
