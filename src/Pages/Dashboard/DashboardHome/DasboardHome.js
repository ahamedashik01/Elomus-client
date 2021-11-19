import React from 'react';
import useAuth from '../../../hooks/useAuth';

const DasboardHome = () => {
    const { user } = useAuth();
    return (
        <div>
            <h1>Welcome To Your Dashboard {user.displayName}</h1>
            <h3 className="mt-5">New features are comming soon</h3>
        </div>
    );
};

export default DasboardHome;