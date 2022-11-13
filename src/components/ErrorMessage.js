import React from 'react';

export function ErrorMessage({errorMessage}) {
    return (
        <h2 className="message">{errorMessage}</h2>
    );
}
