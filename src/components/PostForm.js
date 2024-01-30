import React, { useState } from 'react'
import './PostForm.css'

const PostForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('')
  const [userId, setuserId] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ title, body, author, userId })
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <label className="label">
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input"
        />
      </label>

      <label className="label">
        Body:
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="input textarea"
        />
      </label>

      <label className="label">
        Author:
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="input"
        />
      </label>

      <label className="label">
        UserId:
        <input
          type="text"
          value={userId}
          onChange={(e) => setuserId(e.target.value)}
          className="input"
        />
      </label>

      <button type="submit" className="button">
        Create Post
      </button>
    </form>
  )
}

export default PostForm
