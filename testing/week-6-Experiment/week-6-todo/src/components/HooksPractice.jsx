import { useState } from 'react';

function HooksPractice() {
    const [counter, setCounter] = useState(0);
    const [firstTitle, setFirstTitle] = useState('');

    function changeTitle() {
        setFirstTitle('My name is: ' + Math.random());
    }

    return (
        <div>
            <button onClick={() => setCounter(prevCounter => prevCounter + 1)}>
                Increase Count {counter}
            </button>
            <button onClick={changeTitle}>
                Click to change title
            </button>

            <Header title={firstTitle} />
            <Header title="My name is Raj" />
            <Header title="My name is Raja" />
            <Header title="My name is Rajan" />
            <Header title="My name is Rajana" />
        </div>
    );
}

// Define Header as a separate component
const Header = ({ title }) => {
    return <h3>{title}</h3>;
};

export default HooksPractice;
