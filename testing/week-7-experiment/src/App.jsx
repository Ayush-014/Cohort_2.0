import { useContext } from "react";
import { CountContext } from "./components/Context";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { countAtom } from "./store/atoms/Count";

function App() {

  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  );
}

function Count() {
  return (
    <div>
      <CountRenderer />
      <Buttons />
    </div>
  );
}

function Buttons() {
  const [count, setCount] = useRecoilState(countAtom);

  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrease</button>
    </div>
  );
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);

  return 
    <div>
      {count}
    </div>;
}

export default App;