import React from "react";
import { motion } from "framer-motion";
import { varWrapBoth } from "../../utilities";
import { CategoryItem } from "..";

const CategoryList = ({ stateCategories, deleteCategory }) => {
  if (!stateCategories.length) return null;

  return (
    <motion.div variants={varWrapBoth}>
      {stateCategories.map((item, index) => (
        <CategoryItem key={index} item={item} deleteCategory={deleteCategory} />
      ))}
    </motion.div>
  );
};

export default CategoryList;
