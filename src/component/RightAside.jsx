import React from 'react';
import ContactUs from './ContactUs';
import Speakers from './Speakers';

const RightAside = () => {
    return (
        <div className='border rounded-xl bg-gray-900  border-gray-700 p-5'>
            <Speakers></Speakers>
            <ContactUs></ContactUs>
        </div>
    );
};

export default RightAside;
