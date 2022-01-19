import React from 'react'
import './ButtonSecondary.scss'

function ButtonSecondary({name,type,onClick}) {
    return (
        <button className='button__secondary' type={type} onClick={onClick}>
            {name}
        </button>
    )
}

export default ButtonSecondary
