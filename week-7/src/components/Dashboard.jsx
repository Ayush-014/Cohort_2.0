export default function Dashboard() {
    return <div>
        Dashboard
        <Boldify>page</Boldify>
    </div>
}

function Boldify({children}) {
    return <b>
        {children}
    </b>
}