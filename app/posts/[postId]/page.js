import react from 'react'

const page = async ( {params} ) => {

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`,{next : {revalidate: 10}})
    const data = await res.json()

    return(
        <div>
            <h2>{data.title}</h2>
            <p>{data.body}</p>
        </div>
    )
}

export default page;

//1. Server Side Rendering (SSR)  {cache:'no-store'}
//2. Static Site Generation (SSG) {cache:''} (default)
//3. Incremental Static Generation (ISG) {next : {revalidate: 10}}