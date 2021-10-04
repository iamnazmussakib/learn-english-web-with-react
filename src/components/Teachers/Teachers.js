import React, { useEffect, useState } from 'react';
import Teacher from '../Teacher/Teacher';

const Teachers = () => {
    const [teachers, setTeachers] = useState([]);
    useEffect(()=>{
        fetch('./teacher.JSON')
        .then(res=>res.json())
        .then(data=>setTeachers(data));
    },[])
    return (
        <div>
            <h1 className="text-5xl font-bold text-green-600 text-center mt-16 mb-32">Best Teachers In Our Institute</h1>
            <div>
                {
                    teachers.map(teacher => <Teacher
                        key={teacher.id}
                        teacher={teacher}
                    ></Teacher>)
                }
            </div>
        </div>
    );
};

export default Teachers;