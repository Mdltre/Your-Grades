import React from 'react'

const GradeTableHeader = () => {
  return (
    <>
       <tr className='max-w-full bg-red-950 text-red-100' >
          <th className='border-2	border-solid border-red-200 border-spacing-1 p-2 w-20'>Course No.</th>
          <th className='border-2	border-solid border-red-200 border-spacing-1 p-2 w-20'>Course Name</th>
          <th className='border-2	border-solid border-red-200 border-spacing-1 p-2 w-20'>Units</th>
          <th className='border-2	border-solid border-red-200 border-spacing-1 p-2 w-20'>Grade</th>
        </tr>
    </>
   
  )
}

export default GradeTableHeader