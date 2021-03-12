import React from 'react';
import image from '../../assets/check-this.png'

const EmptyMessage = () => {
    return (
        <div className="image-container">
            <img className="image" src={image} alt="start conversation" />
        </div>
    )
}

export default EmptyMessage;
