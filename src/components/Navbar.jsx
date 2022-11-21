import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <header>
        <img
            src='https://www.pngall.com/wp-content/uploads/5/Breaking-Bad-Logo-PNG-Free-Download.png'
            alt='Logo'
            className='logo'
        />
        <div className='navigation'>
            <nav>
                <ul>
                    <li>
                        <NavLink end to='/' className='links'>Personajes</NavLink>
                    </li>
                    <li>
                        <NavLink to='/episodes' className='links'>Episodios</NavLink>
                    </li>
                    <li>
                        <NavLink to='/quotes' className='links'>Frases</NavLink>
                    </li>
                    <li>
                        <NavLink to='/deaths' className='links'>Muertes</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  )
}
