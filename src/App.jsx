import './App.css'
import SearchAppBar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import GetAll from './components/GetAll.jsx'
import AddPlayers from './components/AddPlayers'
import PlayerDetail from './components/PlayerDetail'

function App() {
  return (
    <>
      <Router>
        <SearchAppBar />
        <Routes>
          <Route path={'/'} element={<GetAll />} />
          <Route path={'/addPlayer'} element={<AddPlayers />} />
          <Route path={'/player/:id'} element={<PlayerDetail />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
