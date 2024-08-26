import React from "react";
import { STUDIES } from "../constants";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Education
      </motion.h2>
      <div className="flex justify-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-xl lg:w-3/4 "
        >
          {STUDIES.map((study, index) => (
            <div key={index}>
              <h3>{study.College}</h3>
              <p>Course of Study: {study.Course}</p>
              <p>Duration: {study.year}</p>
              <p>Grade: {study.Grade}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Education;
