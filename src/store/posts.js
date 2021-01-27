import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'posts',
  initialState: { value: [] },
  reducers: {
    setPosts(state, action) {
      state.value = action.payload.posts
    },
    addPost(state, action) {
      state.value.push(action.payload.post)
    },
    removePost(state, action) {
      state.value = state.value.filter(x => {
        return x.id !== action.payload.postId
      })
    }
  },
})

export const selectPosts = state => state.posts.value

export const { setPosts, addPost, removePost } = slice.actions
export default slice.reducer