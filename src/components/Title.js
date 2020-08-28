import React from 'react';

const Image = require('./img.jpg')

const Title = () => {
    return (
        <div>
            <img src={Image} height="500px" width="100%" />
        </div>
    );
}

export default Title;