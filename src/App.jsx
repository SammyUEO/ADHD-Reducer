import React, { useState } from 'react';
import NavBar from './components/NavBar/NavBar'; 
import Button from './components/Button';
import Counter from './components/NavBar/Counter';
import './App.css';

function Greetings(props) {
    return <h1 className="greetings">Hello, {props.name}!</h1>;
}

const App = () => {
    const [count, setCount] = useState(0);

    const increaseCount = () => setCount(count + 1);
    const decreaseCount = () => setCount(count - 1);
    const resetCount = () => setCount(0);

    return (
        <div className="app-container">
            <NavBar />
            <Greetings name="Sammy" />
            <Counter count={count} increase={increaseCount} decrease={decreaseCount} reset={resetCount} />
            <Button resetCount={resetCount} />
        </div>
    );
}

export default App;
