import React from "react";
import './Aboutpage.css';
import parthi from './pigphotos/parthi.jpeg';
import gnanam from './pigphotos/gnanam.jpeg';
import susai from './pigphotos/Susai.jpeg'
import Footerpage from "./Footerpage";




function Aboutpage() {
    return (
        <div>
            <div class="about-section">
                <h1 className="homepageabout">About Us Page</h1>
                <p>Welcome to Arockiya Farm, where our mission is to foster
                    sustainable agricultural practices and contribute to the local economy.
                </p>
                <p>Arockiya Farm is a proud asset of Nathan & Co, dedicated to
                    providing high-quality produce and supporting community growth.
                </p>
            </div>

            <h2 style={{ textAlign: 'center' }}>Our Team</h2>
            <div class="row bottom-scroll">
                <div class="column">
                    <div class="card">
                        <img src={susai} alt="susai" style={{ width: '100%' }} />
                        <div className="container">
                            <h2>Susai Nathan.S</h2>
                            <p className="title">CEO & Founder</p>
                            <p>Arockiya Farm was established to enhance our family's income and grow our business.</p>
                            <p>For any inquiries, please contact Susai Nathan & co.</p>
                            <p>Email: susaimm26@gmail.com</p>
                            <p class="button">Contact 784544569</p>
                        </div>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                        <img src={gnanam} alt="Mike" />
                        <div class="container">
                            <h2>GnanaSeela Nathan.S</h2>
                            <p className="title">Managing Director</p>
                            <p>As the Managing Director at Arockiya Farm,
                                I oversee operations to ensure efficiency and productivity.
                                My goal is to drive sustainable growth and innovation in our business practices.</p>
                            <p>Email: GnanaSeelan@gmail.com</p>
                            <p class="button">Contact 9843014828</p>
                        </div>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                        <img src={''} alt="John" />
                        <div class="container">
                            <h2>Sagaya Nathan.A</h2>
                            <p className="title">President</p>
                            <p>As the President of Arockiya Farm, I am committed to leading our team towards
                                achieving excellence in sustainable agriculture. My focus is on fostering innovation,
                                ensuring operational efficiency.
                            </p>
                            <p>Email: parthi@gmail.com</p>
                            <p class="button">Contact 9500735511</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footerpage />
        </div>
    );
}
export default Aboutpage;