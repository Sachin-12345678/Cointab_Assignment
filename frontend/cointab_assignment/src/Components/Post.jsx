import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Post({ userId }) {
  const [posts, setPosts] = useState({});
  const id=useParams()
  console.log(id);
  console.log(posts);
  const getPostsByUserId = async () => {
    try {
      const response = await axios.get(`https://long-deer-petticoat.cyclic.app/posts/${id.id}`);
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts: ', error);
    }
  };

  return (
    <div>
      <h1>Posts for User {id.id}</h1>
      <button onClick={getPostsByUserId}>Bulk Add</button>
     
        <div>
          <p>Title: {posts.title}</p>
          <p>Body: {posts.body}</p>
        </div>
      
      <button>Download in Excel</button>
    </div>
  );
};

export default Post;



