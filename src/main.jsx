import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import SignIn from './pages/SignIn/SignIn'
import './main.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes >
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='sign-in' element={<SignIn />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
