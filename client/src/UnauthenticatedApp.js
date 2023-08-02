import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from "./Login.js"
import Signup from './Signup.js'
import { useCharacterContext } from './contexts/CharacterContext.js'

function UnauthenticatedApp({ setCurrentUser }) {

  const [characterContext, setCharacterContext] = useCharacterContext()

  console.log("characterContext after logout", characterContext)
  return (
    <>
    <Routes>
      <Route path="/" element={<Login setCurrentUser={setCurrentUser} />} />
      <Route path="/signup" element={<Signup setCurrentUser={setCurrentUser} />} />
      <Route path = "*" element={<Navigate to="/" />} />
    </Routes>
    </>
  )
}

export default UnauthenticatedApp
