import { useState } from 'react'
import './App.css'
import SearchAppBar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Contact from './components/Contact'
import GetAll from './components/getAll'
import AddPlayers from './components/AddPlayers'


function App() {
  return (
    <>
      <Router>
        <SearchAppBar />
        <Routes>
          <Route path={'/'} element={<GetAll />} />
          <Route path={'/addPlayer'} element={<AddPlayers />} />
          <Route path={'/deletePlayer'} element={<Contact />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
