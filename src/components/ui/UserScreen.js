import React from 'react'
import { FaBars, FaSearch } from 'react-icons/fa';

export const UserScreen = () => {
    return (
        <div className='user__container'>
            <div className='user__header-container'>
                <div className='user__container-icons-text'>
                <FaBars size='22' color='#A9A9AB' cursor='pointer'/>
                <h2 className='user__title'>torre<span>.co</span></h2>
                </div>

                <div className='user__container-icons-text'>
                <FaSearch size='22' color='#A9A9AB' cursor='pointer'/>
                <h2 className='user__sign-in'>SIGN IN</h2>
                </div>
            </div>
            <div className='user__photo-name-container'>
                <div className='user__photo'><img src='./foto.jpg' alt='' /></div>
                <h2>Brandon Triana</h2>
            </div>
        </div>
    )
}
