function customRender(reactElement, container) {
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children;
    // domElement.setAttribute('href', reactElement.props.href);
    // domElement.setAttribute('target', reactElement.props.target);
    // container.appendChild(domElement);

    //better approach:- It ensures all attributes (except children) are applied to the DOM element.

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if(prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement);

//     Setting innerHTML directly can be a security risk (e.g., XSS attacks) if the children value is user-generated.
//     A safer alternative would be to create text nodes explicitly:

//     const domElement = document.createElement(reactElement.type);
//     if (typeof reactElement.children === "string") {
//     domElement.appendChild(document.createTextNode(reactElement.children));
// }

}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement,mainContainer)