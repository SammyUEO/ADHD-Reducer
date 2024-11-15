import './Counter.css';

function Counter({ count, increase, decrease, reset }) {
    return (
        <div className="counter-container">
            <h1 className="counter-title">Counter: {count}</h1>
            <button className="counter-button increase" onClick={increase}>Increase</button>
            <button className="counter-button decrease" onClick={decrease}>Decrease</button>
            <button className='counter-button reset' onClick={reset}>Reset</button>
        </div>
    );
}

export default Counter;
