import React, { useEffect, useState } from "react"
import { useParams, useLoaderData } from "react-router-dom"

export default function Github() {
    const data = useLoaderData;

    // const { gitId } = useParams()
    // const [data, setData] = useState([])
    
    // useEffect(() => {
    //     fetch(`https://api.github.com/users/${gitId}`)
    //     .then((res) => res.json())
    //     .then((data) => setData(data))
    //     .catch((err) => console.log('Error :', err))
    // },[])

    return (
        <div className='bg-gray-600 text-white text-center text-3xl'>
            Github followers {data?.followers}
            <img src={data?.avatar_url} alt="Github avatar" width={300}/>
        </div>
    )
}

export const githubInfoLoader = async () => {
    const response = await fetch(`https://api.github.com/users/Ayush-014`)
    return response.json();
}