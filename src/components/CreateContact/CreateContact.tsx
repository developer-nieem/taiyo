import React from "react";
import PageTitle from "../Shared/PageTitle";

const CreateContact = () => {
  return (
    <div>
      <PageTitle title="Contact Page"></PageTitle>

      {/* save contact start here */}
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">First Name</span>
          </label>
          <input
            type="text"
            placeholder="First Name"
            className="input input-bordered"
            name="fname"
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
          />
        </div>
        <div className="flex gap-5 items-center">
          <h3 className="font-semibold">Status:</h3>
          <div>
            <div>
              <label>
                <input type="radio" name="active" id="active" checked  />
                <span>Active</span>
              </label>
            </div>
            <div>
              <label>
                <input type="radio" name="active" id="inactive"  checked />
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
