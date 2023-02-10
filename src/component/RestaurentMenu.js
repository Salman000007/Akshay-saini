import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { additem } from "../utils/cardSlice";
import { useRestro } from "../utils/useRestro";
import Shimmer from "./Shimmer";

const RestaurentMenu = () => {
  // const [restro, setRestro] = useState(null);
  const { id } = useParams();
  // useEffect(() => {
  //   getRestaurent();
  // }, []);
  // async function getRestaurent() {
  //   let data = await fetch(
  //     "https://www.swiggy.com/dapi/menu/v4/full?lat=22.7570623&lng=75.8821865&menuId=" +
  //       id);
  //   let restroDetail = await data.json();
  //   let d = restroDetail.data;
  //   setRestro(d);
  // }
  restro = useRestro(id);
  const dispatch = useDispatch()
  // console.log("RestroMenu", restro);
  const handleChange = (item) => {
      dispatch(additem(item))
  } 
  return (
    <>
      {restro.length == 0 ? (
        <Shimmer />
      ) : (
        <div className="w-44 p-2">
          <div className="card">
            <h2 className="p-1 m-1">{restro.name}</h2>
            <img
              src={`https://res.cloudinary.com/swiggy/image/upload/${restro.cloudinaryImageId}.jpg`}
              alt="Restaurant Image"
            />
            <p>{restro.area}</p>
            <p>{restro.city}</p>
            <p>Ratings: {restro.avgRating}</p>

          </div>

          <div className="menu">
            <ul>
              {Object.values(restro?.menu?.items).map((item) => (<div key={item.id}>{item?.name}
              {/* <li> </li> */}
              <button className="bg-green-100 rounded-md p-1 m-1" onClick={() => handleChange(item)}>Add item</button>
              </div>
              ))}


            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default RestaurentMenu;
