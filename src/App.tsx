import './App.css'
import { Comments } from './modules/avanzado/estructurarDatos/Comments'
import { commentData } from './modules/avanzado/estructurarDatos/types'

function App() {

  return (
    <>
      {/* <UserCard /> */}
      {/* <User /> */}
      <Comments replies={commentData} />
    </>
  )
}

export default App
