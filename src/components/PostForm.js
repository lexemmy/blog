import React, { useState, useRef } from 'react'
import './PostForm.css'

const PostForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('')
  const [userId, setUserId] = useState('')

  const formRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = formRef.current
    const data = {
      title: form['title'].value,
      body: form['body'].value,
      author: form['author'].value,
      userId: form['userId'].value,
    }
    onSubmit(data)
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="form">
      <label className="label">
        Title:
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input"
        />
      </label>

      <label className="label">
        Body:
        <textarea
          name="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="input textarea"
        />
      </label>

      <label className="label">
        Author:
        <input
          type="text"
          name="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="input"
        />
      </label>

      <label className="label">
        UserId:
        <input
          type="text"
          name="userId"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
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
