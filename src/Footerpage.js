import React from "react";

function Footerpage() {
    return (
        <div>
            <footer
                className="text-center text-lg-start text-white"
                style={{ backgroundColor: '#1c2331', color: 'white', padding: '20px' }}
            >
                <section
                    className="d-flex justify-content-between p-4"
                    style={{ backgroundColor: '#6351ce' }}
                >
                    <div className="me-5">
                        <span>Get connected with us on social networks:</span>
                    </div>

                    <div>
                        <a href="" className="text-white me-4">
                            <i className="fab fa-whatsapp"></i>
                        </a>
                        <a href="" className="text-white me-4">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="" className="text-white me-4">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="" className="text-white me-4">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="" className="text-white me-4">
                            <i className="fab fa-google"></i>
                        </a>
                    </div>

                </section>

                <section>
                    <div className="container text-center text-md-start mt-5">

                        <div className="row mt-3">

                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold">Arockiya Farms</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }}
                                />
                                <p>
                                    At Arockiya Farms, we specialize in sustainable pig,
                                    chicken, and fish farming. Our commitment to ethical farming practices ensures
                                    that our livestock and fish are raised in a healthy and natural environment.
                                </p>
                            </div>

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold">Products</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }}
                                />
                                <p>
                                    <a href="#!" className="text-white" style={{ textDecoration: 'none' }}>Pig</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-white" style={{ textDecoration: 'none' }}>Chicken</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-white" style={{ textDecoration: 'none' }}>Fish</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-white" style={{ textDecoration: 'none' }}>All Organic Vegetable</a>
                                </p>
                            </div>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold">Useful links</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }}
                                />
                                <p><a href="" className="text-white" style={{ textDecoration: 'none' }}>Your Account</a></p>
                                {/* <p><a href="" className="text-white" style={{ textDecoration: 'none' }}>Contact Us</a></p> */}
                                <p><a href="" className="text-white" style={{ textDecoration: 'none' }}>Privacy Policy</a></p>
                                <p><a href="" className="text-white" style={{ textDecoration: 'none' }}>Shipping Rates</a></p>
                                <p><a href="" className="text-white" style={{ textDecoration: 'none' }}>Help</a></p>
                            </div>

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                <h6 className="text-uppercase fw-bold">Contact</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }}
                                />
                                <p><i className="fas fa-home mr-3"></i> 1/100,Madha Kovil St,Kommedu,Viluppuram</p>
                                <p><i className="fas fa-envelope mr-3"></i> susaimm26@gmail.com</p>
                                <p><i className="fas fa-phone mr-3"></i> 7845449569 and 9843014828</p>

                            </div>

                        </div>

                    </div>
                </section>

                <div
                    className="text-center p-3"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
                >
                    © 2024 Copyright:
                    <a className="text-white" style={{ textDecoration: 'none' }} href="https://mdbootstrap.com/"> Arockiya Farms</a>
                </div>
            </footer>
        </div >
    );
}

export default Footerpage;
