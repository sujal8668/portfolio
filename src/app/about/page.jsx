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
      <div className="max-w-[700px] mx-auto text-center pt-12">
        <div className="p-4 flex flex-col gap-20 lg:gap-32 xl:gap-52">
          {/* BIOGRAPHY */}
          <div className="flex flex-col justify-center items-center gap-12 xl:gap-10">
            <Image
              src="/myImage.jpg"
              alt="Profile Picture"
              height={100}
              width={100}
              className="rounded-full h-40 w-40 object-cover object-center"
            />
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            <p className="text-xl px-4">
              As a fullstack developer and UI developer, I&apos;m dedicated to
              creating seamless digital experiences. I focus on user-centric
              design principles to craft elegant interfaces that blend
              aesthetics with functionality. My passion lies in shaping the
              digital landscape with purpose and innovation.
            </p>
            <span className="italic">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </span>
          </div>

          {/* SKILLS */}
          <div className="flex flex-col gap-24 justify-center items-center">
            <h1 className="font-bold text-2xl">SKILLS</h1>
            <div className="flex gap-6 flex-wrap justify-center">
              {["HTML", "CSS", "Javascript", "React.js", "Next.js", "Node.js", "Tailwind CSS", "Bootstrap", "Express.js", "MongoDB", "SQL", "Framer Motion", "GSAP", "Redux", "WebGL", "Git", "Github", "Figma", "VS Code", "Postman"].map((skill) => (
                <motion.div
                  key={skill}
                  variants={fadeInAnimation}
                  initial="initial"
                  whileInView="animate"
                  className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>

          {/* EXPERIENCE */}
          <div className="flex flex-col justify-center pb-28">
            <h1 className="font-bold text-2xl pb-20">EXPERIENCE</h1>
            {[...Array(3)].map((_, index) => (
              <div key={index} className="flex justify-between h-48">
                {index % 2 === 0 ? (
                  <div className="w-1/3">
                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                      Geeks for Geeks
                    </div>
                    <div className="p-3 text-sm italic">
                      I have done training in Geeks for Geeks for a full-stack developer.
                    </div>
                    <div className="p-3 text-red-400 text-sm font-semibold">2025 - Present</div>
                    <div className="p-1 rounded bg-white text-sm font-semibold w-fit">GFG</div>
                  </div>
                ) : (
                  <div className="w-1/3"></div>
                )}
                <div className="w-1/6 flex justify-center">
                  <div className="h-full w-1 bg-gray-600 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {index % 2 !== 0 ? (
                  <div className="w-1/3">
                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                      Geeks for Geeks
                    </div>
                    <div className="p-3 text-sm italic">
                      I have done training in Geeks for Geeks for a full-stack developer.
                    </div>
                    <div className="p-3 text-red-400 text-sm font-semibold">2025 - Present</div>
                    <div className="p-1 rounded bg-white text-sm font-semibold w-fit">GFG</div>
                  </div>
                ) : (
                  <div className="w-1/3"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
