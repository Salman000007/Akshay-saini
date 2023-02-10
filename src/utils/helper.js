import { useState } from "react";

export function Data(search, restaurant) {
  console.log("console at filter");
  let result = restaurant.filter((d) =>
    d.data.name.toLowerCase().includes(search.toLowerCase())
  );
  return result;
}
