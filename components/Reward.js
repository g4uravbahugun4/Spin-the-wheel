import React, { useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import ObjectRow from './ObjectRow'
import { useSelector,useDispatch } from 'react-redux'
import {actions} from './store'

function Reward() {
    const counter = useSelector((state) => state.counter)
    const dispatch=useDispatch()
    const [moreRewards,setMoreRewards]=useState([])
    const[key,setkey]=useState(4)
    
    const nextComp=()=>{
        console.log(counter)
        dispatch(actions.nextComp());
    }
    
    const addMore=()=>{
         console.log(moreRewards)
        setMoreRewards([...moreRewards,<ObjectRow key={key} sno={key}/>])
        setkey(key=>(key+1))    
    }

  
    return (
        <>
            <section className='mt-5 p-3 w-2/5'>
                
                <div className=' text-center p-2 h-20 bg-gray-200 font-bold text-lg'>Rewards</div>

                <div className='p-2 h-20 font-medium text-lg'>Add Options <span className='text-gray-400 text-xs '>(Minimum 3 options)</span></div>

           
           { /* rewards starts from here */}
            
                <div className='border border-gray-300 p-3 rounded-md'>
                    <div className='flex justify-between item-center'>
                    <div className='text-gray-400 text-base font-medium'>Option#1</div>
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

                <div className='border border-gray-300 mt-4 p-3 rounded-md'>
                    <div className='flex justify-between item-center'>
                        <div className='text-gray-400 text-base font-medium'>Option#2</div>
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

                <div className='border border-gray-300 mt-4 p-3 rounded-md'>
                    <div className='flex justify-between item-center'>
                        <div className='text-gray-400 text-base font-medium'>Option#3</div>
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
                
                {/* Three rewars ends here */}

               {moreRewards}

                

            <div><button className='w-20 rounded-sm p-1 font-bold text-teal-700 mt-8 bg-teal-100 hover:bg-teal-200'onClick={addMore}>+Add</button>
                </div>
  
            <div className='mt-6 flex justify-end'><button className='mr-4 w-20 p-1 rounded-sm font-medium hover:bg-teal-600 bg-teal-500 text-white'onClick={nextComp}>Continue</button></div>

            </section>
        </>
    )
}

export default Reward