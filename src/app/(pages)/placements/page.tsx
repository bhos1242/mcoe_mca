import React from 'react'
import { PlacementStats } from './(components)/placement_stats'
import { PlacedStudents } from './(components)/placed_students'

const page = () => {
  return (
    <div className='pt-16'>
        <PlacementStats/>
        <PlacedStudents/>
    </div>
  )
}

export default page