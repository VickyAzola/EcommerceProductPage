import { useState } from 'react'
import PropTypes from 'prop-types'
import Logo from '/images/logo.svg'
import Hamburger from '/images/icon-menu.svg'
import Close from '/images/icon-close.svg'
import Profile from '/images/image-avatar.png'

function Navbar(props) {

    // State to manage the navbar's visibility
    const [nav, setNav] = useState(false);
    // State to manage the Cart visibility
    const [shoppingCart, setShoppingCart] = useState(false);

  // Toggle function to handle the navbar's display
    const showNavbar = () => {
        setNav(!nav);
    };

    // Toggle function to handle the Cart display
    const showCartitems = () => {
        setShoppingCart(!shoppingCart)
    }

    // Array containing navigation items
    const navItems = [
        {id: 0, text: 'Collections'},
        {id: 1, text: 'Men'},
        {id: 2, text: 'Women'},
        {id: 3, text: 'About'},
        {id: 3, text: 'Contact'},
    ];

    return (
    <>
        <nav className='relative px-6 lg:px-0 w-full lg:mx-auto lg:inset-x-0 border-b flex items-center lg:w-[85%] py-4 lg:py-0'>

        {/* Logo, Hamburger and Close mobile */}
        <div className='flex items-center gap-x-4 lg:gap-x-0'>
            <button onClick={showNavbar} className='block md:hidden' aria-label="Open and Close Navigation">
                {nav 
                ? <img className='w-8 relative z-20 ease-in duration-700' src={Close} alt="Close Navigation"/>
                : <img className='w-8 ease-out duration-700' src={Hamburger} alt="Open Navigation"/> }
            </button>
            <a href='/' aria-label='Logo'>
                <img className='w-[15rem] md:w-[30rem] lg:w-[20rem]' src={Logo} alt="Logo"/>
            </a>
        </div>

        {/* Desktop Navigation */}
        <div className='hidden md:block pl-10'>
            <ul className='flex items-center md:gap-x-4 lg:gap-x-8 h-full'>
                {navItems.map((item, index) => (
                <li key={index}
                className='hover:cursor-pointer border-b-2 border-b-white hover:border-b-2 hover:border-b-Orange py-8'>
                    <a 
                        href=''
                        className='text-DarkGrayishBlue h-full'>
                            {item.text}
                    </a>
                </li>
                ))}
            </ul>
        </div>

        {/* Shopping Cart and Profile Picture */}
        <div className='relative flex gap-x-5 lg:gap-x-10 items-center w-full justify-end'>
            <button onClick={showCartitems} aria-label='Shopping cart'>
            { props.isCartEmpty ? '' :
                <div className='absolute top-[-20%] lg:top-0 lg:right-[4.5rem] right-11 bg-Orange h-5 w-5 text-white font-bold rounded-full grid place-content-center text-[.6rem] lg:text-xs'>
                    {props.cuantity} 
                </div>
            }
                <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" 
                    fill="#69707D" fillRule="nonzero"/>
                </svg>
            </button>
            <a  aria-label='User profile'
                className='border-2 rounded-full border-white hover:cursor-pointer hover:border-2 hover:border-Orange'>
                <img className='w-7 h-7 lg:w-10 lg:h-10' src={Profile} alt="" />
            </a>
        </div>

        {/* Shopping Cart Modal */}
        { shoppingCart &&
            <div className='absolute z-10 top-[5rem] md:top-[6.5rem] lg:top-[4.5rem] bottom-10 w-[95%] min-h-[15rem] lg:min-h-[14rem] mx-auto left-0 right-0 bg-white
            rounded-lg p-5 shadow-xl md:w-[22rem] md:right-[6%] md:mr-0 lg:right-[-3%] '>
                <p className='font-bold mb-5 lg:mb-4 text-VeryDarkBlue'>Cart</p>
                {   props.isCartEmpty 
                    ? 
                    <div className='border-t flex items-center justify-center h-[80%] '>
                        <p className='font-bold text-DarkGrayishBlue'>Your cart is empty.</p>
                    </div>
                    : 
                    <div>
                        <div className='border-t pt-6 pb-5 lg:py-4 flex items-center justify-between'>
                            <div className='flex items-center gap-x-3'>
                                <img className='w-14 h-14 bg-black rounded' src='/images/image-product-1.jpg' alt="" />
                                <div className='text-DarkGrayishBlue'>
                                    <p>{props.itemName} </p>
                                    <p>{`$${props.discountPrice}.00`} x {props.cuantity} <span className='font-bold'> {props.total} </span></p>
                                </div>
                            </div>
                            <button className='group' onClick={props.handleDelete} aria-label='Delete item from cart'>
                                <svg className='fill-[#C3CAD9] group-hover:fill-gray-600'
                                    width="14" height="16" xmlns="http://www.w3.org/2000/svg"><defs>
                                    <path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs>
                                    <use fillRule="nonzero" xlinkHref="#a"/>
                                </svg>
                            </button>
                        </div>
                        <button className='bg-Orange hover:bg-Orange/70 text-white py-3 my-2 w-full font-bold rounded-lg'>Checkout</button>
                    </div>
                }
            </div>
        }

        {/* Mobile Navigation Menu */}
        {nav && 
            <div className='z-10 bg-black/70 fixed top-0 right-0 w-[100%] h-full transition-all'>
            </div>
        }
        <ul
            className={
            nav
                ? 'bg-white text-lg pl-8 pt-24 z-10 fixed md:hidden left-0 top-0 w-[70%] h-full ease-in-out duration-500'
                : 'ease-in-out w-[70%] pl-8 pt-24 z-10  duration-500 fixed top-0 bottom-0 left-[-100%]'
            }
        >
            {navItems.map((item, index) => (
                <li key={index} className='my-2 w-full hover:cursor-pointer'>
                    <a href='' className='block w-full py-1 font-bold border-r-2 border-r-white hover:border-r-2 hover:border-r-Orange'>
                        {item.text}
                    </a>
                </li>
                ))}
        </ul>
        </nav>
    </>
    )
}

Navbar.propTypes = {
    showbadge: PropTypes.bool,
    itemName: PropTypes.string,
    discountPrice: PropTypes.string,
    cuantity: PropTypes.number,
    total: PropTypes.string,
    handleDelete: PropTypes.func,
    isCartEmpty: PropTypes.bool
}


export default Navbar
