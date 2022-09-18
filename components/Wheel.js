import React, { useState, useRef, useEffect } from 'react'
import 'chart.js/auto';
import { Pie } from 'react-chartjs-2';

function Wheel({ colorlist, namelist, dataset }) {
    const [spin, setSpin] = useState(false)


   









    const spinwheel = (e) => {
        //   console.log(e.target.parentNode)
        // const a = e.target.parentNode
        setSpin(true)
        


    }
    return (
        <>
            <section className='relative mt-10  mr-[10%]'>
                <img src='/iphone2.png' className='absolute bg-white w-full '></img>

                <div className={`relative p-5 mt-24 rounded-full `}>
                    <Pie
                        className={spin ? ' origin-center' : null}
                        datasetIdKey='id'
                        data={{
                            labels: namelist,
                            datasets: [{
                                data: dataset,

                                backgroundColor: colorlist,

                                borderWidth: 1,
                            }]
                        }}

                    />


                </div>
                <button className='absolute  hover:text-black text-sm font-semibold  hover:bg-white bg-black  text-white   rounded-full w-8 h-8 left-[9.6rem] top-[16rem]' onClick={spinwheel}>Spin</button>




            </section>


        </>
    )
}

export default Wheel