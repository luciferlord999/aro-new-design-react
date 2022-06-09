import React from 'react'
import Navbar from '../Navbar/Navbar'
import Banner from '../Component/Banner'
import Content from '../Component/Content'

function Home() {
    return (
        <>
            <body class="yellow-skin">

                <div id="main-wrapper">
                    <Navbar />
            
                    <Banner />
                    <Content/>
                   


                </div>

            </body>
        </>

    )
}

export default Home