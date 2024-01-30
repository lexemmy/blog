
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const PostDetails = () => {
  const { postId } = useParams()
  const [post, setPost] = useState(null)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/v1/posts/${postId}`
        )
        console.log(response)
        const data = await response.json()
        setPost(data)
      } catch (error) {
        console.error('Error fetching post:', error)
      }
    }

    fetchPost()
  }, [postId])

  if (!post) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>{post.author}</p>
    </div>
  )
}

export default PostDetails
