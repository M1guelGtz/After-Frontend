
import { useState } from "react";
import './App.css'
import { Routes, Route } from "react-router-dom";
import UserContext from './Core/Context/UserContext'
import RouterAdmin from './Routes/Router/router.admin'
import RouterPublic from './Routes/Router/router.public'
import RouterRP from './Routes/Router/router.rp'
import type { ProviderDTO } from './Features/Users/Data/Models/ProviderDTO'

function App() {

  const [user, setUser] = useState<ProviderDTO | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Routes>
        <Route path="/*" element={<RouterPublic />} />
        <Route path="/admin/*" element={<RouterAdmin />} />
        <Route path="/rp/*" element={<RouterRP />} />
      </Routes>
    </UserContext.Provider>
  )
}

export default App
