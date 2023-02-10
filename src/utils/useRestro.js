import { useEffect, useState } from "react";

export const useRestro = (id) => {
  const [restro, setRestro] = useState([]);
  useEffect(() => {
    getRestaurent(id);
  }, []);
  async function getRestaurent(id) {
    let data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=22.7570623&lng=75.8821865&menuId=" +
        id
    );
    // console.log(data);
    let restroDetail = await data?.json();
    let d = restroDetail?.data;
    setRestro(d);
  }
  return restro;
};
