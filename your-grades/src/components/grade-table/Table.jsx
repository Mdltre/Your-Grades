import React from 'react'

const gradeTable = (props) => {

  let totalQPI;
  let letback;
  let backletter;

  const gradeEquivalent = {
    'A': 4,
    'B+': 3.5,
    'B': 3, 
    'C+':2.5,
    'C': 2,
    'D': 1,
    'F': 0
  }

  const totalGradePoints =  props.items.reduce((total, data) => {
    return total + (data.courseUnits * gradeEquivalent[data.courseGrade])
  } , 0)

  const totalUnits =  props.items.reduce((total, data) => {
    return total + Number(data.courseUnits)
  }, 0)

  totalQPI = (totalGradePoints / totalUnits).toFixed(2);

  // if (totalQPI != 0){
  //   letback = totalQPI
  //   if (letback >= 4){
  //     backletter = "A";
  //     return backletter
  //   }
  //   if (letback < 4 && letback >= 3.5){
  //     backletter = "B+";
  //     return backletter
  //   }
  //   if (letback < 3.5 && letback >= 3){
  //     backletter = "B";
  //     return backletter
  //   }
  //   if (letback < 3 && letback >= 2.5){
  //     backletter = "C+";
  //     return backletter
  //   }
  //   if (letback < 2.5 && letback >= 2){
  //     backletter = "C";
  //     return backletter
  //   }
  //   if (letback < 2 && letback >= 1){
  //     backletter = "D";
  //     return backletter
  //   }
  //   if (letback > 0 && letback < 1){
  //     backletter = "F";
  //     return backletter
  //   }
  // }

  if (isNaN(totalQPI)) {
    totalQPI = 0; 
  } 

  
  
   
  return (
    <>
        {props.items
              .filter((item) => (
                props.query.toLowerCase() === '' ||
                item.courseNo.toLowerCase().includes(props.query.toLowerCase()) || 
                item.courseName.toLowerCase().includes(props.query.toLowerCase()) ||
                item.courseGrade.toLowerCase().includes(props.query.toLowerCase()) ||
                item.courseUnits.includes(props.query) 
                ))
              .map((item, index) => (
                    <tr key={item.id}>
                        {/* <th scope='row'>{index+1}</th> */}
                        <td className='border-2	border-solid border-red-200 bg-red-950 border-spacing-1 p-2 w-20' >{item.courseNo}</td>
                        <td className='border-2	border-solid border-red-200 bg-red-950 border-spacing-1 p-2 w-20'>{item.courseName}</td>
                        <td className='border-2	border-solid border-red-200 bg-red-950 border-spacing-1 p-2 w-20'>{item.courseUnits}</td>
                        <td className='border-2	border-solid border-red-200 bg-red-950 border-spacing-1 p-2 w-20'>{item.courseGrade}</td>
                    </tr>
                  
                    
              ))}
          <tr>
            <td></td>
            <td></td>
            <td className='border-2	border-solid border-red-200 text-red-900 bg-red-200 font-bold border-spacing-1 p-2 w-20'>Total QPI</td>
            <td className='border-2	brder-solid border-red-200 text-red-900 bg-red-200 font-bold border-spacing-1 p-2 w-20'>{totalQPI}</td>
            {/* <td className='border-2	brder-solid border-red-200 text-red-900 bg-red-200 font-bold border-spacing-1 p-2 w-20'>{backletter}</td> */}
         </tr>

    </>
  )
}

export default gradeTable