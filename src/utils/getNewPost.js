export default function getNewPost(){
  return {
    id: new Date().getTime(),
    content: new Date().toTimeString()
  }
}