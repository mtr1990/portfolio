import React from "react";
import { CategoryItem } from ".";

const CategoryList = ({ stateCategories, deleteCategory }) => {
  if (!stateCategories.length) return null;

  return stateCategories.map((item, index) => (
    <CategoryItem key={index} item={item} deleteCategory={deleteCategory} />
  ));
};

export default CategoryList;
