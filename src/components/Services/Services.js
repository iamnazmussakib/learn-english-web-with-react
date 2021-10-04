import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [allService, setAllService] = useState([]);
    useEffect(()=>{
        fetch('./service.JSON')
        .then(res=>res.json())
        .then(data=>setAllService(data));
    },[])
    return (
        <div className="service-area container mx-auto my-8 text-center">
                <h2 className="text-6xl text-green-600 font-bold my-24">Our All Services</h2>
                <div className="service grid gap-16 grid-cols-2">
                    {
                        allService.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>
    );
};

export default Services;