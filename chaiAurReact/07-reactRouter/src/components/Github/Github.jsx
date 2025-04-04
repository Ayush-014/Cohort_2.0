import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function Github() {
    const { gitId } = useParams()
    const [data, setData] = useState([])
    
    useEffect(() => {
        fetch(`https://api.github.com/users/${gitId}`)
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((err) => console.log('Error :', err))
    },[])

    return (
        <div className='bg-gray-600 text-white text-center text-3xl'>
            Github followers {data.followers}
            <img src={data.avatar_url} alt="Github avatar" />
        </div>
    )
}