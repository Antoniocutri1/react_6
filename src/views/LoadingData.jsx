import { useEffect, useState } from "react";
import List from "../components/List";


export default function LoadingData() {

    const [users, setUsers] = useState() 
    const [trigger, setTrigger ] = useState(false)
    const [isVisible, setIsvisible] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const getData = async () =>{
        const promise = await fetch('https://jsonplaceholder.typicode.com/users')
        const json = await promise.json();
        setUsers(json)
        
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
            setUsers(null)
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
                {users && isVisible && users.map((user)=>{
                    return <List.Items key={user.name} name={user.name} email={user.email}></List.Items>
                })}
            </ul>
        </>
    )
}