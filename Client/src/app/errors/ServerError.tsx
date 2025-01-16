import React from 'react';

const ServerError: React.FC = () => {
    return (
        <div className="server-error">
            <h1>500 - Server Error</h1>
            <p>Something went wrong on our end. Please try again later.</p>
        </div>
    );
};

export default ServerError;