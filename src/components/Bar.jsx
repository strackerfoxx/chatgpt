import React from 'react'

export default function Bar({setStep, step}) {
  return (
    <div className='progress'>
        <a href="#" onClick={() => setStep(1)} className={`${step === 1 && "active"}`} >1</a>
        <a href="#" onClick={() => setStep(2)} className={`${step === 2 && "active"}`} >2</a>
        <a href="#" onClick={() => setStep(3)} className={`${step === 3 && "active"}`} >3</a>
    </div>
  )
}
