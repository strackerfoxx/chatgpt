import React from 'react'

export default function Bar({setStep}) {
  return (
    <div className='progress'>
        <a href="#" onClick={() => setStep(1)}>1</a>
        <a href="#" onClick={() => setStep(2)}>2</a>
        <a href="#" onClick={() => setStep(3)}>3</a>
    </div>
  )
}
