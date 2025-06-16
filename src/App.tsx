import './App.css'
import { cart } from './modules/medios/Carrtito/car'
import { Car } from './modules/medios/Carrtito/Cart'
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
      <Car ObjectCar={cart} />
    </>
  )
}

export default App
