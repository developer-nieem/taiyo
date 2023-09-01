import React from "react";
import { Link } from "react-router-dom";
import PageTitle from "../Shared/PageTitle";
import ShowContacts from "./showContacts";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

const Contacts = () => {
  return (
    <div className="text-center">
      <PageTitle title="Contact Page"></PageTitle>

      <Link className="btn btn-primary mt-10" to="/create-contact">
        Create contact
      </Link>
      <QueryClientProvider client={queryClient}>
        <ShowContacts></ShowContacts>
      </QueryClientProvider>
    </div>
  );
};

export default Contacts;
