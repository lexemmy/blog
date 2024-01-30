import React from 'react';
import './Post.css';

const Post = ({ id, title, author }) => {
  return (
    <div className="post-card">
      <p>Id: {id}</p>
      <p>Title: {title}</p>
      <p>Author: {author}</p>
    </div>
  );
};

export default Post;
