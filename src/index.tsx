import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main';
import Contacts from './components/Contacts/Contacts';
import CreateContact from './components/CreateContact/CreateContact';
import EditContact from './components/Contacts/EditContact/EditContact';
import { QueryClient, QueryClientProvider } from "react-query";
import ChartsAndMaps from './components/ChartsAndMaps/ChartsAndMaps';
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path:'/',
        element: <Contacts></Contacts>
      },
      {
        path:'create-contact',
        element: <CreateContact></CreateContact>
      },
      {
        path:'/charts-maps',
        element: <ChartsAndMaps></ChartsAndMaps>
      },
      {
        path:'/edit-contact/:id',
        element:<EditContact></EditContact>
      }
    ]
  },
]);


root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    </QueryClientProvider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
