
import PromptCardList from "@/components/PromptCard";
import Input from '@/components/Input';
import {url} from "@/utils/urlconstant";


const Feed = async() => {

    const response = await fetch(`${url}/api/prompt`)
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