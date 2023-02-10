import React, { useState } from "react";

 const CartItem = ({name, cloudinaryImageId, description, price}) => {
  return (
    <>
      <div className="w-44 m-16 border border-black shadow-lg" >
        <img
          src={`https://res.cloudinary.com/swiggy/image/upload/${cloudinaryImageId}.jpg`}
          alt="Restaurant Image"
        />
        <h5>{name}</h5>
        <p>{description}</p>
        <p>Price: {price/100}</p>
      </div>

    </>
  );
};

export default CartItem;