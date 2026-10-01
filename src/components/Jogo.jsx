import React, {useState} from 'react'
import './Jogo.css'

function Jogo() {
    const[emoji, setEmoji] =useState('👌')
    let emojis = ['😀', '😎', '🤩', '🥳', '😇', '🤓', '😜', '🤪', '😴', '🤯']

    function Sortear() {
        let i = Math.floor(Math.random() * 10)
        setEmoji(emojis[i])
    }

    return (
        <div className='jogo '>
            <button className='bt-emoji' onClick={Sortear}>
                <p className='p-emoji'>{emoji}</p>
            </button>
        </div>
    )
}

export default Jogo