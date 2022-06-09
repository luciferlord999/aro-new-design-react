import React from 'react'

function Content() {
    return (
        <>

            {/* ============================ Property Type Start ================================== */}
            <section className="gray-simple min">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 shadow-lg bg-white mb-5">
                            <div className="sec-heading center">
                                <h2>Our Service</h2>
                                
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg col-md-4">
                            {/* Single Category */}
                            <div className="property_cats_boxs">
                                <a href="grid-layout-with-sidebar.html" className="category-box">
                                    <div className="property_category_short">
                                        <div className="category-icon clip-1">
                                            <i className="flaticon-beach-house-2" />
                                        </div>
                                        <div className="property_category_expand property_category_short-text">
                                            <h4>Family House</h4>
                                            <p>122 Property</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg col-md-4">
                            {/* Single Category */}
                            <div className="property_cats_boxs">
                                <a href="grid-layout-with-sidebar.html" className="category-box">
                                    <div className="property_category_short">
                                        <div className="category-icon clip-2">
                                            <i className="flaticon-cabin" />
                                        </div>
                                        <div className="property_category_expand property_category_short-text">
                                            <h4>House &amp; Villa</h4>
                                            <p>155 Property</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg col-md-4">
                            {/* Single Category */}
                            <div className="property_cats_boxs">
                                <a href="grid-layout-with-sidebar.html" className="category-box">
                                    <div className="property_category_short">
                                        <div className="category-icon clip-3">
                                            <i className="flaticon-apartments" />
                                        </div>
                                        <div className="property_category_expand property_category_short-text">
                                            <h4>Apartment</h4>
                                            <p>300 Property</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg col-md-4">
                            {/* Single Category */}
                            <div className="property_cats_boxs">
                                <a href="grid-layout-with-sidebar.html" className="category-box">
                                    <div className="property_category_short">
                                        <div className="category-icon clip-4">
                                            <i className="flaticon-student-housing" />
                                        </div>
                                        <div className="property_category_expand property_category_short-text">
                                            <h4>Office &amp; Studio</h4>
                                            <p>80 Property</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg col-md-4">
                            {/* Single Category */}
                            <div className="property_cats_boxs">
                                <a href="grid-layout-with-sidebar.html" className="category-box">
                                    <div className="property_category_short">
                                        <div className="category-icon clip-5">
                                            <i className="flaticon-modern-house-4" />
                                        </div>
                                        <div className="property_category_expand property_category_short-text">
                                            <h4>Villa &amp; Condo</h4>
                                            <p>80 Property</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ============================ Property Type End ================================== */}

        </>
    )
}

export default Content