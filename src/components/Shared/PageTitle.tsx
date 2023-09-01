import React from 'react';

const PageTitle = (props : {title: String}) => {
    return (
        <div>
              <h1 className='bg-blue-500 w-full p-4 text-center  text-white font-semibold text-2xl'>{props.title}</h1>
        </div>
    );
};

export default PageTitle;