import React, { useEffect, useState } from 'react'
import PostForm from './PostForm'
import Posts from './Posts'

const Dashboard = () => {
  const [postsData, setPostsData] = useState([''])
  const handleCreatePost = async (postData) => {
    console.log(postData)
    try {
      // Send a request to your server to create a new post
      const response = await fetch('http://localhost:8080/api/v1/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      })

      if (response.ok) {
        const newPost = await response.json()
        setPostsData([...postsData, newPost])
        console.log('Post created successfully')
      } else {
        console.error('Error creating post:', response.statusText)
      }
    } catch (error) {
      console.error('Error creating post:', error.message)
    }
  }

  const handleDeletePost = async (postId) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/v1/posts/${postId}`,
        {
          method: 'DELETE',
        }
      )

      if (response.ok) {
        const updatedPosts = postsData.filter((post) => post.id !== postId)
        setPostsData(updatedPosts)
        console.log('Post deleted successfully')
      } else {
        console.error('Error deleting post:', response.statusText)
      }
    } catch (error) {
      console.error('Error deleting post:', error.message)
    }
  }
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/v1/posts')
        const data = await response.json()
        setPostsData(data)
      } catch (error) {
        console.error('Error fetching posts:', error)
      }
    }
    fetchPosts()
  }, [])

  return (
    <div>
      <h1>Dashboard</h1>
      <Posts postsData={postsData} setPostsData={setPostsData} onDeletePost={handleDeletePost}/>
      <PostForm onSubmit={handleCreatePost} />
    </div>
  )
}

export default Dashboard
