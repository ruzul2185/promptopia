'use client';

import { useState } from "react";
import { useRouter } from "next/router";
import Form from '@/components/Form';

const EditPrompt = ({ initialPrompt }) => {
    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState({
        prompt: initialPrompt.prompt,
        tag: initialPrompt.tag
    });

    const router = useRouter();
    const { id: promptId } = router.query;

    const updatePrompt = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        if (!promptId) {
            return alert('Prompt ID not found');
        }

        try {
            const response = await fetch(`/api/prompt/${promptId}`, {
                method: 'PATCH',
                body: JSON.stringify({
                    prompt: post.prompt,
                    tag: post.tag,
                })
            });
            if (response.ok) {
                router.push('/');
            }
        } catch (error) {
            console.log(error);
        } finally {
            setSubmitting(false);
        }
    };

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
    );
};

export async function getServerSideProps(context) {
    const { id } = context.query;
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/prompt/${id}`);
    const data = await response.json();

    return {
        props: {
            initialPrompt: data,
        },
    };
}

export default EditPrompt;
