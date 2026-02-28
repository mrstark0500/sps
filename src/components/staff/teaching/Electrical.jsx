import React from 'react'
import NormalBar from '../../NormalBar'
import Ee from './Ee'
import Fotter from '../../last/Fotter'
import ElectricalDepartmentPage from '../../Departments/ElectricalDepartmentPage'

function Electrical() {
  return (
    <div>
        <NormalBar/>
        <ElectricalDepartmentPage/>
        <Fotter/>
    </div>
  )
}

export default Electrical