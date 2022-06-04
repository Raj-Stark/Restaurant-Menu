import React from "react";

const Categories = ({ filterItems, categories }) => {
  return (
    <div className="btn-container">
      {categories.map((itemCategory, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => {
              filterItems(itemCategory);
            }}
          >
            {itemCategory}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
