import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Banner from '../Component/Banner'
import Content from '../Component/Content'
import Footer from '../Component/Footer'
import { useStateValue } from '../Context/StateProvider'
import CartInfo from '../Cart/CartInfo'

function Home() {
    const [{ cartShow, cartShowA , cartShowToast }, dispatch] = useStateValue();
    const [scrollValue, setScrollValue] = useState(0);
  
    useEffect(() => { }, [scrollValue, cartShow]);
    return (
        <>
           

                <div id="main-wrapper">
                    <Navbar />

                    <Banner />
                    <Content />
                    <Footer/>
                    {cartShowToast && <CartInfo/>}



                </div>

          
        </>

    )
}

export default Home