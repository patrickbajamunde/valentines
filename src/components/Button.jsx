import React from 'react'
import { useState } from 'react'
import '../style/buttonStyle.css'

function Button() {

    const [size, setSize] = useState(6)
    const [position, setPosition] = useState({ top: 451, left: 790 })

    const Addsize = () => {
        setSize(size * 4)
    }

    const changePosition = () => {
        const newTop = Math.floor(Math.random() * (window.innerHeight - 50))
        const newLeft = Math.floor(Math.random() * (window.innerWidth - 50))
        setPosition({ top: newTop, left: newLeft })
    }

    
    return (
        <div className=' button d-flex justify-content-center align-items-center'>
            <div className="col-auto">
                <button className='btn btn-primary'>Yes</button>
            </div>
            <div className="col-auto">
                <button className='btn btn-primary' style={{ position: 'fixed', top: `${position.top}px`, left: `${position.left}px`, transition: 'all 0.3s ease' }} onClick={changePosition}>No</button>
            </div>
        </div>
    )
}

export default Button