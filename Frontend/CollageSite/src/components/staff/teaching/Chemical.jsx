import React from 'react'
import NormalBar from '../../NormalBar'

import Fotter from '../../last/Fotter'
import Ch from './Ch'
import ChemicalDepartmentPage from '../../Departments/ChemicalDepartmentPage'

function Chemical() {
  return (
    <div>
      <NormalBar/>
      <ChemicalDepartmentPage/>
      <Fotter/>
    </div>
  )
}

export default Chemical
