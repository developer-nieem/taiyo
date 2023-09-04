import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import DeleteContact from './DeleteContact';

interface ContactData {
    _id: string;
    fName: string;
    lName: string;
    status: string;
  }
const ShowContacts = () => {
    
    const { isLoading, data, isError , refetch } = useQuery<ContactData[]>('contact', async () => {
        const response = await fetch('https://taiyo-server-developer-nieem.vercel.app/contact');
    
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
    
        return response.json();
      });
    
      if (isLoading) {
        return <span>Loading...</span>;
      }
    
      console.log(data);
      
      if (isError || !Array.isArray(data)) {
        return <div>Loading Data ..............</div>;
      }

     
      
    return (
        <div className='grid md:grid-cols-2 my-7'>
            {
               data?.map(item => <div className='p-5 bg-slate-200 m-2 rounded-lg' key={item._id}> 
               
               <h2 className='text-xl '> <span className='font-semibold'>First Name :</span>  {item.fName} </h2>
               <h2 className='text-xl '> <span className='font-semibold'>Last Name :</span>  {item.lName} </h2>
               <p className='text-xl '> <span className='font-semibold'>Status:</span>  {item.status}</p>
               <Link className='btn btn-secondary my-2' to={`/edit-contact/${item._id}`}>Edit</Link>
               <br />

               <DeleteContact id={item._id} hello={refetch}></DeleteContact>
               
               
               
                </div> )
            }
        </div>
    );
};

export default ShowContacts;