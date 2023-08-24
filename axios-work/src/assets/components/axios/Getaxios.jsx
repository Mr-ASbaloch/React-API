import Axios from "axios";
import React, { useEffect, useState } from "react";

const Getaxios = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setData(response.data);
    }),
      [];
  });
  return (
    <div>
      <div>Get Data from api w using axios</div>
      {
      data.map((item ,index) => {
        // const {id, title}= item;
        return (
          <div key={index} >
            <h1 >{item.id}</h1>
            <h2>{item.title}</h2>
          </div>
        );
      })
      }
    </div>
  );
};

export default Getaxios;
