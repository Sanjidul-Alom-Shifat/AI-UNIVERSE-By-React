import React from 'react';

const Header = () => {
    return (
        <div className='my-4'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <a className="btn btn-ghost normal-case text-xl font-bold">AI UNIVERSE</a>
                </div>
                <div className="navbar-end">
                    <a className="btn text-white">Details</a>
                </div>
            </div>
        </div>
    );
};

export default Header;