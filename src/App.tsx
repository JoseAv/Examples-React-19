import './App.css'
import { Profile } from './modules/avanzado/perfil/Profile'
import { profile } from './modules/avanzado/perfil/types'
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
      {/* <Comments comments={comments as TypeComments} /> */}
      <Profile profile={profile} />
    </>
  )
}

export default App
