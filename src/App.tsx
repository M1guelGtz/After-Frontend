import './App.css'
import UserContext from './Core/Context/UserContext'
import { useAuth } from './Features/Users/Presentation/ViewModels/UseAuth'
import RouterAdmin from './Routes/Router/router.admin'
import RouterPublic from './Routes/Router/router.public'
import RouterRP from './Routes/Router/router.rp'
function App() {

  const { user, setUser } = useAuth()
  return (
    <>
    <UserContext.Provider value={{user, setUser}}>
      {
        !user &&
          <RouterPublic />
      }
      {
        user?.rol_id === 1 && 
          <RouterAdmin />

      }
      {
        user?.rol_id === 2 &&
          <RouterRP></RouterRP>
      }
    </UserContext.Provider>
    </>
  )
}

export default App
