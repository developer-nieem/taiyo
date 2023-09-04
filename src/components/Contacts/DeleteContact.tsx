import React from 'react';


type DeleteContactProps = {
  id: string;
  hello: () =>void; // Adjust the type to match refetch
};
const DeleteContact = ({ id, hello }: DeleteContactProps) => {


  const  deleteHandler = async() => {
    
    
    const response = await fetch(`https://taiyo-server-developer-nieem.vercel.app/contact/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Error deleting contact');
      }else{
        // window.location.reload();
       await hello()
      }
  }

    return (
        <div>
            <button onClick={deleteHandler} className='btn btn-warning'>Delete</button>
        </div>
    );
};

export default DeleteContact;