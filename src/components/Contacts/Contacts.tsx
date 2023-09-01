import React from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../Shared/PageTitle';

const Contacts = () => {
    return (
        <div className='text-center'>
            <PageTitle title='Contact Page'></PageTitle>
           
            <Link className='btn btn-primary mt-10' to='/create-contact'>Create contact</Link>
        </div>
    );
};

export default Contacts;