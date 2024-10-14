// 'use client'

// import {useEffect} from 'react'

import PromptCard from "@/components/PromptCard";
import TextInput from "@/components/TextInput";


const PromptCardList = ({ data, handleTagClick }) => {
    return(
        <div className='mt-16 prompt_layout'>
            {data.map((post) => (
                <PromptCard
                    key={post._id}
                    post={post}
                />
            ))}
        </div>
    )
}

const getData = async()=>{
    const response = await fetch('https://promptopia.ganeshtechnologysolutions.com/api/prompt', { next: { revalidate: 1000 } })
    return await response.json()
}

const Feed = async() => {

    const data = await getData()

    return(
        <section className='feed'>
            <TextInput />
            <PromptCardList
                data={data}
                handleTagClick={()=>{}}
            />
        </section>
    )
}

export default Feed