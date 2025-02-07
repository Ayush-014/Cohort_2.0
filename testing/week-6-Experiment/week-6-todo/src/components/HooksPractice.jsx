import { useState, useEffect } from 'react';

function HooksPractice() {
    const [counter, setCounter] = useState(0);
    const [title, setTitle] = useState('');
    const [firstTitle, setfirstTitle] = useState('');

    useEffect(() => {
        alert(counter);
    }, [counter]);

    function changetitle() {
        setfirstTitle('my name is: '+ Math.random);
    }
    return (
        <div>
            <button onClick={() => setCounter(prevCounter => prevCounter + 1)}>
                Increase Count {counter}
            </button>
            <button onClick={changetitle}>
                Click to change title
            </button>

            <header title={firstTitle}/>
            <header title='My name is raj'/>
            <header title='My name is raja'/>
            <header title='My name is rajan'/>
            <header title='My name is rajana'/>
        </div>
    );
}

const header = memo(({title})=>{
    return <>
        <h3>{title}</h3>
    </>
})

export default HooksPractice;
