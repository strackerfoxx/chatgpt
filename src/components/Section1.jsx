import React from 'react'

export default function Section1({setStep}) {
  return (
    <div className=''>
        <h1>CHAT GPT-4</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus fugiat neque 
        dignissimos saepe atque sed iste doloribus harum qui in. Eius dignissimos fugit repellat, 
        repudiandae modi veritatis dolores vero aut?</p>
        <button className='explore' onClick={() => setStep(2)}>Explore <span>{">"}</span></button>
    </div>
  )
}
