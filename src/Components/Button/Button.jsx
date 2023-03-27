import React from 'react';

const Button = ({children}) => {
    return (
        <div className='text-center mb-2'>
          <button className="btn btn-accent ">{children}</button> 
        </div>
    );
};

export default Button;