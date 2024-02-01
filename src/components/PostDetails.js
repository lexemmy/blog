import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import PostContext from './PostContext';

const PostDetails = () => {
  const selectedPostId = useContext(PostContext);
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/v1/posts/${selectedPostId}`);
        const data = response.data;
        setPost(data);
      } catch (error) {
        console.error('Error fetching post details:', error);
      }
    };

    if (selectedPostId) {
      fetchPostDetails();
    }
  }, [selectedPostId]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>{post.author}</p>
    </div>
  );
};

export default PostDetails;