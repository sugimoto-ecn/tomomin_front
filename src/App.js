import React from 'react'
import Router from './Router'
import { UserProvider } from './providers/UserProvider'


const App = () => {
  return (
    <UserProvider>
      <Router/>
    </UserProvider>
  )
}

export default App
