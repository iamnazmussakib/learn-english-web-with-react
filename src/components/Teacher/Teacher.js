import React from 'react';

const Teacher = (props) => {
    const {name, img, desc, phone, expart} = props.teacher;
    return (
        <div>
            <div className="flex justify-center">
                <img className="w-2/5" src={img} alt="" />
                <div className="ml-16">
                    <h2 className="text-3xl font-bold my-8">Name: {name}</h2>
                    <h3 className="text-2xl font-bold my-4">Speciality: {expart}</h3>
                    <p className="text-2xl my-8">phone: {phone}</p>
                    <p className="text-2xl my-8">Description: {desc}</p>
                </div>
            </div>
            <div className="divide divide-green-200 my-16"></div>
        </div>
    );
};

export default Teacher;