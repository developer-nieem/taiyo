import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

interface ContactData {
    _id: string;
    fName: string;
    lName: string;
    status: string;
  }
const EditContact = () => {
    const {id} = useParams()
    const [newFName , setnewFName] = useState<string>('')

    const [newLName , setnewLName] =  useState<string>('')

    const router =  useNavigate()

    // data fetch
    const {  data } = useQuery<ContactData[]>('contact', async () => {
        const response = await fetch('https://taiyo-server-developer-nieem.vercel.app/contact');
    
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
    
        return response.json();
      });
    
      useEffect(() => {
        const singleData =  data?.find(item=> item._id === id )
        setnewFName(singleData?.fName ?? '');
        setnewLName(singleData?.lName ?? '');
    }, [])
    
    // start form submit function
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();

    const form = e.target as HTMLFormElement;
   
    const data = {
        fName: form.fname.value,
        lName: form.lname.value,
        status: form.active.value,
      };

      const response = await fetch(`https://taiyo-server-developer-nieem.vercel.app/contact/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error('Error updating data');

      }else{
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your contact has been Updated',
                showConfirmButton: false,
                timer: 1500
              })

              
              router('/')
        }
  

}

    return (
        <div>
              <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">First Name</span>
          </label>
          <input 
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setnewFName(e.target.value)}
            type="text"
            placeholder="First Name"
            className="input input-bordered"
            name="fname"
            required
            value={newFName}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Last Name</span>
          </label>
          <input 
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setnewLName(e.target.value)}
            type="text"
            placeholder="Last Name"
            className="input input-bordered"
            name="lname"
            required
            value={newLName}
          />
        </div>
        <div className="flex gap-5 items-center">
          <h3 className="font-semibold">Status:</h3>
          <div>
            <div>
              <label>
                <input type="radio" name="active" value='active' id="active" checked />
                <span>Active</span>
              </label>
            </div>
            <div>
              <label>
                <input type="radio" name="active" value='inactive' id="inactive" checked />
                <span>Inactive</span>
              </label>
            </div>
          </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Save Contact</button>
        </div>
      </form>
        </div>
    );
};

export default EditContact;