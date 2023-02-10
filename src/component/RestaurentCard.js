import React, { useState } from "react";

export const BodyContent = (props) => {
  const { name, cloudinaryImageId, lastMileTravel, totalRatingsString } =
    props?.restro;
  // console.log(props.restro)
  return (
    <>
      <div className="w-44 m-16 border border-black shadow-lg " >
        {/* <h1>{props.restro}</h1> */}
        <img
          src={`https://res.cloudinary.com/swiggy/image/upload/${cloudinaryImageId}.jpg`}
          alt="Restaurant Image"
        />
        <h5>{name}</h5>
        <p>{lastMileTravel}</p>
        <p>Rating : {totalRatingsString}</p>
      </div>

    </>
  );
};
