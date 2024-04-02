import { useState } from 'react'
import { NavLink } from "react-router-dom";
import Logo from '/assets/shared/logo.svg'
import Hamburger from '/assets/shared/icon-hamburger.svg'
import Close from '/assets/shared/icon-close.svg'


function App() {

   // State to manage the navbar's visibility
    const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
    const showNavbar = () => {
        setNav(!nav);
    };

    // Array containing navigation items
    const navItems = [
        {id: 0, num: '00', text: 'HOME', link: '/' },
        {id: 1, num: '01', text: 'DESTINATION', link: '/destination' },
        {id: 2, num: '02', text: 'CREW', link: '/crew' },
        {id: 3, num: '03', text: 'TECHNOLOGY', link: '/technology' },
    ];

    const baseStyleLinks = {
        base: 'h-full py-9 tracking-[2.7px] hover:cursor-pointer hover:border-b-2 hover:border-b-white/60',
        active: 'h-full py-9 tracking-[2.7px] border-b-2 border-b-white'
    }
    

    return (
        <>
        <nav className='barlow-CondensedFont flex lg:gap-x-14 md:pt-0 lg:pt-6 fixed top-0 z-10 w-full'>

            {/* Logo, Hamburger and Close mobile */}
            <div className='px-5 md:pl-8 md:pr-0 flex py-3 justify-between items-center w-full lg:max-w-max'>
                <a href='/' aria-label='Logo'>
                    <img className='w-[80%] md:w-[3rem] ' src={Logo} alt="Logo"/>
                </a>
                <button onClick={showNavbar} className='block md:hidden' aria-label="Open and Close Navigation">
                    {nav 
                    ? <img className='relative z-20 ease-in duration-700' src={Close} alt="Close Navigation"/>
                    : <img className='ease-out duration-700' src={Hamburger} alt="Open Navigation"/> }
                </button>
            </div>

            {/* Desktop Navigation */}
            <div className='hidden md:flex items-center w-full'>
                <div className='hidden lg:block h-[0.063rem] w-[29.563rem] bg-white/20 relative z-10 mr-[-2%]'></div>
                <ul className='relative top-0 text-white backdrop-blur-lg bg-white/10 flex items-center md:gap-x-10 
                lg:gap-x-6 md:px-14 lg:pl-28 pr-4 h-[6rem] w-full'>
                    {navItems.map((item) => (
                    <li key={item.id}
                    >
                        <NavLink 
                            to={item.link}
                            className={({ isActive }) => isActive ? baseStyleLinks.active : baseStyleLinks.base}>
                            <span className='font-bold mr-1 sm:block md:hidden lg:inline-block'>{item.num} </span> {item.text}
                        </NavLink>
                    </li>
                    ))}
                </ul>
            </div>

            {/* Mobile Navigation Menu */}
            <ul
                className={
                nav
                    ? 'text-white text-lg pl-8 pt-32 z-10 fixed md:hidden right-0 top-0 w-[67%] h-full backdrop-blur-lg bg-white/10 ease-in-out duration-700'
                    : 'ease-in-out w-[67%] pl-8 pt-32 z-10  duration-700 fixed top-0 bottom-0 right-[-100%]'
                }
            >
                {navItems.map(item => (
                    <li key={item.id} className='my-2 w-full tracking-[2.7px] hover:cursor-pointer hover:border-r-2 hover:border-r-white'>
                        <a href={item.link} className='block w-full py-2'>
                            <span className='font-bold mr-2'>{item.num} </span>{item.text}
                        </a>
                    </li>
                    ))}
            </ul>
        </nav>
        </>
    )
}

export default App
