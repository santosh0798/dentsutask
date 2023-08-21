import React from 'react';

function InputComponent({ inputValue, onDecrement, onIncrement }) {
    return (
        <div>
            <button onClick={onDecrement} disabled={inputValue <= 2}>
                -
            </button>
            <input type="number" value={inputValue} readOnly />
            <button onClick={onIncrement} disabled={inputValue >= 10}>
                +
            </button>
        </div>
    );
}

export default InputComponent;
