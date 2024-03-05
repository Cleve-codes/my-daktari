// import React from 'react'
import { useEffect, useRef } from 'react'
import logo from '../../assets/images/logo.png'
import { NavLink, Link } from 'react-router-dom'
import { BiMenu } from 'react-icons/bi'

import "./Header.css"

import avatar from '../../assets/images/avatar-icon.png'

const navLinks = [
  {
    path: '/',
    title: 'Home'
  },
  {
    path: '/doctors',
    title: 'Find a Doctor'
  },
  {
    path: '/services',
    title: 'Services'
  },
  {
    path: '/contact',
    title: 'Contact Us'
  },
]

const Header = () => {

  const headerRef = useRef(null)
  const menuRef = useRef(null)

  const handleStickyHeader = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky__header')
      } else {
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }

  useEffect(() => {
    handleStickyHeader()

    return () => {
      window.removeEventListener('scroll', handleStickyHeader)
    }
  })

  const toggleMenu = () => menuRef.current.classList.toggle('show__menu')

  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex justify-between items-center">

        {/* Logo */}
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>

        {/* Menu */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu} >
              <ul className='menu flex items-center gap-[2.7rem]'>
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <NavLink
                    to={link.path}
                    className={navClass => navClass.isActive ?
                    "text-primaryColor text-[16px] leading-7 font-[600]"
                    : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor transition duration-300 ease-in-out"
                  }
                    >
                      {link.title}
                      </NavLink>
                  </li>
                ))}
              </ul>
          </div>

        {/* Nav Right */}
        <div className='flex items-center gap-4'>
            <div className='hidden'>
              <Link to="/">
                <figure className='w-[35px] h-[35px] rounded-full cursor-pointer' >
                  <img src={avatar} className='w-full rounded-full' alt="avatar" />
                </figure>
              </Link>
            </div>

            <div>
              <Link to="/login">
                <button
                className='bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]'
                >
                  Login
                </button>
              </Link>
            </div>

            <span className='md:hidden' onClick={toggleMenu} >
              <BiMenu className='w-6 h-6 cursor-pointer' />
            </span>

        </div>

          </div>
      </div>
    </header>
  )
}

export default Header