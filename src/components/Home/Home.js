import React, { useEffect, useState } from 'react';
import HomeService from '../HomeService/HomeService';

const Home = () => {
    //background bannder for home page
    const bgImg = {
        backgroundImage: "url('https://chrismukiibi.com/wp-content/uploads/2020/09/696dcdd6157d0438eed57eac9b6266b5.jpg')",
        backgroundSize: 'cover',
    }
    //load data
    const [homeServices, setHomeServices] = useState([]);
    useEffect(()=>{
        fetch('./servicehome.JSON')
        .then(res=>res.json())
        .then(data=>setHomeServices(data));
    },[])
    return (
        //main heading
        <div>
            <div style={bgImg} className="banner py-32 text-center">
                <div className="heading bg-gray-600 inline-block bg-opacity-50">
                    <h1 className="p-20 leading-normal text-green-500 text-8xl font-extrabold">BE <br /> <span className="text-white">EXPART IN</span> <br />ENGLISH</h1>
                </div>
            </div>
            {/* set loaded data  */}
            <div className="service-area container mx-auto my-8 text-center">
                <h2 className="text-6xl text-green-500 font-bold my-24">Our Services</h2>
                <div className="service grid gap-16 grid-cols-2">
                    {
                        homeServices.map(service => <HomeService
                            key={service.id}
                            service={service}
                        ></HomeService>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;