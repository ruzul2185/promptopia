
import PromptCardList from "@/components/PromptCard";
import Input from '@/components/Input';


const Feed = async() => {

    const response = await fetch(process.env.URL + 'api/prompt')
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