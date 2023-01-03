import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from '../components/nav/Navbar'
import News from '../pages/news/News'

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          
          <Route path="/news" element={<News/>} />
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default AppRouter