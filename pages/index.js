import React from 'react'


import { useState } from 'react'
import Wheel from './components/Wheel'
import ObjectRow from './components/ObjectRow'


function Index() {
  const [showwheel, setShowwheel] = useState(false)
  const [dataset, setDataset] = useState([])

  const [rewards, setRewards] = useState(0)

  const [colorlist, setColorlist] = useState([])
  const [namelist, setNamelist] = useState([])

  const sendColor = (data) => {

    setColorlist(current => [...current, data]);
    console.log(colorlist)
  }

  const sendName = (data) => {

    setNamelist(current => [...current, data]);
    console.log(namelist)

  }

  const rows = []
  for (let i = 0; i < rewards; i++) {

    rows.push(<ObjectRow key={i} num={i} sendColor={sendColor} sendName={sendName} />);

  }


  const onclickRemove = () => {
    setRewards(rewards - 1)
    const lastIndexofNamelist = namelist.length - 1;
    const lastIndexofDataset = dataset.length - 1;
    const lastIndexOfcColorlist = colorlist.length - 1;
    setDataset(dataset.filter((data, index) => index !== lastIndexofDataset));
    setNamelist(namelist.filter((data, index) => index !== lastIndexofNamelist));
    setColorlist(colorlist.filter((data, index) => index != lastIndexOfcColorlist))

    console.log(dataset)
  }



  const onclickAdd = (e) => {
    setDataset(current => [...current, 1]);
    setRewards(rewards + 1)

  }
  const onsubmit = async (e) => {
    e.preventDefault()
    setShowwheel(true)
    console.log("hello")
  }










  return (
    <>
      <div className='flex justify-evenly bg-slate-300'>


        <section className='  p-3 min-h-screen '>

          <div className='text-4xl font-bold  '>Customizing the wheel</div>
          {/* <span className='text-lg my-4'>Number of rewards
        <input type='number' min="2" max="12" onChange={onchange1} className='my-4 bg-slate-300 mx-2'></input></span> */}
          <div className=' mt-4 flex p-2 '><button className='bg-slate-700  text-white text-xl w-fit p-1 rounded-md hover:bg-slate-900 font-medium' onClick={onclickAdd}>Add Reward</button>
            <button className='bg-slate-700 ml-3 text-white text-xl w-fit p-1 rounded-md hover:bg-slate-900 font-medium' onClick={onclickRemove}>Remove Reward</button></div>
          <hr />

          <div className=' mt-3 md:flex-col'><form method='post' className='pl-2  ' onSubmit={onsubmit}>
            {rows}
            <div className='flex mr-3 item-center p-2'> <button className={`${rewards > 0 ? 'bg-red-700 w-24 rounded-md p-1 font-medium hover:bg-red-800 text-lg text-white ' : 'hidden'}`}>Submit</button></div> </form></div>

        </section>



        {showwheel ? <Wheel namelist={namelist} colorlist={colorlist} dataset={dataset} /> : null}


      </div>



      {showwheel ? <div class="absolute  w-0 h-0  left-[73.5%] top-[19rem]
            border-t-[8px] border-t-transparent
            border-r-[16px] border-r-black
            border-b-[8px] border-b-transparent
            "></div> : null}
    </>
  )
}

export default Spinwheel