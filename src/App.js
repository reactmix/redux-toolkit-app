import { useSelector, useDispatch } from 'react-redux'
import { setPosts, addPost, removePost, selectPosts } from './store/posts'
import { useEffect } from 'react';

function fetchServerData(){
  return new Promise((resolve) => {
    resolve([
      { id: 1, content: 'First Posts' },
      { id: 2, content: 'Second Posts' },
      { id: 3, content: 'Third Posts' },
    ])
  })
}

function getNewPost(){
  return {
    id: new Date().getTime(),
    content: new Date().toTimeString()
  }
}

function App() {
  const dispatch = useDispatch()
  
  const posts = useSelector(selectPosts)

  useEffect(() => {
    fetchServerData().then((data) => {
      dispatch(setPosts({ posts: data }))
    })
  }, [])

  return (
    <div className="App">
      <ul>
        {posts.map(x => (
          <li key={x.id}>
            <span>{ x.content }</span>
            <button onClick={evt => 
              dispatch(removePost({ postId: x.id }))
            }>remove</button>
          </li>
        ))}
      </ul>
      <button onClick={evt => 
        dispatch(addPost({ post: getNewPost() }))
      }>Add Post</button>
    </div>
  );
}

export default App;
