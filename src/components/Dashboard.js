import React, { useState } from 'react'
import Posts, { initialPostsData } from './Posts'

const Dashboard = () => {
  const [newTitle, setNewTitle] = useState('')
  const [postsData, setPostsData] = useState(initialPostsData)
  const [firstPostTitle, setFirstPostTitle] = useState(
    initialPostsData[0].title
  )

  const updateFirstPostTitle = () => {
    setPostsData((prevPostsData) => {
      const updatedPostsData = [...prevPostsData]
      updatedPostsData[0].title = newTitle
      return updatedPostsData
    })
    setFirstPostTitle(newTitle)
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <input
        type="text"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <button onClick={updateFirstPostTitle}>Update First Post Title</button>
      <Posts postsData={postsData} setPostsData={setPostsData} />
    </div>
  )
}

export default Dashboard
