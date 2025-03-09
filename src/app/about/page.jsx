"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeInAnimation = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const About = () => {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-blue-100 to-red-100"
      initial={{ y: "-400vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="max-w-[700px] mx-auto text-center pt-12 ">
        <div className="p-4 flex flex-col gap-20 lg:gap-32 xl:gap-52 ">
          {/* BIOGRAPHY */}
          <div className="flex flex-col justify-center items-center gap-12 xl:gap-10">
            {/* IMAGE */}
            <Image
              src="/myImage.jpg"
              alt="Profile Picture"
              height={100}
              width={100}
              className="rounded-full h-40 w-40 object-cover object-center"
            />
            {/* TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* DESCRIPTION */}
            <p className="text-xl px-4">
              As a fullstack developer and UI developer, I'm dedicated to
              creating seamless digital experiences. I focus on user-centric
              design principles to craft elegant interfaces that blend
              aesthetics with functionality. My passion lies in shaping the
              digital landscape with purpose and innovation.
            </p>
            {/* QUOTE */}
            <span className="italic">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </span>
            {/* SCROLL SVG */}
            <motion.svg
            initial={{opacity:0.2,y:0}}
            animate={{opacity:1,y:"10px"}}
            transition={{repeat:Infinity,duration:3,ease:"easeInOut"}}
              width="70px"
              height="50px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V11"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M10.5 8.5C10.5 7.67157 11.1716 7 12 7C12.8284 7 13.5 7.67157 13.5 8.5V10.5C13.5 11.3284 12.8284 12 12 12C11.1716 12 10.5 11.3284 10.5 10.5V8.5Z"
                stroke="#1C274C"
                strokeWidth="1.5"
              />
              <path
                d="M12 2V7"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </motion.svg>
          </div>

          {/* SKILLS */}
          <div className="flex flex-col gap-24 justify-center items-center">
            <h1 className="font-bold text-2xl">SKILLS</h1>
            <div className="flex gap-6 flex-wrap justify-center">
              {[
                "HTML",
                "CSS",
                "Javascript",
                "React.js",
                "Next Js",
                "Node.js",
                "Tailwind CSS",
                "Bootstrap",
                "Express.js",
                "MongoDB",
                "SQL",
                "Framer Motion",
                "GSAP",
                "Redux",
                "WebGL",
                "Git",
                "Github",
                "Figma",
                "Vs code",
                "Postman",
              ].map((skill) => (
                <motion.div
                  variants={fadeInAnimation}
                  initial="initial"
                  whileInView="animate"
                  viewport={true}
                  key={skill}
                  className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
            {/* SCROLL SVG */}
            <motion.svg
            initial={{opacity:0.2,y:0}}
            animate={{opacity:1,y:"10px"}}
            transition={{repeat:Infinity,duration:3,ease:"easeInOut"}}
              width="70px"
              height="50px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V11"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M10.5 8.5C10.5 7.67157 11.1716 7 12 7C12.8284 7 13.5 7.67157 13.5 8.5V10.5C13.5 11.3284 12.8284 12 12 12C11.1716 12 10.5 11.3284 10.5 10.5V8.5Z"
                stroke="#1C274C"
                strokeWidth="1.5"
              />
              <path
                d="M12 2V7"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </motion.svg>
          </div>

          {/* EXPERIENCE */}
          <div className="flex flex-col justify-center pb-28">
            {/* ECPERIENCE TITLE */}
            <h1 className="font-bold text-2xl pb-20">EXPERIENCE</h1>

            {/* EXPERIENCE LIST */}
            <div className="">
              {/* LIST ITEM */}
              <div className="flex justify-between h-48 ">
                {/* LEFT */}
                <div className="w-1/3">
                  {/* TRAINING */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Geeks for geeks
                  </div>
                  {/* DESCRIPTION */}
                  <div className="p-3 text-sm italic">
                    I have done training in Geek for Geeks for a full stack
                    developer
                  </div>
                  {/* DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2025 - present
                  </div>
                  {/* COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    GFG
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="h-full w-1 bg-gray-600 rounded relative">
                    {/* CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className=" w-1/3"></div>
              </div>
            </div>

            <div className="">
              {/* LIST ITEM */}
              <div className="flex justify-between h-48 ">
                {/* LEFT */}
                <div className="w-1/3"></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="h-full w-1 bg-gray-600 rounded relative">
                    {/* CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className=" w-1/3">
                  {/* TRAINING */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Geeks for geeks
                  </div>
                  {/* DESCRIPTION */}
                  <div className="p-3 text-sm italic">
                    I have done training in Geek for Geeks for a full stack
                    developer
                  </div>
                  {/* DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2025 - present
                  </div>
                  {/* COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    GFG
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              {/* LIST ITEM */}
              <div className="flex justify-between h-48 ">
                {/* LEFT */}
                <div className="w-1/3">
                  {/* TRAINING */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Geeks for geeks
                  </div>
                  {/* DESCRIPTION */}
                  <div className="p-3 text-sm italic">
                    I have done training in Geek for Geeks for a full stack
                    developer
                  </div>
                  {/* DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2025 - present
                  </div>
                  {/* COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    GFG
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="h-full w-1 bg-gray-600 rounded relative">
                    {/* CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className=" w-1/3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
