import React, { useEffect, useState } from "react";

const Mocktest = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    fetch("https://jsonplaceholder.typicode.com/posts")     
      .then((response) => response.json())
      .then((result) => {
        setPosts(result);
      });
  }, []); // The empty dependency array ensures this effect runs only once, when the component mounts

  return (
    <div>
      <div className="main">
        <div>
          {posts.map((data) => {
            return (
              <div key={data.id}> {/* Don't forget to add a key to each mapped element */}
                <h1>ID : {data.id}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Mocktest;
