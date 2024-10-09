// 'use client'

// import {useEffect} from 'react'

import PromptCard from "@/components/PromptCard";


const PromptCardList = ({ data, handleTagClick }) => {
    return(
        <div className='mt-16 prompt_layout'>
            {data.map((post) => (
                <PromptCard
                    key={post._id}
                    post={post}
                    // handleTagClick={handleTagClick}
                />
            ))}
        </div>
    )
}

const getData = async()=>{
    const response = await fetch('https://promptopia.ganeshtechnologysolutions.com/api/prompt')
    return await response.json()
}

const Feed = async() => {

    // const [searchText, setSearchText] = useState('');
    // const [posts, setPosts] = useState([]);

    const handleSearchChange = (e) => {

    }
    const data = await getData()
    // useEffect(() => {
    //     const fetchPosts = async() => {
    //         const response = await fetch('/api/prompt')
    //         const data = await response.json()
    //
    //         setPosts(data)
    //     }
    //
    //     fetchPosts();
    // },[])

    return(
        <section className='feed'>
            <form className='relative w-full flex-center'>
                <input
                    type='text'
                    placeholder='Search for a tag or a username'
                    // value={searchText}
                    // onChange={handleSearchChange}
                    required={true}
                    className='search_input peer'
                />
            </form>

            <PromptCardList
                data={data}
                handleTagClick={()=>{}}
            />
        </section>
    )
}

export default Feed