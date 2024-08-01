import React from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import { ComputersCanvas } from "./canvas";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl
    mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            <Typewriter
              options={{
                autoStart: true,
                loop: false,
                delay: 75,
                cursor: "",
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    'Hey, I\'m <span style="color: #915eff;">Spyros </span>'
                  )
                  .deleteChars(1)
                  .start();
              }}
            />
          </h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            <Typewriter
              options={{
                autoStart: true,
                loop: false,
                delay: 75,
                cursor: "",
              }}
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(1500)
                  .typeString(
                    'I craft dynamic web applications <br className="sm:block hidden" /> and user experiences '
                  )
                  .deleteChars(1)
                  .start();
              }}
            />
          </p>
        </div>
      </div>
      <ComputersCanvas />

      <div className="absolute xs:bottom-2 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[32px] h-[60px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2 h-2 rounded-full mb-1 bg-secondary"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
