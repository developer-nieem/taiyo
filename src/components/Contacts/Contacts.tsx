import React from "react";
import { Link } from "react-router-dom";
import PageTitle from "../Shared/PageTitle";
import ShowContacts from "./showContacts";


const Contacts = () => {
  return (
    <div className="text-center">
      <PageTitle title="Contact Page"></PageTitle>

      <Link className="btn btn-primary mt-10" to="/create-contact">
        Create contact
      </Link>
    
        <ShowContacts></ShowContacts>
      
    </div>
  );
};

export default Contacts;
