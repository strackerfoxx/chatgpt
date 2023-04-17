import {useState} from 'react'
import Bar from './Bar'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'

export default function Body() {
    const [step, setStep] = useState(1)
  return (
    <div className='body'>
        <nav>
            <h2 onClick={() => setStep(1)}> ChatGPT</h2>
            <div>
                <a href="#" onClick={() => setStep(3)}>About</a>
                <a href="#">Blog</a>
                <a href="#">Contact</a>
            </div>
            <h3>Hello, Alex!</h3>
        </nav>
        <div className='content'>
            <Bar setStep={setStep} step={step}  />
            <div  className='container'>
                {step === 1 ? (
                    <Section1 setStep={setStep}/>
                    ): step === 2 ? (
                    <Section2/>
                    ): (
                    <Section3/>
                )}
            </div>
                {step === 1 ? (
                    <>
                        <div className='prev' onClick={() => setStep(2)}>
                            <div className='imgchat'>
                                <h2>chatea conmigo</h2>
                                <p>El mejor modelo de lenguaje natural en la red con una mejor interfaz</p>
                            </div>
                        </div>
                        <div className='prev' onClick={() => setStep(3)}>
                            <div className='imgabout'>
                                <h2>About</h2>
                                <p>Conoce mas sobre este proyecto</p>
                            </div>
                        </div>
                    </>
                ): step === 2 ? "": (
                    <>
                        <div className='prev' onClick={() => setStep(2)}>
                            <div className='imgchat'>
                                <h2>chatea conmigo</h2>
                                <p>El mejor modelo de lenguaje natural en la red con una mejor interfaz</p>
                            </div>
                        </div>
                        <div className='prev' onClick={() => setStep(1)}>
                            <div className='imgstart'>
                                <h2>Regresa al inicio</h2>
                            </div>
                        </div>
                    </>
                )}
        </div>
        <div className='botonera'>
            <a href="#" onClick={() => setStep(step == 1 ? 3 : step - 1)}>{`<`}</a>
            <a href="#" onClick={() => setStep(step == 3 ? 1 : step + 1)}>{`>`}</a>
        </div>
    </div>
  )
}
