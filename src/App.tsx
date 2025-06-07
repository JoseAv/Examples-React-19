import './App.css'
import { DynamicForm } from './modules/medios/DynamicFor/DynamicForm'
import { formConfig } from './modules/medios/DynamicFor/types'
function App() {

  return (
    <>
      {/* <UserCard /> */}
      {/* <User /> */}
      {/* <Comments replies={commentData} /> */}
      {/* <Card data={user} /> */}
      {/* <TreeView tree={folderStructure} /> */}
      <DynamicForm form={formConfig} />
    </>
  )
}

export default App
