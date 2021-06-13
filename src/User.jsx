import React from 'react';

const User = (props) => {
    const { firstName, lastName } = props;
    return (
        <h3>Hi, {firstName} {lastName}</h3>
    )
}

export default User;