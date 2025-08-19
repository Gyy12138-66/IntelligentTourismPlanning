import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from 'antd'
import HomePage from './pages/HomePage'
import PlanningPage from './pages/PlanningPage'
import TripsPage from './pages/TripsPage'
import ProfilePage from './pages/ProfilePage'
import Navbar from './components/Navbar'
import './App.css'

const { Content } = Layout

function App() {
  return (
    <Layout className="min-h-screen">
      <Navbar />
      <Content className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/planning" element={<PlanningPage />} />
          <Route path="/trips" element={<TripsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Content>
    </Layout>
  )
}

export default App