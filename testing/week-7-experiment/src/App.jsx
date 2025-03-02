import { useContext, useState } from "react"
import { CountContext } from "./Context";
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom } from "./store/atoms/Count"

function App() {
  return (
    <div>
      <RecoilRoot>
        <Todo />
      </RecoilRoot>
    </div>
  )
}

function Todo() {
  const [title,setTitle] = useState("");
  return <div>
    <input placeholder="title" onChange={(e) => {
      setValue(e.target.value)
    }}></input>
    <input placeholder="description"></input>
    <button>Add Todo</button>
  </div>
}

export default App


{/**
import { useContext, useState } from "react"
import { CountContext } from "./Context";
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom } from "./store/atoms/Count"

function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  )
}
function Count() {
  return <div>
    <CountRenderer />
    <Buttons />
  </div>
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);

  return <div>
    <b>
      {count}
    </b>
    <EvenCountRenderer />
  </div>
}

function EvenCountRenderer() {
  const count = useRecoilValue(countAtom);
  return <div>
    {(count % 2 == 0) ? "It is even" : null}
  </div>
}

function Buttons() {
  // const [count, setCount] = useRecoilState(countAtom); //unnecessary re-rendering of Button component while setCount update as 'count' is imported unnecessarily.
  const setCount = useSetRecoilState(countAtom);
  return <div>
    <button onClick={() => {
      setCount(count => count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count => count - 1)
    }}>Decrease</button>
  </div>
}

export default App
  */}