import PromptCard from "@/components/PromptCard";
import {notFound} from "next/navigation";


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

const getData = async() => {
    const response = await fetch('http://localhost:3000/api/prompt')
    if (!response){
        return {
            notFound: true
        }
    }
    return await response.json()
}

const Feed = async () => {
    const data = await getData()

    return(
        <section className='feed'>
            <form className='relative w-full flex-center'>
            </form>

            <PromptCardList
                data={data}
                handleTagClick={()=>{}}
            />
        </section>
    )
}

export default Feed