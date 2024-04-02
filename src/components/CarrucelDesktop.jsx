import { useState } from "react"
import PropTypes from 'prop-types'

function CarrucelDesktop(props) {

    const [selected, setselected] = useState(0)

    const images = [
        {id: 0, url: '/images/image-product-1.jpg'},
        {id: 1, url: '/images/image-product-2.jpg'},
        {id: 2, url: '/images/image-product-3.jpg'},
        {id: 3, url: '/images/image-product-4.jpg'},
    ]

    const styles = {
        base: 'h-[5.7rem] aspect-square rounded-xl hover:opacity-60',
    }

    const handleClick = (index) => {
        setselected(index)
    }

    return (
    <>
        <section className="flex flex-col items-center">

            <div className="h-[26rem] w-[26rem] mb-5">
                <button onClick={props.showLightbox}>
                    <img
                        className="rounded-2xl object-fit h-full w-full" 
                        src={images[selected].url} 
                        alt="" 
                    />
                </button>
            </div>

            <div className="flex justify-between gap-x-4">
                {images.map((item, index) => (
                    <button  
                        key={index} 
                        onClick={() => handleClick(index)} 
                        className={`${index == selected ? 'border-2 border-Orange rounded-2xl' : '' }`}
                    >
                        <img 
                            className={`${styles.base} ${index == selected ? 'opacity-40' : '' }`}
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

CarrucelDesktop.propTypes = {
    showLightbox: PropTypes.func,
}


export default CarrucelDesktop
