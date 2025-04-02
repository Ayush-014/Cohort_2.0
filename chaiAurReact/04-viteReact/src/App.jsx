
function App() {
  const [counter, setCounter] = useState(0)

  const AddValue1 = () => {
    setCounter(counter+1);
    setCounter(counter+1);
    setCounter(counter+1);
    setCounter(counter+1);
  }

  const AddValue2 = () => {
    setCounter(preCounter => preCounter+1);
    setCounter(preCounter => preCounter+1);
    setCounter(preCounter => preCounter+1);
    setCounter(preCounter => preCounter+1);
  }

  return (
    <>
        {/* an interview problem */}

      <button onClick={AddValue1} />  {/* counter will be incremented by 1 at the end */}
      <button onClick={AddValue2} />  {/* counter will be incremented by 4 at the end */}
    </>
  )
}

export default App