import axios from 'axios'
import React from 'react'
import Post from './Post'
import { Link } from 'react-router-dom'
import './Posts.css'

const Posts = ({ postsData, setPostsData, onDeletePost }) => {
  return (
    <div className="flexContainer">
      {postsData.map((post) => (
        <div key={post.id} className="postContainer">
          <Link to={`/posts/${post.id}`} className="postLink">
            <Post
              key={post.id}
              id={post.id}
              title={post.title}
              author={post.userEmail}
            />
          </Link>
          <button className="deleteButton" onClick={() => onDeletePost(post.id)}>Delete  </button>
        </div>
      ))}
    </div>
  )
}

export default Posts
