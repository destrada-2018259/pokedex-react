import React from 'react'
import { useState, useEffect } from 'react'
import { Logo, Moon, Sun } from './Icons'
import "./Navbar.css"

export const Navbar = () => {

  const [theme, setTheme] = useState('light')
  const handleChange = (e) => setTheme(e.target.checked ? 'dark' : 'light')

  useEffect(() => {
    document.body.setAttribute('theme-data', theme)
   
  }, [theme])
  

  return (
    <>
        <nav>

            <Logo />
            <div className='switch'>
              <Sun/>
                <label>
                    <input type="checkbox" className='check-switch' onChange={handleChange} hidden/>
                    <span className='slider'></span>
                </label>
              <Moon />
            </div>
        </nav>
    </>

  )
}
