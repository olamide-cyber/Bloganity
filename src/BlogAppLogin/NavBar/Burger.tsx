import React, { useState } from 'react'
import './Burger.scss'
import RightNav from './RightNav'

function Burger() {
    const [open, setOpen] = useState(false)

    return (
        <>
            <div className='burger' onClick={() => setOpen(!open)}>
                <div className={'burger-div ' + open} /> 
                <div className={'burger-div ' + open}/> 
                <div className={'burger-div ' + open}/>   
            </div>
            {open && <RightNav />}
        </>
    )
}

export default Burger