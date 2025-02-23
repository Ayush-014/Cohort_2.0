import { useContext, useState } from "react";
import { CountContext } from "./components/Context";

function App() {
  const [count, setCount] = useState(0);

  // Wrap anyone that wants to use the teleported value inside a provider.
  return (
    <div>
      <CountContext.Provider value={{ count, setCount }}>
        <Count />
      </CountContext.Provider>
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
  const { count, setCount } = useContext(CountContext);

  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrease</button>
    </div>
  );
}

function CountRenderer() {
  const { count } = useContext(CountContext);

  return <div>{count}</div>;
}

export default App;




// import { lazy, Suspense } from 'react';
// {/**Suspense is a React component that allows you to handle asynchronous rendering, primarily for lazy-loaded components and data fetching. It helps improve the user experience by displaying a fallback UI (like a loading spinner) while waiting for content to load. */}
// import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
// const Dashboard = lazy(() => import('./components/Dashboard'));
// const Home = lazy(() => import('./components/Home'));

// function App() {
//   // const navigate = useNavigate(); {/** this hook can only be invoked inside <BrowserRouter> component */}

//   return (
//     <div>
//       {/*1. <div style={{background: "black", color:"white"}}>
//           Hi this is the topbar
//       </div> */}

//       {/* 2. // not actually client side routing and actually refetching the home,dashboard page. i.e. actually a hard-reloading of the page-> all the html,css,js,etc are getting fetched again.
//        <div>
//         <button onClick={() => {
//           window.location.href = "/home"; }}>
//           Home
//         </button>
//         <button onClick={() => {
//           window.location.href = "/dashboard"; }}>
//           Dashboard
//         </button>
//       </div> */}

//       {/* 3. //this will not work properly bcz useNavigate expects that the component in which it is being used is inside the <BrowserRouter> component.
//       <div>
//         <button onClick={() => {
//           navigate("/home");
//         }}>
//           Home
//         </button>
//         <button onClick={() => {
//           navigate("/dashboard");
//         }}>
//           Dashboard
//         </button>
//       </div> */}

//       <BrowserRouter>
//         <AppBar />  {/* all the prevoius logic(just above comment i.e. 3rd one) is now wrapped inside a function to put it inside <BrowserRouter> component */}
//         <Suspense fallback={<div>Loading...</div>}>
//           <Routes>
//             {/* <Route path="/dashboard" element={<Suspense fallback={"Loading..."}> <Dashboard /> </Suspense>} />  // another way of using Suspense API for lazy loading*/}
//             <Route path="/dashboard" element={<Dashboard />} />
//             <Route path="/home" element={<Home />} />
//           </Routes>
//         </Suspense>
//       </BrowserRouter>
//     </div>
//   )
// }

// function AppBar() {
//   const navigate = useNavigate();

//   return <div>
//     <button onClick={() => {
//       navigate("/home");
//     }}>
//       Home
//     </button>
//     <button onClick={() => {
//       navigate("/dashboard");
//     }}>
//       Dashboard
//     </button>
//   </div>
// }

// export default App;
