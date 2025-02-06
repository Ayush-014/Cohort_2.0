import { useState, useEffect } from 'react';

function HooksPractice() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        alert(counter);
    }, [counter]);

    return (
        <div>
            <button onClick={() => setCounter(prevCounter => prevCounter + 1)}>
                Increase Count {counter}
            </button>
        </div>
    );
}

export default HooksPractice;
