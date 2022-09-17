import React from 'react'
import { useState } from 'react'
import { FaLock } from 'react-icons/fa';

function ObjectRow({ num, sendColor, sendName }) {


    const [name, setName] = useState('')
    const [color, setColor] = useState('')
    const [readonly, setreadonly] = useState(false)



    const handlechange1 = (e) => {

        setColor(e.target.value)

    }

    const handlechange2 = (e) => {

        setName(e.target.value)

    }

    const onset = (e) => {

        console.log("onset triggered")
        console.log(e.target)

        setreadonly(true)

        sendName(name)
        sendColor(color)
    }








    return (
        <>
            <div className='text-xl font-semibold  text-black'>Reward{num + 1}</div>
            <div className='md:flex md:flex-col flex flex-col ' >
                <div>
                    <label className='font-medium'>Reward Name</label>
                    <input type='text'
                        readOnly={readonly}
                        name="rewardName"

                        onChange={handlechange2}
                        value={name}
                        className='bg-slate-400 my-4  mx-2'>
                    </input>
                </div>
                <div>
                    <label className='font-medium'>Reward Color</label>
                    <input type='text'
                        name="rewardColor"
                        readOnly={readonly}
                        onChange={handlechange1}
                        value={color}
                        className='bg-slate-400 my-4  mx-2'>
                    </input>
                </div>

                <div className={!readonly ? 'flex m-2 items-center' : 'hidden'}><button className='bg-lime-600 text-black font-medium rounded-md text-sm border border-violet-900 w-fit p-1  hover:bg-lime-700 hover:text-white' onClick={onset}
                    disabled={readonly}> Done</button></div>

                {readonly ? <FaLock size='25' /> : null}
            </div>
            <hr />
        </>
    )
}

export default ObjectRow