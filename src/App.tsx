import './App.css'
import { TreeView } from './modules/avanzado/TreeView/TreeView'
import { folderStructure } from './modules/avanzado/TreeView/types'
function App() {

  return (
    <>
      {/* <UserCard /> */}
      {/* <User /> */}
      {/* <Comments replies={commentData} /> */}
      {/* <Card data={user} /> */}
      <TreeView tree={folderStructure} />
    </>
  )
}

export default App
