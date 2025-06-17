import './App.css'
import { Comments } from './modules/avanzado/comments/components/comments'
import { comments, type TypeComments } from './modules/avanzado/comments/types/commentsTypes'
function App() {

  return (
    <>
      {/* <UserCard /> */}
      {/* <User /> */}
      {/* <Comments replies={commentData} /> */}
      {/* <Card data={user} /> */}
      {/* <TreeView tree={folderStructure} /> */}
      {/* <DynamicForm form={formConfig} /> */}
      {/* <ExtraerUser users={users} /> */}
      {/* <FilterProductos products={products} /> */}
      {/* <FiltrarUsuarios users={users} /> */}
      {/* <Car ObjectCar={cart} /> */}
      <Comments comments={comments as TypeComments} />
    </>
  )
}

export default App
