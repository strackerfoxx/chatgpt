import {useState, useEffect} from 'react'
import axios from 'axios'
import randomString from "../helpers"
import Spinner from './Spinner'

export default function Section2() {
    const [chat, setChat] = useState([])
    const [message, setMessage] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    async function handleSubmit(e){
        e.preventDefault()
        if(message == "")return
        setChat([...chat, {id: 1, data: message}])
        setMessage([])
    }

    useEffect(() => {
        componentDidUpdate()
      const lasMSG = chat[chat.length - 1]
      if( lasMSG?.id !== undefined && lasMSG?.id !== 1 ) return
      if( lasMSG?.id !== undefined && lasMSG?.id == 1 ){
            async function query(message){
                setIsLoading(true)
                const options = {
                    method: 'POST',
                    url: 'https://openai80.p.rapidapi.com/chat/completions',
                    headers: {
                      'content-type': 'application/json',
                      'X-RapidAPI-Key': '24a32d45e0msh43ddd6efd389b52p18c800jsnccfa0703dc54',
                      'X-RapidAPI-Host': 'openai80.p.rapidapi.com'
                    },
                    data: {"model":"gpt-3.5-turbo","messages":[{"role":"user","content":message}]}
                };
                const {data} = await axios(options)
                setIsLoading(false)
                setChat([...chat, {id: 2, data: data.choices[0].message.content}])
            }
        query(lasMSG.data)
      }
    }, [chat])

    function componentDidUpdate() {
        // Obtener el elemento contenedor de los mensajes
        const messageContainer = document.getElementById('message-container');
        // Bajar el scroll hasta el final del contenedor
        setTimeout(() => {
          messageContainer.scrollTop = messageContainer.scrollHeight;
        }, 10);
    }
    
  return (
    <div>
        <div className='chat' id='message-container'>
            {chat.map(message => (
                <p className={`${message.id === 1 ? "user" : "bot"}`} key={randomString(8)}>{`${message.id === 1 ? "User:" : "Bot:"} ${message.data}`}</p>
            ))}
            {isLoading && (
                <p className="bot">
                    <Spinner/>
                </p>
            )}
        </div>
            <form  className='input'>
                <input type="text" placeholder='Preguntame algo' onChange={e => setMessage(e.target.value)} value={message}/>
                <button onClick={handleSubmit}>
                    <div className='icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                    </div>
                </button>
            </form>
    </div>
  )
}
