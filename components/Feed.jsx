
import PromptCardList from "@/components/PromptCard";
import Input from '@/components/Input';


const Feed = async() => {

    const response = await fetch('http://localhost:3000/api/prompt',{cache:'no-store'})
    const data = await response.json()

    return(
        <section className='feed'>
            <Input />
            <PromptCardList
                data={data}
            />
        </section>
    )
}

export default Feed