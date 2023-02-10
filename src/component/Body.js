import React, { useState, useEffect } from "react";
import { data } from "./constants.js";
import { BodyContent } from "./RestaurentCard.js";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import { Data } from "../utils/helper";

// function Data(search, restaurant) {
//   let result = restaurant.filter((d) =>
//     d.data.name.toLowerCase().includes(search.toLowerCase())
//   );
//   return result;
// }
export const Body = () => {
  const [newData, setNewData] = useState([]);
  // const [searchResult, setSearchResult] = useState([]);
  const [restaurant, setRestaurant] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7570623&lng=75.8821865&page_type=DESKTOP_WEB_LISTING"
      );
      let apiData = await response.json();

      // console.log("this is from useEffect",a1[0].data);
      let v1 = apiData?.data?.cards[2]?.data?.data?.cards;
      setNewData(v1);
      setRestaurant(v1);
      //   // console.log("new data",newData)
      //  let a= newData.map((value)=> value)
    }
    fetchData();
  }, []);
  //  console.log(newData[0].data)
  //  console.log("search result", searchResult)
  //  console.log(newData)
  return (
    <>
      <div className="flex justify-center">
        <input
          className="p-1 m-2 border border-black rounded-md"
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="submit"
          className="p-1 m-2 bg-green-600 text-white rounded-md"
          onClick={() => {
            let a = Data(search, restaurant);
            setNewData(a);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap">
        {newData.length === 0 ? (
          search.length > 0 ? (
            <div>No items found</div>
          ) : (
            <Shimmer />
          )
        ) : (
          newData.map((value) => {
            return (
              <Link
                to={"RestaurentMenu/" + value?.data?.id}
                key={value?.data?.id}
              >
                <BodyContent
                  restro={value?.data}
                // key={value.data.id}
                />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};
