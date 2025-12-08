import { useEffect, useState } from "react"
import { useParams } from "react-router"

export default function DetailView() {

    const {id} = useParams()
    const [post, setPost] = useState()

    const getData = async () =>{
        const promise = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        const json = await promise.json();
        setPost(json)  
    }

    useEffect(()=>{
        getData()
    }, [])

    return(
        <>
            <h1>DETTAGLIO</h1>

            {post && <>

                <h2>Titolo: {post.title}</h2>
                <p><strong>Body:</strong> {post.body}</p>

            </> 
            }
        </>
    )
    
}