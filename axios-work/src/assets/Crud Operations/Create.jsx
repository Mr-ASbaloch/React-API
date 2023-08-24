import axios from "axios";
import React, { useState } from "react";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");


  const resetForm = ()=>{
     setAge ("")
     setEmail ( "")
     setName (" ")
  }

  const formHandler = (e) => {
    e.preventDefault();
    axios
      .post("https://64e70013b0fd9648b78f2911.mockapi.io/crud" ,{name , email , age})
      .then((res) => {
        console.log(Response);
        resetForm()
        alert (`welcome Mr ${name}` )
     
      });
   
  };
  return (
    <div>
      <section className="text-gray-600 body-font ">
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font capitalize mb-4 text-gray-900">
              Create data
            </h1>
          </div>
          <form className="lg:w-1/2 md:w-2/3 mx-auto flex flex-col" onSubmit={formHandler}>
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
                    name="age"
                    value={age}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    onChange={(e) => {
                      setAge(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div className="p-2 w-full">
                <button
                  type="submit"
                  className=" mx-auto text-center text-white bg-indigo-500 border-0 py-2 px-10 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                 
                >
                  submit
                </button>
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
