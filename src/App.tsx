import './App.css'
import { users } from './modules/medios/Filtrar Usuarios/Filtrar'
import { FiltrarUsuarios } from './modules/medios/Filtrar Usuarios/FiltrarUsuarios'
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
      <FiltrarUsuarios users={users} />
    </>
  )
}

export default App
