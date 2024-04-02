import { useState } from "react"

function CarrucelMobile() {

    const [current, setCurrent] = useState(0)

    const images = [
        {url: '/images/image-product-1.jpg'},
        {url: '/images/image-product-2.jpg'},
        {url: '/images/image-product-3.jpg'},
        {url: '/images/image-product-4.jpg'},
    ]

    const length = images.length

    const handleNextImg = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const handlePrevImg = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    return (
    <>
        <section className="relative h-[19rem] md:h-[30rem] ">

            <button
                aria-label="Click to see previous image"
                onClick={handlePrevImg} 
                className='group absolute left-4 my-auto inset-y-0 grid place-content-center bg-white h-10 w-10 rounded-full'
            >
                <svg className='mr-1 stroke-[#1D2026] group-hover:stroke-Orange' width="12" height="18" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 1 3 9l8 8" strokeWidth="3" fill="none" fillRule="evenodd"/>
                </svg>
            </button>
            
            {images.map((item, index) => (
                <div key={index}>
                    {index === current && 
                    <img 
                        className='object-cover h-[19rem] md:rounded-xl md:h-[30rem] w-full transition-all' 
                        src={item.url}
                        alt="product" 
                    />}
                </div>
            ))}
            
            <button
                aria-label="Click to see next image"
                onClick={handleNextImg} 
                className='group absolute right-4 my-auto inset-y-0 grid place-content-center bg-white h-10 w-10 rounded-full'
            >
                <svg className='ml-1 stroke-[#1D2026] group-hover:stroke-Orange' width="12" height="18" xmlns="http://www.w3.org/2000/svg">
                    <path d="m2 1 8 8-8 8" strokeWidth="3" fill="none" fillRule="evenodd"/>
                </svg>
            </button>

        </section>
    </>
    )
}


export default CarrucelMobile
