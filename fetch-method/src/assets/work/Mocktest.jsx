import React, { useEffect, useState } from "react";

const Mocktest = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    fetch("https://jsonplaceholder.typicode.com/comments")     
      .then((response) => response.json())
      .then((result) => {
        setPosts(result);
      });
  }, []); // The empty dependency array ensures this effect runs only once, when the component mounts

  return (
    <div>
      <div >
        <div className="main">
          {posts.map((data) => {
            return (
              <div id="child-div" key={data.id}> {/* Don't forget to add a key to each mapped element */ }
                <h1>ID : {data.id}</h1>
                <p>Name :{data.name}</p>
                <h3> Email  : <p>{data.email}</p></h3>
               
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Mocktest;
