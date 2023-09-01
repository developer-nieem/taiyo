import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

interface ContactData {
    _id: number;
    fName: string;
    lName: string;
    status: string;
  }
const ShowContacts = () => {
    
    const { isLoading, data } = useQuery<ContactData[]>('contact', async () => {
        const response = await fetch('http://localhost:3001/contact');
    
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
    
        return response.json();
      });
    
      if (isLoading) {
        return <span>Loading...</span>;
      }
    
    console.log(data);
    
      
    return (
        <div className='grid md:grid-cols-2 my-7'>
            {
               data?.map(item => <div className='p-5 bg-slate-200 m-2 rounded-lg' key={item._id}> 
               
               <h2 className='text-xl '> <span className='font-semibold'>First Name :</span>  {item.fName} </h2>
               <h2 className='text-xl '> <span className='font-semibold'>Last Name :</span>  {item.lName} </h2>
               <p className='text-xl '> <span className='font-semibold'>Status:</span>  {item.status}</p>
               <Link className='btn btn-secondary my-2' to={`/edit-contact/${item._id}`}>Edit</Link>
               <br />
               <Link className='btn btn-warning' to='/'>Delete</Link>
               
               
                </div> )
            }
        </div>
    );
};

export default ShowContacts;