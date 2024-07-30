import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import './Gallery.css'
import Footerpage from "./Footerpage";
import axios from 'axios';

function Contact() {


    const [firstName, setFirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [phonenumber, setphonenumber] = useState("");
    const [email_id, setemail_id] = useState("");

    const firstNameChange = (e) => {
        setFirstName(e.target.value);
    }
    const lastNameChange = (e) => {
        setlastName(e.target.value);
    }
    const phoneNumberChange = (e) => {
        setphonenumber(e.target.value);
    }
    const emailChange = (e) => {
        setemail_id(e.target.value);
    }



    const onClickSave = async () => {
        const payload = {
            firstName,
            lastName,
            phonenumber,
            email_id
        }
        try {
            const response = await axios.post('http://localhost:4000/api/post/contact', payload);
            console.log(response);
            console.log(response.data, "LOLOLO");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <div className="about-section">
                <h1 className="homepageabout">Contact Us Page</h1>
                <p>We are Free to Help you contact us</p>
            </div>

            <section className="section section-xl bg-default text-md-left">
                <div className="container">
                    <div className="title-classic top-tittle">
                        <h3 className="title-classic-title">Get in touch</h3>
                        <p className="title-classic-subtitle">
                            We are available 24/7 by e-mail or by phone. You can also use our
                            <br className="d-none d-lg-block" />
                            quick contact form to ask a question about our products.
                        </p>
                    </div>

                    <div className="row row-border" >
                        <div className="col-12 col-md-4">
                            <span>First Name:</span>
                            <input
                                className="form-input form-control-has-validation form-control"
                                id="contact-phone-2"
                                type="text"
                                name="firstName"
                                value={firstName}
                                onChange={firstNameChange}
                            />
                        </div>
                        <div className="col-12 col-md-4">
                            <span>Last Name:</span>
                            <input
                                className="form-input form-control-has-validation form-control"
                                id="contact-phone-2"
                                type="text"
                                name="lastName"
                                value={lastName}
                                onChange={lastNameChange}
                            />
                        </div>
                        <div className="col-12 col-md-4">
                            <span>Phone Number:</span>
                            <input
                                className="form-input form-control-has-validation form-control"
                                id="contact-phone-2"
                                type="text"
                                name="phone"
                                value={phonenumber}
                                onChange={phoneNumberChange}
                            />
                        </div>
                        <div className="col-12 col-md-4 mb-3 mt-5">
                            <span htmlFor="last-name" className="form-label">Email-ID:</span>
                            <input
                                className="form-input form-control-has-validation form-control"
                                id="last-name"
                                type="text"
                                name="email"
                                value={email_id}
                                onChange={emailChange}
                            />
                        </div>
                        <Button className="mt-5" variant="secondary" onClick={onClickSave}>Save</Button>
                    </div>

                </div>
            </section>

            <section class="contact-sec section-xl bg-gray-4">
                <div class="container">
                    <div class="row row-30 justify-content-center">
                        <div class="col-sm-6 col-md-4">
                            <h4>Phones</h4>
                            <ul class="contacts-classic">
                                <li>Office <p>9843014828 </p>
                                </li>
                                <li>Admin <p>7845449569</p>
                                </li>
                            </ul>
                        </div>
                        <div class="col-sm-6 col-md-4">
                            <h4>Address</h4>
                            <div class="contacts-classic"><p>1/100, Madhda kovil St <br />Viluppuram, pin-604205</p></div>
                        </div>
                        <div class="col-sm-6 col-md-4">
                            <h4>E-mails</h4>
                            <ul className="contacts-classic">
                                <li><p>susaimm26@gmail.com</p></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <div className="footerpage">

            <Footerpage />
        </div>
        
    </div >
    )
}
export default Contact;