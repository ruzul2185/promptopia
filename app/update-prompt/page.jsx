'use client'

import {Suspense, useEffect, useState} from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Form from '@/components/Form';


const EditPrompt = () => {
    const [submitting, setSubmitting] = useState(false)
    const [post, setPost] = useState({
        prompt:'',
        tag:''
    })
    const searchParams = useSearchParams()
    const promptId = searchParams.get('id')

    useEffect(() => {
        const getPromptDetails = async() => {
            const response = await fetch(`/api/prompt/${promptId}`)
            const data = await response.json()
            setPost({
                prompt: data.prompt,
                tag: data.tag,
            })
        }

        if(promptId) {
            getPromptDetails()
        }

    },[promptId])

    const router = useRouter()

    const updatePrompt = async(e) => {
        e.preventDefault()
        setSubmitting(true)

        if(!promptId) {
            return alert('Prompt ID not found')
        }

        try{
            const response = await fetch(`/api/prompt/${promptId}`,{
                method:'PATCH',
                body: JSON.stringify({
                    prompt: post.prompt,
                    tag: post.tag,
                })
            })
            if (response.ok) {
                router.push('/')
            }
        }catch(error) {
            console.log(error)
        }finally {
            setSubmitting(false)
        }
    }

    return (
        <div>
                <Form
                    type='Edit'
                    post={post}
                    setPost={setPost}
                    submitting={submitting}
                    handleSubmit={updatePrompt}
                />
        </div>
    )
}

const Page = () => {
    return <Suspense>
            <EditPrompt />
            </Suspense>
}

export default Page