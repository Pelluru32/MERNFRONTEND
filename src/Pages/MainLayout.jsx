import React from 'react'
import { Outlet } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation'
import Footer from '../components/Footer'

const MainLayout = () => {
  return (
    <>
      <MainNavigation />
      <Outlet />
      <Footer />
    </>
  )
}

export default MainLayout
