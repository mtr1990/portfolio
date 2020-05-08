import React from "react";
import { motion } from "framer-motion";
import { varWrapBoth } from "../../utilities";
import { useSelector } from "react-redux";
import { CategoryItem } from ".";

function CategoryList() {
  const categories = useSelector((state) => state.categories.categories);
  if (categories.length === 0) return null;

  return (
    <motion.div variants={varWrapBoth}>
      {categories.map((item, index) => (
        <CategoryItem key={index} item={item} />
      ))}
    </motion.div>
  );
}

export default CategoryList;
