import AboutSection from '@/components/About'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import UserList from '@/components/UserList'
import React from 'react'

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar/>
      <Hero/>
      <UserList/>
      <AboutSection/>
      <Footer/>

    </div>
  )
}

export default Page