import React from 'react';


const DeleteContact = (props : {id: String}) => {


  const  deleteHandler = async() => {
    
    
    const response = await fetch(`http://localhost:3001/contact/${props.id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Error deleting contact');
      }else{
        window.location.reload();
      }
  }

    return (
        <div>
            <button onClick={deleteHandler} className='btn btn-warning'>Delete</button>
        </div>
    );
};

export default DeleteContact;