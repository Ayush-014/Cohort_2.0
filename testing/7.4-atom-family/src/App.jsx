import { useEffect } from 'react';
import './App.css'
import { RecoilRoot, useSetRecoilState, useRecoilValue } from 'recoil';
import { todosAtomFamily } from './atoms';

function App() {
  return <RecoilRoot>
    <UpdaterComponent />
    <Todo id={1}/>
    <Todo id={2} />
    <Todo id={2} />
    <Todo id={2} />
  </RecoilRoot>
}

function Todo({id}) {
  //  const [todo, setTodo] = useRecoilState(todosAtomFamily(id));
   const currentTodo = useRecoilValue(todosAtomFamily(id));
  return (
    <>
      {currentTodo.title}
      {currentTodo.description}
      <br />
    </>
  )
}

function UpdaterComponent() {
  const updateTodo = useSetRecoilState(todosAtomFamily(2));

  useEffect(() => {
    setTimeout(() => {
      updateTodo({
        id:2,
        title: "new todo",
        description: "new todo"
      })
    },5000)
  }, [])

  return <div></div>
}

export default App
