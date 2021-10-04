import React from 'react';

const Service = (props) => {
    const {name, price, img} = props.service;
    return (
        // every single service for service page 
        <div className="border-2 border-green-100 py-8 px-44 mx-auto bg-green-50 bg-opacity-50 hover:shadow-2xl transition duration-500">
            <img className="h-72 w-96" src={img} alt="" />
            <h2 className="text-green-500 text-4xl font-semibold my-4">{name}</h2>
            <p className="font-bold">Price: {price}</p>
            <button className="py-2 px-8 bg-green-600 rounded-lg text-white my-8">Buy Now</button>
        </div>
    );
};

export default Service;