import React from 'react';

const Category = ({ category }) => {

    const { logo, category_name, availability } = category;

    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure>
                <img src={logo} alt={category_name} className="rounded-xl w-14 h-14" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{category_name}</h2>
                <p>{availability}</p>
            </div>
        </div>
    );
};

export default Category;