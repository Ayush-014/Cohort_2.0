import App from './App.jsx'

function MyApp() {
  return (
      <div>
        <h1>Custom App | chai</h1>
      </div>
  )

}

// this object will not render
// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank' },
    'click me to visit google'
)

ReactDOM.createRoot(document.getElementById('root')).
render(
    // reactElement //rendering an object
    // <MyApp />  // rendering an method
    // MyApp();   // rendering an method
)
