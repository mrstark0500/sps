import React from 'react'
import NormalBar from '../../NormalBar'
import Fotter from '../../last/Fotter'
import At from './At'
import AutomobileDepartmentPage from '../../Departments/AutomobileDepartmentPage'

function Automobile() {
  return (
    <div>
      <NormalBar/>
      <AutomobileDepartmentPage/>
      <Fotter/>
    </div>
  )
}

export default Automobile
