'use client'

import { useState, useEffect } from 'react'

const Input = () => {

    const [searchText, setSearchText] = useState('')

    const handleSearchChange = (event) => {
        event.preventDefault();
        setSearchText(event.target.value)
    }

    return <form className='relative w-full flex-center'>
        <input
            type='text'
            placeholder='Search for a tag or a username'
            value={searchText}
            onChange={handleSearchChange}
            required={true}
            className='search_input peer'
        />
    </form>
}

export default Input;