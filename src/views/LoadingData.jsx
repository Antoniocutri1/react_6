import { useEffect, useState } from "react";
import List from "../components/List";


export default function LoadingData() {

    const [posts, setPosts] = useState() 
    const [trigger, setTrigger ] = useState(false)
    const [isVisible, setIsvisible] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const getData = async () =>{
        const promise = await fetch('https://jsonplaceholder.typicode.com/posts')
        const json = await promise.json();
        setPosts(json)
        
    }

    useEffect(()=>{
        setTimeout(() => {
            if (trigger) {
                getData()
                setIsLoading(false)
            }
        }, 1000);  
    }, [trigger])

    const click = () => {
        if (isVisible) {
            setTrigger(false)
            setIsvisible(false)
            setPosts(null)
        } else {
            setTrigger(true)
            setIsvisible(true)
            setIsLoading(true)
        }
        
    }

    return(
        <>
            <button className="button" onClick={click}>Cliccami</button>

            { isLoading && <p>Caricamento....</p>}
        
            <ul>
                {posts && isVisible && posts.map((post)=>{
                    return <List.Items key={post.id} name={post.title} id={post.id}></List.Items>
                })}
            </ul>
        </>
    )
}