// Import React, useState, useEffect, and axios
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Define the API endpoint
const API_URL = 'https://jsonplaceholder.typicode.com/posts';

// Define the component
const App = () => {
  // Use useState to store the posts data
  const [posts, setPosts] = useState([]);

  // Use useEffect to fetch the data when the component mounts
  useEffect(() => {
    // Define the async function that makes the request
    const fetchData = async () => {
      // Use axios to get the data from the API
      const { data } = await axios.get(API_URL);
      // Update the state with the data
      setPosts(data);
    };
    // Invoke the function
    fetchData();
  }, []); // Pass an empty array as the second argument to run only once
    // Return the JSX to render
  return (
    <div className="wrapper">
    
      {posts.length > 0 ? (
        <div className="content">
          {posts.map((post) => (
            <div className="post" key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="loading">Loading...</p>
      )}
    </div>
  );
};

// Export the component
export default App;