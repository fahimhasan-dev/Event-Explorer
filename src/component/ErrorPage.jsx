import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='flex justify-center text-center mx-auto flex-col  ' >
<div className='flex justify-center items-center'>
<img className='w-[20%]' src="https://i.ibb.co.com/Wpv9kFXg/6sade-Fi9v-A.gif" alt="" /></div>
    
    
            <h1 className="text-4xl font-extrabold text-red-500">404-Page Not Found</h1>
            <p className='text-xl font-semibold mt-3'>Oops! The Page you're looking for doesn't exist</p>
           <Link to="/"><div><button className='btn mt-5 bg-[#56b92f] rounded-sm p-3 text-white font-bold hover:bg-[#498147] '>Go Back Home</button></div></Link> 
        </div>
   

           
    );
};

export default ErrorPage;