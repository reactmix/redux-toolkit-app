export default function fetchServerData(){
  return new Promise((resolve) => {
    resolve([
      { id: 1, content: 'First Posts' },
      { id: 2, content: 'Second Posts' },
      { id: 3, content: 'Third Posts' },
    ])
  })
}