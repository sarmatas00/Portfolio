import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="w-full xs:w-[250px]">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} className="w-16 h-16 object-contain" alt={title} />
          <h3 className="text-white text-center font-bold text-[20px]">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", 0.1, 1)}
        className="mt-4 text-secondary max-w-3xl leading-[30px] text-[17px]"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Diam in arcu cursus
        euismod quis viverra nibh. Nunc aliquet bibendum enim facilisis gravida
        neque convallis a cras. Sagittis purus sit amet volutpat Consequat
        mauris. Duis ultricies lacus sed turpis tincidunt id. Consequat interdum
        varius sit amet mattis vulputate. Enim sed faucibus turpis in eu.
        Ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
