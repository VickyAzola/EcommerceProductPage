import { useState, useEffect } from 'react'
import Navbar from "./components/Navbar.jsx"
import CarrucelMobile from "./components/CarrucelMobile.jsx"
import CarrucelDesktop from './components/CarrucelDesktop.jsx'
import Lightbox from './components/Lightbox.jsx'
import Credits from './components/Credits.jsx'

function App() {
  //state to watch the window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  //effect to listen to the resize of the width
  useEffect(() => {
    function watchWidth() {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener("resize", watchWidth)

    return function() {
      window.removeEventListener("resize", watchWidth)
    }
  }, [])

  //state to count the cuantity of items
  const [itemCount, setItemCount] = useState(0)
   //state to set the final price ofter adding items
  const [totalProducts, setTotalProducts] = useState(itemCount)
  // state to manage the cart items
  const [cart, setCart] = useState([])

  const [lightbox, setlightbox] = useState(false)

  const data = {
    id: "0",
    brand: "Sneaker Company",
    itemName: "Fall Limited Edition Sneakers",
    description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    discountPrice: "125",
    realPrice: "250.00"
  }

  let finalPrice = Number(data.discountPrice)

  //add the item to the card state
  //when a product is added the count is set to 1
  //the final price is set to the discountPrice * itemCount 
  //if it starts at 0 add 1 else itemCount
  const addToCart = () => {
    setCart(data)

    if (itemCount === 0) {
      setItemCount(1)
    }
    if (itemCount === 0) {
      let total = '$' + finalPrice * (itemCount + 1) + '.00'
      setTotalProducts(total)
    } else {
      let total = '$' + finalPrice * (itemCount) + '.00'
      setTotalProducts(total)
    }
  }

  //increase items and set the final price when a produc is added
  const increase = () => {
    setItemCount(prev => prev + 1)
    let total = '$' + finalPrice * (itemCount + 1) + '.00'
    setTotalProducts(total)
  }

  //decrease items (not less than 0) and set the final price when a produc is removed
  const decrease = () => {
    if (itemCount === 0) {
      return
    }
    if (itemCount - 1 === 0) {
      setCart([])
    }
    setItemCount(prev => prev - 1)
    let total = '$' + finalPrice * (itemCount - 1) + '.00'
    setTotalProducts(total)
  }

  const handleDelete = () => {
    setCart([])
    setItemCount(0)
  }

  const showLightbox = () => {
    setlightbox(!lightbox)
  }

  return (
    <>
    {lightbox &&
      <div className='fixed top-0 z-20'>
        <Lightbox showLightbox={showLightbox} />
      </div>
    }

    <header>
      <Navbar
          showbadge={itemCount > 1}
          itemName={cart.itemName}
          discountPrice={cart.discountPrice}
          cuantity={itemCount}
          total={itemCount > 1 ? totalProducts : ''}
          handleDelete={handleDelete}
          isCartEmpty={cart <= 0}
      />
    </header>

      <main className="md:px-20 md:pt-20 lg:pt-0 lg:px-28 pb-14 lg:pb-0 lg:flex lg:justify-center lg:items-center lg:gap-x-2">
        {windowWidth < '1024' 
        ?
          <CarrucelMobile />
        :
        <div className='lg:w-1/2 mt-14 lg:pb-10'>
          <CarrucelDesktop showLightbox={showLightbox} />
        </div>
        }

        <div className='md:mt-6 lg:w-1/2 lg:max-w-[27rem] lg:mx-auto'>
          <section className="px-4 py-4 md:px-0">
            <p className="uppercase text-[.7rem] md:text-sm text-Orange font-bold tracking-widest">{data.brand}</p>
            <h1 className="text-[1.7rem] md:text-4xl leading-8 font-bold my-3 lg:mb-6 text-VeryDarkBlue">{data.itemName} </h1>
            <p className="text-DarkGrayishBlue">
              {data.description}
            </p>
          </section>
          
          <section className="flex md:my-2 md:flex-col md:items-start justify-between items-center px-4 md:px-0">
            <p className="flex items-center gap-x-4">
              <span className="text-[1.7rem] font-bold text-VeryDarkBlue">{`$${data.discountPrice}.00`} </span>
              <span className="text-Orange px-1.5 py-[.2rem] bg-PaleOrange rounded text-xs font-bold"> 50%</span>
            </p>
            <del className="text-GrayishBlue font-bold text-sm">$ {data.realPrice} </del>
          </section>
          
          <section className="px-4 md:px-0 md:flex md:items-center md:gap-x-3" >
            <div className="md:w-2/3 flex items-center justify-between bg-LightGrayishBlue mt-5 mb-3 rounded-lg">
              <button className="group p-5" onClick={decrease} >
                <svg className='fill-[#FF7E1B] group-hover:fill-Orange/70'
                  width="12" height="4" xmlns="http://www.w3.org/2000/svg"><defs>
                  <path d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z" id="a"/></defs>
                  <use fillRule="nonzero" xlinkHref="#a"/>
                </svg>
              </button>
              <p className="font-bold">{itemCount} </p>
              <button className="group p-5" onClick={increase} >
                <svg className='fill-[#FF7E1B] group-hover:fill-Orange/70'
                  width="12" height="12" xmlns="http://www.w3.org/2000/svg"><defs>
                  <path d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z" id="b"/></defs>
                <use fillRule="nonzero" xlinkHref="#b"/></svg>
              </button>
            </div>

            <button onClick={addToCart}
              className='bg-Orange text-white flex items-center justify-center gap-x-3 py-3 lg:py-[.9rem] w-full font-bold rounded-lg
              shadow-xl shadow-Orange/20 hover:bg-Orange/70'>
              <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="white" fillRule="nonzero"/>
              </svg>
              Add to cart
            </button>
          </section>
          <Credits />
        </div>
      </main>
    </>
  )
}

export default App
