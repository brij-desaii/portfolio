import React from "react";
import Image from "next/image";
import AboutImg from "../public/assets/about1-crop.jpg";
import Link from "next/link";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I am</h2>
          <p className="py-2 text-gray-600">
            I&apos;m pursuing my integrated Mtech in Computer Science at IIIT
            Bangalore and am currently in the 3rd year. I&apos;m passionate
            about learning new technologies and understand there is more than
            one way to accomplish a task. Though I am most proficient in
            building front-end applications using HTML, CSS, Javascript, and
            React, I am a quick learner and can pick up new tech stacks as
            needed. I believe that being a great developer is not using one
            specific language, but choosing the best tool for the job.
          </p>
          <p className="py-2 text-gray-600">
            I&apos;m an avid traveller and a trekker. I&apos;m passionate about
            exploring new places, meeting new people, and experiencing different
            cultures. Whether it&apos;s hiking through mountains, trying new
            foods, or running a marathon, I&apos;m always up for a new
            adventure.
          </p>
          <Link href="/#projects" scroll={false}>
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image className="rounded-xl" src={AboutImg} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
