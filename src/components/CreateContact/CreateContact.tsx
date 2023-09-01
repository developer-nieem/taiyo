import React from "react";
import PageTitle from "../Shared/PageTitle";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CreateContact = () => {

    const router =  useNavigate()
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
   
    
    const data = {
        fName: form.fname.value,
        lName: form.lname.value,
        status: form.active.value,
      };
  
      try {
        const response = await fetch('http://localhost:3001/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
          
        }else{
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your contact has been saved',
                showConfirmButton: false,
                timer: 1500
              })

              form.reset();
              router('/')
        }
  
         await response.json();
      } catch (error) {
        console.error('Error:', error);
      }



  };

  return (
    <div>
      <PageTitle title="Contact Page"></PageTitle>

      {/* save contact start here */}
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">First Name</span>
          </label>
          <input
            type="text"
            placeholder="First Name"
            className="input input-bordered"
            name="fname"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Last Name</span>
          </label>
          <input
            type="text"
            placeholder="Last Name"
            className="input input-bordered"
            name="lname"
            required
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

export default CreateContact;
