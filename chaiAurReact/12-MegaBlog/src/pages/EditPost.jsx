import React, { useEffect, useState } from 'react'
import { Container, PostForm } from '../components/index.js'
import appwriteService from "../appwrite/config.js"
import { useParams, useNavigate } from 'react-router-dom'

export default function EditPost() {
    const [post, setPost] = useState([])
    const { slug } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if(slug) {
            appwriteService.getPost(slug)
            .then((post) => {
                if(post)
                    setPosts(post)
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])
    return post ? (
        <div className='py-8'>
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
    ) : null
}