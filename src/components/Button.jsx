import React from 'react';
import './Button.css';

const Button = ({ resetCount }) => {
    const handleClick = () => {
        alert("Ai apasat butonul magic! Acum el iti va reseta counterul! Surprise! :))");
        resetCount();
    };

    return (
        <div className="button-container">
            <button className="styled-button" onClick={handleClick}>Click Me!</button>
        </div>
    );
}

export default Button;
