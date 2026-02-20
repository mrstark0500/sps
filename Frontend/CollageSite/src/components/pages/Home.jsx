import React from 'react'
import Navbar from '../Navbar'
import Header from '../Header'
import Collageinfo from '../Collageinfo'
import Departments from '../Departments'
import Details from '../Details'
import Recruiters from '../Recruiters'
import Address from '../Address'
import Fotter from '../last/Fotter'

function Home() {
  return (
    <div>
        <Navbar/>
        <Header/>
        <Collageinfo/>
        <Departments/>
        <Recruiters/>
        <Address/>
        <Fotter/>
      
    </div>
  )
}

export default Home
