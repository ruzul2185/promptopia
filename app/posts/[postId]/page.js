import react from 'react'

const page = ( {params} ) => {
    return(
        <h1>POSTS! {params.postId}</h1>
    )
}

export default page;