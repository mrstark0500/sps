import React from 'react'
import Navbar from '../Navbar'
import ComponentsGovering from './ComponentsGovering'
import Ending from '../last/Ending'
import LastEnding from '../last/LastEnding'
import NormalBar from '../NormalBar'

function GoveringBody() {
  return (
    <div>
      <NormalBar/>
      <ComponentsGovering/>
      <LastEnding/>
      <Ending/>
      
    </div>
  )
}

export default GoveringBody
