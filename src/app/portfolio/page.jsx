"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "MERN E-Commerce",
    desc: "This website provides a seamless shopping experience with a modern, responsive, and user-friendly interface. It contains an admin panel, searching features, filters, product details, a shopping cart, user authentication, product listings, and a great UI/UX.",
    img: "/Screenshot (197).png",
    link: "https://5leaf-frontend.vercel.app/",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Award Winning Site",
    desc: "An award-winning website made in React and JavaScript featuring scroll-based animations, clip-path shaped animations, 3D hover effects, video transitions, smooth UI/UX, and full responsiveness.",
    img: "/Screenshot (255).png",
    link: "https://award-winning-website-main-five.vercel.app/",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Notes App",
    desc: "A sleek and responsive Notes app with a modern UI, designed for quick and organized note-taking. It includes dynamic note creation, color-coded notes, pop-ups, day-night mode, and full responsiveness.",
    img: "/Screenshot (209).png",
    link: "https://notes-app-eta-umber.vercel.app/",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Real-Time Chat App",
    desc: "A real-time chat app with a modern UI, featuring instant messaging, group chats, user authentication, and a smooth user experience.",
    img: "/hq720.jpg",
    link: "https://5leaf-frontend.vercel.app/",
  },
];

const Portfolio = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full "
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div ref={ref} className="h-[600vh] relative">
        <div className="w-full h-[calc(100vh-6rem)] flex items-center justify-center text-6xl md:text-8xl text-center font-bold">
          My Projects
        </div>

        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex flex-col px-8 sm:px-16 md:px-24 lg:px-44 items-center justify-center bg-gradient-to-r from-purple-300 to-red-300 text-center" />
            {items.map((item) => (
              <div
                key={item.id}
                className={`h-screen w-screen flex flex-col px-8 sm:px-16 md:px-24 lg:px-44 items-center justify-center bg-gradient-to-r ${item.color} text-center`}
              >
                <h1 className="text-3xl md:text-5xl font-bold text-white pb-4">
                  {item.title}
                </h1>
                <div className="relative w-full max-w-[500px] h-64 md:h-80">
                  <Image
                    src={item.img}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-lg "
                  />
                </div>
                <p className="text-white text-sm md:text-lg max-w-2xl mt-4">
                  {item.desc}
                </p>
                <Link href={item.link} target="_blank">
                  <button className="mt-4 px-6 py-2 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-gray-200 transition">
                    See Demo
                  </button>
                </Link>
              </div>
            ))}
          </motion.div>
          </div>
        </div>
        <div className=" h-screen flex flex-col gap-15 items-center justify-center text-center">
            <h1 className="text-8xl">Do you have a project?</h1>
            <div className="relative">
              <motion.svg animate={{rotate:360}} transition={{duration:8, ease:"linear",repeat:Infinity}} viewBox="0 0 300 300" className="w-64 h-64 md:w-[500px] md:h-[500px]">
                <defs>
                  <path
                    id="circlePath"
                    d="M 150, 150 m -60, 0 a 60, 60 0 0, 1 120, 0 a 60, 60 0 0,1 -120,0"
                  />
                </defs>
                <text fill="#000">
                  <textPath xlinkHref="#circlePath" className="text-xl" >Full-Stack Developer and UI Designer.</textPath>
                </text>
              </motion.svg>
              <Link
                href="/contact"
                className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex justify-center items-center cursor-pointer "
              >
                Hire Me
              </Link>
            </div>
          </div>
    </motion.div>
  );
};

export default Portfolio;
