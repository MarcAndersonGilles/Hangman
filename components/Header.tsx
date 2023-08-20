import React, { useState} from 'react'
import Image from 'next/image'
import Link from 'next/link';
function Header() {

    const [menuBurgerToggle, setMenuBurgerToggle] = useState(false)
    const handleCloseMenu = () => {
        setMenuBurgerToggle(false);
      };

    const handleMenuBurgerToggle = () => {
        setMenuBurgerToggle(!menuBurgerToggle);
    }

    return (
        <div className='flex flex-col align-middle  justify-between shadow-md sticky  bg-white  left-0 right-0  bottom-0 top-0 w-full z-50 '>
            <div className='flex flex-row align-middle items-center gap-2 border-b-2  p-5 '>
                <div className='p-1  rounded-full '>
                    <Image src='/marc.jpg' width={60} height={60} className='rounded-full' alt='it is here' />
                </div>
                <h1 className='text-gray-700 font-bold text-base transition-all duration-300 hover:text-customVert'>GILLES MARC-ANDERSON </h1>
                
                <div className='hidden text-gray-700 sm:absolute sm:right-0 md:right-16    sm:flex sm:justify-end  '>
                    <ul className=' flex gap-8 p-3'>
                        <li className='flex   font-bold text-sm transition-all duration-300 hover:text-customVert'>
                            <Link href='/#presentation'>ACCUEIL</Link>
                        </li>
                       
                        <li className='flex   font-bold text-sm transition-all duration-300 hover:text-customVert'>
                            <Link href='/#articles'>ARTICLES</Link>
                        </li>
                        <li className='flex   font-bold text-sm transition-all duration-300 hover:text-customVert'>
                            <Link href='/#contact'>CONTACT</Link>
                        </li>
                        
                    </ul>
                </div>
                <div className='flex text-black absolute right-0 px-6 font-bold text-sm transition-all duration-300 sm:hidden '>
                    <ul className={`flex `}
                        onClick={handleMenuBurgerToggle}>
                        <button
                            className={`text-gray-500 hover:text-gray-900 focus:outline-none ${menuBurgerToggle ? 'active' : ''}`}

                        >
                            <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Menu / Menu_Alt_02">
                            <path id="Vector" d="M11 17H19M5 12H19M11 7H19"  stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                    </svg>
                        </button>
                    </ul>
                </div>
            </div>

            {menuBurgerToggle && (
                <div className={`absolute top-full left-0 right-0 bottom-0 visible flex transition-all duration-300  text-gray-700 justify-end sm:hidden  
                `}>
                    <ul className={`flex-col   items-end gap-4  font-medium  w-full
                    ${menuBurgerToggle ? 'animate-menu-open ' : ''}` }>
                        <li className='flex bg-white justify-end border-b-2 w-full p-6 font-bold transition-all duration-300 hover:text-customVert'>
                            <Link href='/#presentation'onClick={handleCloseMenu}
                            >ACCUEIL</Link>
                            
                        </li>
                      
                        <li className='flex bg-white justify-end border-b-2 w-full p-6 font-bold transition-all duration-300 hover:text-customVert'>
                            <Link href='/#articles'  onClick={handleCloseMenu}
                            >ARTICLES</Link>
                        </li>
                        <li className='flex bg-white justify-end border-b-2 w-full p-6 font-bold transition-all duration-300 hover:text-customVert'>
                            <Link href='/#contact'  onClick={handleCloseMenu}
                            >CONTACT</Link>
                        </li>
                        
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Header