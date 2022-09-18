import React, { useState } from 'react'
import RewardComp from '../components/Reward'
import DesignComp from '../components/Design'
import { useSelector, useDispatch } from 'react-redux'

import Wheel from '../components/Wheel'

function Index() {
  const counter = useSelector((state) => state.counter)
  const [showReward, setShowReward] = useState(false)
  const [showCampaign, setShowCampaign] = useState(false)
  const [showDesign, setShowDesign] = useState(false)
  const [showAudience, setShowAudience] = useState(false)

  const Audience = (e) => {
    console.log(counter)
    setShowAudience(true)
    setShowCampaign(false)
    setShowDesign(false)
    setShowReward(false)
  }
  const Campaign = (e) => {
    setShowCampaign(true)
    setShowAudience(false)
    setShowDesign(false)
    setShowReward(false)
  }
  const Design = (e) => {
    setShowCampaign(false)
    setShowAudience(false)
    setShowReward(false)
    setShowDesign(true)
  }
  const Reward = (e) => {
    setShowReward(true)
    setShowCampaign(false)
    setShowDesign(false)
    setShowAudience(false)
  }

  return (

<main className='flex justify-between  '>
    <div className='min-h-screen  w-52 py-3 bg-gray-700 flex flex-col'>

      <div className={!showReward ? 'mt-10 justify-center hover:border hover:border-white h-16 flex items-center hover:cursor-pointer text-center text-slate-400 font-medium text-lg ' : 'mt-10 justify-center hover:border hover:border-white h-16 flex items-center hover:cursor-pointer text-center text-white font-medium text-lg  bg-slate-900 border border-white'} onClick={Reward}>Rewards</div>

      <div className={!showDesign ? 'h-16 justify-center hover:border hover:border-white flex items-center hover:cursor-pointer  text-center text-slate-400 font-medium text-lg' : 'h-16 justify-center hover:border hover:border-white flex items-center hover:cursor-pointer  text-center text-white font-medium text-lg bg-slate-900 border border-white'} onClick={Design}>Game Design</div>

      <div className={!showAudience ? 'h-16 justify-center hover:border hover:border-white flex items-center hover:cursor-pointer  text-center text-slate-400 font-medium text-lg' : 'h-16 justify-center hover:border hover:border-white flex items-center hover:cursor-pointer  text-center text-white font-medium text-lg bg-slate-900 border border-white'} onClick={Audience}>Audience</div>

      <div className={!showCampaign ? 'h-16 justify-center hover:border hover:border-white flex items-center hover:cursor-pointer text-center text-slate-400 font-medium text-lg' : 'h-16 justify-center hover:border hover:border-white flex items-center hover:cursor-pointer text-center text-white font-medium text-lg bg-slate-900 border border-white'} onClick={Campaign}>Campaign Schedule</div>

    </div>

      {counter === 1 ? <RewardComp /> : counter === 2 ? < DesignComp />:null}

   
    
    <Wheel/>
    
    </main>

  )
}

export default Index