import React from 'react';
import aboutImg from '../../images/about.jpg';

const About = () => {
    return (
        //about content
        <div className="container mx-auto">
            {/* about banner or heading */}
            <img className="w-full" src={aboutImg} alt="" />
            <p className="my-32 text-3xl font-bold text-center">Welcome to our Website. We are glad to have you around. For more help please contact with us .thank you and stay with us.</p>
            {/* contact us area/ address */}
            <div className="contact-us">
                <h2 className="text-5xl font-bold text-green-600 text-center">Contact Info</h2>
                <div className="info-area flex justify-between">
                    <div className="address w-2/5">
                        <p className="mt-16 text-2xl "><i className="mr-16 text-green-600 fas fa-phone"></i> Cell Phone: 01781301743</p>
                        <p className="mt-16 text-2xl "><i className="mr-16 text-green-600 fas fa-envelope"></i> Email: learnenglish@gmail.com</p>
                        <p className="mt-16 text-2xl "><i className="mr-16 text-green-600 fas fa-map-marker-alt"></i>Address: Opposite to the fallpatti <br /> mosque, dewan tower, (1st Floor), <br /> Mirpur-10, Dhaka 1216,Bangladesh.</p>
                    </div>
                    {/* masssage area */}
                    <div className="send-massage w-1/2">
                        <form action="#">
                            <div className="mt-16">
                                <input class="p-4 w-1/2 border-2 rounded-lg outline-none border-green-200" type="text" placeholder="Your Name" />
                                <input class="p-4 w-1/2 border-2 rounded-lg outline-none border-green-200" type="email" placeholder="Your Email" />
                            </div>
                            <div>
                                <textarea class="mt-16 p-4 w-full border-2 rounded-lg outline-none border-green-200" name="" id="" cols="30" rows="10" placeholder="Your Massage"></textarea>
                            </div>
                            <button className="py-2 px-8 bg-green-600 rounded-lg text-white my-8">Send Massage</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default About;