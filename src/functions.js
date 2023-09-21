export const fetchBlogs = async () => {
  try {
    const response = await fetch('http://localhost:8000/api/test')
    const data = await response.json()
    console.log('API Response:', data)
    return data
  } catch (error) {
    console.error('Error fetching blogs:', error)
    throw new Error('Failed to fetch blogs')
  }
}

export const fetchSingleBlog = async (id) => {
  try {
    const response = await fetch(`http://localhost:8000/api/test/${id}`)
    const data = await response.json()
    console.log('API Response:', data)
    return data
  } catch (error) {
    console.error('Error fetching blogs:', error)
    throw new Error('Failed to fetch blogs')
  }
}
