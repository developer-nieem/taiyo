import React from 'react';
import { Link } from 'react-router-dom';

const Contacts = () => {
    return (
        <div className='text-center'>
            <h1 className='bg-blue-500 w-full p-4  text-white font-semibold text-2xl'>Contact Page</h1>
           
            <Link className='btn btn-primary mt-10' to='/create-contact'>Create contact</Link>
        </div>
    );
};

export default Contacts;