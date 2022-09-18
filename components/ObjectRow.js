import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'



function ObjectRow({sno}) {


   





    return (
        <div className='border border-gray-300 mt-4 p-3 rounded-md'>
            <div className='flex justify-between item-center'>
                <div className='text-gray-400 text-base font-medium'>Option#{sno}</div>
                <FaTrashAlt className='hover:cursor-pointer' />
            </div>
            <div className='font-bold text-black text-base'>Reward</div>
            <input label="Reward Name"
                placeholder='Enter reward name'
                className='p-2 
                        w-4/5
                        border border-gray-500'></input>
            <button className='bg-teal-600 hover:bg-teal-700 text-white p-2 border border-black'>Lock
            </button>
        </div>
   

    )
}

export default ObjectRow