import './App.css'
import UserContext from './Core/Context/UserContext'
import { useAuth } from './Features/Users/Presentation/ViewModels/UseAuth'
import RouterPublic from './Routes/Router/router.public'
function App() {

  const { user, setUser } = useAuth()
  return (
    <>
    <UserContext.Provider value={{user, setUser}}>
      <RouterPublic></RouterPublic>
    </UserContext.Provider>
    </>
  )
}

export default App
