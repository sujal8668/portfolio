"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="w-11/12 max-w-3xl text-center mx-auto h-full flex flex-col items-center justify-center gap-4 leading-8 overflow-x-hidden">
        {/* Profile Image */}
        <div>
          <Image
            src="/myImage.jpg"
            alt="Profile Image"
            height={100}
            width={100}
            className="rounded-full h-40 w-40 object-cover object-center"
          />
        </div>

        {/* Introduction */}
        <h3 className="text-xl md:text-2xl mb-3 flex gap-2 font-semibold">
          Hi! I am Sujal Parmar
          <Image src="/hand-icon.png" alt="Hand Icon" height={20} width={25} />
        </h3>

        {/* Title */}
        <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-bold">
          Full Stack Web Developer
        </h1>

        {/* Description */}
        <p className="max-w-2xl mx-auto">
          I am a full stack web developer from Uttarakhand, India, with 1 year
          of experience in multiple companies like ..............
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <a
            href="/contact"
            className="px-10 py-3 bg-black text-white rounded-[10px] hover:bg-gray-900 transition"
          >
            Contact Me
          </a>

          <a
            href="/Resume.pdf"
            download
            className="px-7 py-3 border rounded-[10px] border-gray-500 flex items-center gap-2 hover:bg-gray-100 transition"
          >
            My Resume
            <Image
              src="/download-icon.png"
              alt="Download Icon"
              width={17}
              height={24}
            />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
