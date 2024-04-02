import { useState } from "react"
import PropTypes from 'prop-types'

function Lightbox(props) {
    
    // State to manage the current image displayed
    const [current, setCurrent] = useState(0)

    const images = [
        {id: 0, url: '/images/image-product-1.jpg'},
        {id: 1, url: '/images/image-product-2.jpg'},
        {id: 2, url: '/images/image-product-3.jpg'},
        {id: 3, url: '/images/image-product-4.jpg'},
    ]

    const length = images.length

    const handleNextImg = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const handlePrevImg = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    const styles = {
        base: 'h-[4.5rem] xl:h-[5.5rem] aspect-square rounded-xl hover:opacity-60',
        activeButton: 'border-2 border-Orange rounded-2xl bg-white'
    }

    //handle change of image on click
    const handleClick = (index) => {
        setCurrent(index)
    }

    return (
    <>
        <section className="flex flex-col pt-6 items-center min-h-screen w-screen justify-center bg-black/70">

            <div className="relative h-[26rem] w-[26rem] xl:w-[30rem] xl:h-[30rem] mb-3">
                <button 
                    onClick={props.showLightbox} 
                    className="absolute right-0 top-[-8%] z-20"
                >
                    <svg className="fill-white hover:fill-Orange"
                        width="14" height="15" xmlns="http://www.w3.org/2000/svg">
                        <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fillRule="evenodd"/>
                    </svg>
                </button>

                <button 
                    onClick={handlePrevImg} 
                    className='group absolute left-[-5%] my-auto inset-y-0 grid place-content-center bg-white h-10 w-10 rounded-full'
                >
                    <svg className='stroke-[#1D2026] group-hover:stroke-Orange mr-1' width="12" height="18" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 1 3 9l8 8" strokeWidth="3" fill="none" fillRule="evenodd"/>
                    </svg>
                </button>

                {images.map((item, index) => (
                    <div key={index}>
                        {index === current && 
                        <img 
                            className='rounded-2xl object-fit h-full w-full' 
                            src={item.url}
                            alt="" 
                        />}
                    </div>
                ))}

                <button 
                    onClick={handleNextImg} 
                    className='group absolute right-[-5%] my-auto inset-y-0 grid place-content-center bg-white h-10 w-10 rounded-full'
                >
                    <svg className='stroke-[#1D2026] group-hover:stroke-Orange ml-1' width="12" height="18" xmlns="http://www.w3.org/2000/svg">
                        <path d="m2 1 8 8-8 8" strokeWidth="3" fill="none" fillRule="evenodd"/>
                    </svg>
                </button>
            </div>

            <div className="flex justify-between gap-x-4 ">
                {images.map((item, index) => (
                    <button  
                        key={index} 
                        onClick={() => handleClick(index)} 
                        className={`${index == current ? styles.activeButton : '' }`}
                    >
                        <img 
                            className={`${styles.base} ${index == current ? 'opacity-60' : '' }`}
                            src={item.url}
                            alt="" 
                        />
                    </button>
                ))}
            </div>
            
        </section>
    </>
    )
}

Lightbox.propTypes = {
    showLightbox: PropTypes.func,
}

export default Lightbox
