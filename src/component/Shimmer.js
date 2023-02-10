import React from "react";

const Shimmer = () => {
    return (
        <>
 {Array(10).fill("").map((v, i) => <div className="shimmer" key={i}></div>)}
        </>
    )
}

export default Shimmer;