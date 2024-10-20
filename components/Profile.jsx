

import PromptCard from "@/components/PromptCard";
import PromptCardList from "@/components/PromptCard";

const Profile = async ({ name, desc, data, handleDelete, handleEdit}) => {
    return(
        <section className='w-full'>
            <h1 className='head_text text-left'>
                <span className='blue_gradient'>{name} Profile</span>
            </h1>
            <p className='desc text-left'>
                {desc}
            </p>
            <section className='w-full flex-center flex-col'>
                    <PromptCardList
                        data={data}
                    />
            </section>
        </section>
    )
}

export default Profile