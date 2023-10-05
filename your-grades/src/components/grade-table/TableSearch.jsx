import React from 'react'

const TableSearch = ({value, onChange}) => {
  return (
    <div>
        <input className='placeholder-gray-500::placeholder text-[#2A2B2E] p-2 rounded-[10px]' type="text" placeholder="Search" value={value} onChange={onChange} />

    </div>
  )
}

export default TableSearch