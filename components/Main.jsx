import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineMail,
} from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            LET'S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-gray-700">
            Hi I'm <span className="text-[#5651e5]">Brij</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Computer Science Student</h1>
          <h1 className="pb-2 text-gray-700">@ IIIT Bangalore</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I'm focused on building responsive front-end web applications
            integrating back-end technologies.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/brij-desai-b9a409231/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineLinkedin size={22} />
              </div>
            </a>
            <a
              href="https://github.com/brij-desaii"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub size={22} />
              </div>
            </a>
            <a
              href="https://instagram.com/brij_desaii?igshid=MzNlNGNkZWQ4Mg=="
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineInstagram size={22} />
              </div>
            </a>
            <a
              href="mailto:brijdesai2003@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail size={22} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
