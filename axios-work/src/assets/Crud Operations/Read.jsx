import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {BiUserPin} from 'react-icons/bi'

const Read = () => {
  const [tabledata, setTableData] = useState([]);

  useEffect(() => {
    axios
      .get("https://64e70013b0fd9648b78f2911.mockapi.io/crud ")
      .then((resp) => {
        setTableData(resp.data);
      })
      .catch((error) => {
        console.log(error);
      }),
      [];
  });
  return (
    <div className="main w-full md:mt-11    ">
        <h1 className="text-center font-bold text-3xl underline mb-5 capitalize text-[blue]">See User Data</h1>
    <Link to={'/create'} >
    <button className="text-center flex items-center gap-2  md:align-middle md:mx-[20%]  text-white bg-indigo-950 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Create Data <BiUserPin size={30 }/>
                  </button>
    </Link>
      <table className="border  mt-8 md:mx-[20%]  md:mt-2">
        
          <tr className="mt-3">
           
            <td className="border p-2  font-bold ">ID</td>
            <td className="border p-2 font-bold ">Name</td>
            <td className="border p-2 font-bold ">Email</td>
            <td className="border p-2 font-bold ">Age</td>
        
           
          </tr>
        
        {tabledata.map((item, index) => {
          const { id, name, email, age } = item;
          return (
            <>
              {" "}
              <tr className="mt-3" key={index}>
                <td className="border px-1 ">{id}</td>
                <td className="border px-1 ">{name}</td>
                <td className="border px-1 ">{email}</td>
                <td className="border px-1">{age}</td>
              </tr>
            </>
          );
        })}
      </table>
    </div>
  );
};

export default Read;
