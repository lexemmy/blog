import React from 'react'
import Post from './Post'
import './Posts.css'

const Posts = ({ postsData, setPostsData, onDeletePost, onPostClick }) => {
  return (
    <div className="flexContainer">
      {postsData.map((post) => (
        <div key={post.id} className="postContainer">
          {/* Call onPostClick directly when a post is clicked */}
          <div onClick={() => onPostClick(post.id)}>
            <Post
              key={post.id}
              id={post.id}
              title={post.title}
              author={post.userEmail}
            />
          </div>

          <button
            className="deleteButton"
            onClick={() => onDeletePost(post.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}

export default Posts
