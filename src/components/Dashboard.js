import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import PostForm from './PostForm'
import Posts from './Posts'
import PostContext, { usePostContext } from './PostContext'
import PostDetails from './PostDetails'

const Dashboard = () => {
  const [postsData, setPostsData] = useState([])
  const { selectedPostId, setSelectedPostId } = usePostContext()

  const handleCreatePost = async (postData) => {
    console.log(postData)
    try {
      const response = await axios.post(
        'http://localhost:8080/api/v1/posts',
        postData
      )

      if (response.status === 200) {
        const newPost = response.data
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
      const response = await axios.delete(
        `http://localhost:8080/api/v1/posts/${postId}`
      )

      if (response.status === 200) {
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

  const handlePostClick = async (postId) => {
    const existingPost = postsData.find((post) => post.id === postId)

    if (existingPost) {
      setSelectedPostId(postId)
    }
  }

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/posts')
        const data = response.data
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
      <PostContext.Provider value={selectedPostId}>
        <Posts
          postsData={postsData}
          setPostsData={setPostsData}
          onDeletePost={handleDeletePost}
          onPostClick={handlePostClick}
        />
        {selectedPostId && (
          <div>
            <h2>Post Details</h2>
            <PostDetails />
          </div>
        )}
      </PostContext.Provider>

      <PostForm onSubmit={handleCreatePost} />
    </div>
  )
}

export default Dashboard
