import { createContext, useState, useContext } from 'react'

const PostContext = createContext()

export const PostProvider = ({ children }) => {
  const [selectedPostId, setSelectedPostId] = useState(null)

  const contextValue = {
    selectedPostId,
    setSelectedPostId,
  }

  return (
    <PostContext.Provider value={contextValue}>{children}</PostContext.Provider>
  )
}

export const usePostContext = () => {
  const context = useContext(PostContext)
  return context
}

export default PostContext
