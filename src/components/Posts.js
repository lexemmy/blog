import React from 'react';
import Post from './Post';

export const initialPostsData = [
  { id: 111, title: 'Happiness', author: 'John' },
  { id: 112, title: 'MIU', author: 'Dean' },
  { id: 113, title: 'Enjoy Life', author: 'Jasmine' },
];

const Posts = ({ postsData, setPostsData }) => {
  const updatePostTitle = (id, newTitle) => {
    setPostsData((prevPostsData) => {
      return prevPostsData.map((post) =>
        post.id === id ? { ...post, title: newTitle } : post
      );
    });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      {postsData.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          author={post.author}
          updatePostTitle={updatePostTitle}
        />
      ))}
    </div>
  );
};

export default Posts;
