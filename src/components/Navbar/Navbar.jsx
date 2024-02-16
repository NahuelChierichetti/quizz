import React from 'react'
import logoWeAre from '../../assets/img/logo-we-are-16.svg'

const Navbar = () => {
    return (
        <div className='flex justify-center h-[160px] my-8'>
            <img src={logoWeAre} alt="We Are" />
        </div>
    )
}

export default Navbar
