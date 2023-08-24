import axios from "axios";
import React, { useState } from "react";
import { Link ,useNavigate } from "react-router-dom";
import {CiRead} from 'react-icons/ci'
import {BsDatabaseFillAdd} from 'react-icons/bs'

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const navigate =useNavigate ()

  const resetForm = () => {
    setAge("");
    setEmail("");
    setName(" ");
  };

  const formHandler = (e) => {
    e.preventDefault();
    axios
      .post("https://64e70013b0fd9648b78f2911.mockapi.io/crud", {
        name,
        email,
        age,
      })
      .then((Response) => {
      
        resetForm();
        alert(`welcome Mr ${name}`);
        navigate('/')
      });
  };
  return (
    <div>
      <section className="text-gray-600 body-font ">
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <div className="flex flex-col text-center w-full mb-12 ">
          <h1 className="text-center font-bold text-3xl underline mb-5 capitalize text-[blue]">See User Data</h1>
 
          </div>
          <form 
            className="lg:w-1/2 md:w-2/3 mx-auto flex flex-col"
            onSubmit={formHandler}
          >
            <div className="flex flex-col w-full -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required={true}
                    name="name"
                    value={name}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required={true}
                    value={email}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Age
                  </label>
                  <input
                    type="number"
                    id="age"
                    required={true}
                    name="age"
                    value={age}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    onChange={(e) => {
                      setAge(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div className="p-2 w-full ">
                <button
                  type="submit"

              
                  className="m-1  justify-center gap-2 text-white w-[50%] capitalize flex items-center  bg-indigo-500 border-0 py-2 px-10 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                    submit
                  <BsDatabaseFillAdd/>
                
                </button>

                <Link to={"/"}>
                  <button className="m-1  text-center justify-center   flex items-center w-[50%] gap-2 text-white bg-indigo-950 border-0 py-2  focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Read Data <CiRead size={25} />
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
        <div>
          {name}
          <br />
          {age}
          <br />
          {email}
        </div>
      </section>
    </div>
  );
};

export default Create;
