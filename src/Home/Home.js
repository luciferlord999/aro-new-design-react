import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Banner from '../Component/Banner'
import Content from '../Component/Content'
import Footer from '../Component/Footer'
import { useStateValue } from '../Context/StateProvider'

function Home() {
    const [{ cartShow, cartShowA , cartShowToast }, dispatch] = useStateValue();
    const [scrollValue, setScrollValue] = useState(0);
  
    useEffect(() => { }, [scrollValue, cartShow]);
    return (
        <>
            <body class="yellow-skin">

                <div id="main-wrapper">
                    <Navbar />

                    <Banner />
                    <Content />
                    <Footer/>



                </div>

            </body>
        </>

    )
}

export default Home