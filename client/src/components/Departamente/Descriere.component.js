import React from "react";
import { motion, AnimatePresence } from "framer-motion/dist/framer-motion";

const Descriere = () => {
  return (
    <div className="">
      <motion.div className=" content-center justify-center mt-32 mb-auto ">
        <div className="md:h-96 md:w-[60%] border border-black mx-auto mt-10 rounded-lg shadow-lg overflow-hidden">
          <motion.h1 className="text-4xl text-white bg-blue-600 p-6">
            Descriere departament
          </motion.h1>
          <motion.p className="text-gray-700 p-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            convallis justo nec lectus tristique, vel vehicula nunc dictum.
            Praesent ullamcorper purus eu libero pharetra, nec aliquet nisl
            dignissim. Aenean eget ex sed neque hendrerit scelerisque.
          </motion.p>
        </div>
        <div className="md:h-auto md:w-[40%] md:ml-auto md:mr-auto text-center mt-10">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-black text-xl md:text-2xl font-bold p-4"
          >
            Sedinta ora 15:00 Sala 15A, Corp A, ETTI
          </motion.h2>
        </div>
      </motion.div>
    </div>
  );
};

export default Descriere;
