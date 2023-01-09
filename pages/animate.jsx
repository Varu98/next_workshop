import React, { useState } from "react";
import { motion } from "framer-motion";
const Animate = () => {
  const [firstToggle, setFirstToggle] = useState(false);
  return (
    <div className="grid grid-cols-[20vw_80vw] h-screen">
      {firstToggle ? (
        <div>
          <motion.div
            className="h-screen bg-purple-600"
            // initial={{ opacity: 1 }}
            animate={firstToggle ? { x: -200 } : { x: 200 }}
            transition={{ duration: 0.7 }}
          />
        </div>
      ) : (
        <div>
          <motion.div
            className="h-screen bg-purple-600"
            // initial={{ opacity: 1 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.7 }}
          />
          <button
            className="bg-orange-500 p-2 rounded-lg"
            onClick={() => {
              setFirstToggle(!firstToggle);
            }}
          >
            Toggle
          </button>
        </div>
      )}
      <div className="flex w-full justify-center items-center">
        <button
          className="bg-orange-500 p-2 rounded-lg"
          onClick={() => {
            setFirstToggle(!firstToggle);
          }}
        >
          Toggle
        </button>
       
      </div>
    </div>
  );
};

export default Animate;
