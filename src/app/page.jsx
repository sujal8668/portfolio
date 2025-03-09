"use client";
import Image from "next/image";
import { motion } from "framer-motion";
const Homepage = () => {
  return (
    <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}} >
      <div className="w-11/12 max-w-3xl text-center mx-auto h-full flex flex-col items-center justify-center gap-4 leading-8 overflow-x-hidden">
        <div>
          <Image
            src="/myImage.jpg"
            alt="image"
            height={100}
            width={100}
            className="rounded-full h-40 w-40 object-cover object-center"
          />
        </div>
        <h3 className="text-center text-xl md:text-2xl mb-3 flex gap-2 font-semibold ">
          Hi! I'm Sujal Parmar{" "}
          <Image src="/hand-icon.png" alt="image" height={20} width={25} />
        </h3>
        <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-bold ">
          Full stack web developer
        </h1>
        <p className="max-w-2xl mx-auto">
          I am a ful stack web developer from Uttarakhand, India with 1 year of
          experience in multiple companies like ..............
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <a
            href="/contact"
            className="px-10 py-3 bg-black text-white rounded-[10px] "
          >
            Contact Me
          </a>
          <a
            href="/Resume.pdf"
            download
            className="px-7 py-3 border rounded-[10px] border-gray-500 flex items-center gap-2 "
          >
            My resume <Image src="/download-icon.png" alt="image" width={17} height={24} />{" "}
          </a>
        </div>
      </div>
    </motion.div>
    
    
  );
};

export default Homepage;
