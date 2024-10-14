'use client'

import { useState } from "react";

const TextInput = () => {

    const [searchText, setSearchText] = useState('');

    return(
        <form className='relative w-full flex-center'>
            <input
                type='text'
                placeholder='Search for a tag or a username'
                value={searchText}
                onChange={(event)=>{
                    setSearchText(event.target.value)
                }}
                required={true}
                className='search_input peer'
            />
        </form>
    )
}

export default TextInput;