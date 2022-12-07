import { motion } from "framer-motion";

import React from "react";
import VegetarianRecipes from "../components/VegetarianRecipes";
import PopularRecipes from "../components/PopularRecipes";

function Home() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <VegetarianRecipes />
      <PopularRecipes />
    </motion.div>
  );
}

export default Home;
