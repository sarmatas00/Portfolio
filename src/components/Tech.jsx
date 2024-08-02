import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../utils/motion";
import { styles } from "../style";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My technology arsenal</p>
        <h2 className={styles.sectionHeadText}>Skills.</h2>
      </motion.div>

      <div className="w-[100%] flex flex-wrap mt-20 gap-12 justify-center">
        {technologies.map((technology, index) => (
          <Tilt>
            <motion.div
              variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
              key={`skillSet-${index}`}
              className="w-[100%] max-w-[500px] bg-[rgba(17,25,40,0.83)] rounded-[16px]
         px-9 border-[rgba(255,255,255,0.125)] py-[18px] md:max-w-[400px]
         md:px-9 md:py-[10px] sm:max-w-[330px] sm:px-9 sm:py-[10px]"
            >
              <div className="font-semibold mb-5 text-2xl text-center text-white">
                {technology.section}
              </div>
              <div className="flex justify-center flex-wrap gap-3 mb-5">
                {technology.skills.map((item, idx) => (
                  <div
                    key={`skill-${index}-${idx}`}
                    className="text-base font-normal text-secondary border border-secondary
                rounded-xl p-3 flex items-center justify-center gap-2 md:text-sm md:p-2 sm:text-sm sm:p-1.5"
                  >
                    <img className="w-6 h-6" src={item.icon} />
                    {item.name}
                  </div>
                ))}
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
